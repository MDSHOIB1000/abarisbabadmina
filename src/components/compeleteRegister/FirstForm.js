import { useEffect, useState } from "react";
import {
  adharGenerateOtp,
  panNumberVarify,
  subOtp,
} from "../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { toastErrorMessage, toastSuccessMessage } from "./ToastShare";

// FirstForm Component
export const FirstForm = ({
  setState,
  state,
  datas,
  getVarifyall,
  adhaar_number,
  allData,
}) => {
  // States
  const [pannum, setpannum] = useState(); // PAN number
  const [aharnum, setaharnum] = useState(adhaar_number ? adhaar_number : ""); // Aadhaar number
  const [disabledFileds, setdisabledFileds] = useState({ pan: false, aadhar: false }); // Field disable state
  const [OtpAdhar, setOtpAdhar] = useState(); // Aadhaar OTP
  const [adharOtpGet, setadharOtpGet] = useState(false); // Aadhaar OTP sent status
  const [loader, setloader] = useState(false); // Loader for PAN verification
  const [loader1, setloader2] = useState(false); // Loader for Aadhaar OTP generation
  const [loader3, setloader3] = useState(false); // Loader for Aadhaar OTP submission
  const [panbuttonDis, setpanbuttonDis] = useState(true); // PAN button disable state
  const [pAdhbuttonDis, setpAdhbuttonDis] = useState(true); // Aadhaar button disable state
  const [isBlurred, setIsBlurred] = useState(true); // PAN name blur state
  const [isBlurred2, setIsBlurred2] = useState(true); // Aadhaar name blur state

  // Use effect to handle data changes in the form
  useEffect(() => {
    setpannum(datas?.pan_number);
    setaharnum(allData?.adhaar_number);

    if (datas?.adhaarVerified) {
      setpanbuttonDis(true);
    }
    if (datas?.panVerified) {
      setpAdhbuttonDis(true);
    }
    if (adhaar_number) {
      setdisabledFileds({
        ...disabledFileds,
        pan: datas?.panVerified,
        aadhar: datas?.adhaarVerified,
      });
      return;
    }
    setdisabledFileds({
      ...disabledFileds,
      pan: datas?.panVerified,
      aadhar: datas?.adhaarVerified,
    });
  }, [datas, adhaar_number, allData]);

  // Submit PAN number for verification
  const submitPanNumber = async () => {
    setloader(true);
    try {
      const res = await panNumberVarify({
        pan: pannum,
        user_id: window.localStorage.getItem("userToken"),
      });
      setloader(false);

      if (res?.data?.error == false) {
        toastSuccessMessage(res?.data?.message);
        setpanbuttonDis(true);
        setdisabledFileds({
          ...disabledFileds,
          pan: true,
          aadhar: datas?.adhaarVerified,
        });
        getVarifyall();
      }

      if (res?.data?.error == true) {
        toastErrorMessage(res?.data?.message);
      }
    } catch (error) {
      setloader(false);
    }
  };

  // Generate Aadhaar OTP
  const adharGenerateOtpSub = async () => {
    setloader2(true);
    try {
      const res = await adharGenerateOtp({
        adhaarNumber: aharnum,
        user_id: window.localStorage.getItem("userToken"),
      });
      setloader2(false);
      if (res?.data?.statusCode == 200) {
        window.localStorage.setItem("ref_id", res.data.data.ref_id);
        toastSuccessMessage("Aadhaar OTP sent successfully");
        setTimeout(() => {
          setadharOtpGet(true);
        }, 1000);
      }

      if (res?.data?.error == true) {
        toastErrorMessage(res?.data?.message);
      }
    } catch (error) {
      setloader2(false);
    }
  };

  // Submit Aadhaar OTP
  const OtpSubmit = async () => {
    setloader3(true);
    try {
      const res = await subOtp({
        otp: OtpAdhar,
        user_id: window.localStorage.getItem("userIdToken"),
        ref_id: window.localStorage.getItem("ref_id"),
      });
      setloader3(false);
      if (res?.data?.statusCode == "401") {
        toastErrorMessage(res?.data?.message);
      }
      if (res?.data?.statusCode == 200) {
        toastSuccessMessage("Identity verified successfully");
        setTimeout(() => {
          setState((prev) => prev + 1);
          window.localStorage.setItem("steps", state);
        }, 1000);
      } else {
        alert(res?.data?.message);
      }
    } catch (error) {
      setloader3(false);
    }
  };

  // Enable editing of fields
  const ChangeDisable = (str) => {
    setdisabledFileds({ ...disabledFileds, [str]: false });
    setpanbuttonDis(false);
  };

  // Handle OTP input change
  const OtpchangeHandle = (e) => {
    if (e.target.value.length == 7) {
      return;
    }
    setOtpAdhar(e.target.value);
  };

  // Handle PAN input change
  const setpannums = (e) => {
    setpannum(e.target.value.toUpperCase());
    setdisabledFileds({ ...disabledFileds, pan: false });
    setpanbuttonDis(false);
  };

  // Handle Enter key press for PAN input
  const panKeyDown = (e) => {
    if (e.key === "Enter") {
      submitPanNumber();
    }
  };

  // Handle Enter key press for Aadhaar OTP generation
  const AdharKeyDown = (e) => {
    if (e.key === "Enter") {
      adharGenerateOtpSub();
    }
  };

  // Handle Enter key press for Aadhaar OTP submission
  const AdharKeyDown2 = (e) => {
    if (e.key === "Enter") {
      OtpSubmit();
    }
  };

  // Handle Aadhaar input change
  const changeAdharcard = (e) => {
    setaharnum(e.target.value.replace(/[^0-9]/g, ""));
    setpAdhbuttonDis(!e.target.value?.length);
  };

  // Handle focus for PAN name
  const handleFocus = () => {
    setIsBlurred(!isBlurred);
  };

  // Handle blur for PAN name
  const handleBlur = () => {
    setIsBlurred(true);
  };

  // Handle focus for Aadhaar name
  const handleFocus2 = () => {
    setIsBlurred2(!isBlurred2);
  };

  // Handle blur for Aadhaar name
  const handleBlur2 = () => {
    setIsBlurred2(true);
  };

  // Handle form submission
  const submitHandler = () => {
    setState(1);
    window.localStorage.setItem("steps", 1);
  };

  return (
    <form>
      <div className="mb-3 pancars editBoxCanten">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Pan Number{" "}
          {disabledFileds.pan && (
            <span className="varifyd">
              <MdVerified />
            </span>
          )}
        </label>
        <div id="emailHelp" className="form-text">
          Please provide your PAN number. Ensure the PAN number is registered
          under an individual's name.
        </div>
        <input
          type="text"
          disabled={disabledFileds.pan}
          value={pannum}
          onChange={setpannums}
          onKeyDown={panKeyDown}
          className="form-control fw-bold"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        {disabledFileds.pan && (
          <div
            className="editBox"
            onClick={() => {
              ChangeDisable("pan");
            }}
          >
            <TiEdit />
          </div>
        )}

        <div className="d-flex">
          {disabledFileds.pan && (
            <>
              <div
                id="emailHelp"
                onBlur={handleBlur}
                className={isBlurred ? "blurred mr-3" : "form-text varifyd mr-3"}
                style={{ color: "green" }}
              >
                Name: {datas?.pan_name}
              </div>
              <span>
                {isBlurred ? (
                  <FaEye
                    onClick={handleFocus}
                    style={{ fontSize: "20px", color: "black" }}
                  />
                ) : (
                  <FaEyeSlash
                    onClick={handleFocus}
                    style={{ fontSize: "20px", color: "black" }}
                  />
                )}
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={submitPanNumber}
          style={{ backgroundColor: "#2E3191", margin: "6px 0" }}
          disabled={panbuttonDis}
          className="btn btn-primary"
        >
          Verify Pan{" "}
          {loader && (
            <div
              style={{ height: "16px", width: "16px" }}
              className="spinner-border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </button>
      </div>

      {!adharOtpGet ? (
        <div className="mb-3 pancars editBoxCanten">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter Aadhaar Number{" "}
            {datas?.adhaarVerified && (
              <span className="varifyd">
                <MdVerified />
              </span>
            )}
          </label>
          <div id="emailHelp" className="form-text">
            Please enter your Aadhaar number. We will verify your Aadhaar by
            sending an OTP to the mobile number linked with it. Ensure that the
            name on your Aadhaar matches the name on your PAN card.
          </div>
          <input
            type="text"
            value={aharnum}
            onChange={changeAdharcard}
            disabled={disabledFileds.aadhar}
            onKeyDown={AdharKeyDown}
            className="form-control fw-bold"
            id="exampleInputPassword1"
          />

          <div className="d-flex">
            {disabledFileds.aadhar && (
              <>
                <div
                  id="emailHelp"
                  onBlur={handleBlur2}
                  className={
                    isBlurred2 ? "blurredd mr-3" : "form-text varifyd mr-3"
                  }
                  style={{ color: "green" }}
                >
                  Name: {allData?.adhaar_name}
                </div>
                <span>
                  {isBlurred2 ? (
                    <FaEye
                      onClick={handleFocus2}
                      style={{ fontSize: "20px", color: "black" }}
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={handleFocus2}
                      style={{ fontSize: "20px", color: "black" }}
                    />
                  )}
                </span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={adharGenerateOtpSub}
            style={{ backgroundColor: "#2E3191", margin: "6px 0" }}
            disabled={pAdhbuttonDis}
            className="btn btn-primary"
          >
            Verify Aadhaar{" "}
            {loader1 && (
              <div
                style={{ height: "16px", width: "16px" }}
                className="spinner-border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </button>
        </div>
      ) : (
        <div className="mb-3 pancars">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter OTP
          </label>
          <input
            type="number"
            onChange={OtpchangeHandle}
            value={OtpAdhar}
            onKeyDown={AdharKeyDown2}
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="emailHelp" className="form-text">
            An OTP has been sent to the mobile number linked with your{" "}
            <strong>Aadhaar</strong>.
          </div>
          <button
            type="button"
            onClick={OtpSubmit}
            style={{ margin: "6px 0" }}
            disabled={!OtpAdhar ? true : false}
            className="btn btn-success text-white"
          >
            Submit OTP{" "}
            {loader3 && (
              <div
                style={{ height: "16px", width: "16px" }}
                className="spinner-border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-info text-white"
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};
