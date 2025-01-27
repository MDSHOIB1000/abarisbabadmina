import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import {
  getDetailByPin,
  GstBusiness,
  GstBusinessAfterVerifide,
} from "../../api/login/Login";
import { toastErrorMessage, toastSuccessMessage } from "./ToastShare";


// Component to handle GST Business Form
export const GstBusinessForm = ({
  setState,
  state,
  gstData,
  getVarifyallData,
  allData,
  submitVerified,
  setSubmitVerified,
}) => {

console.log(allData)
  // State to manage form data
  const [data, setData] = useState({
    isGstAvailable: allData?.isGstAvailable,
    GSTIN: "",
    businessName: "",
    shop_name: "",
    business_pincode: "",
    business_city: "",
    business_Address: "",
    gst_register_type: "",
  });
  // this is track gst type
  const [registerType, setregisterType] = useState(1);

  // Effect to populate the form if gstData is provided
  useEffect(() => {
    if (gstData?.GSTIN) {
      setData({ ...gstData });
      setTimeout(() => {
        OtpSubmit2(gstData);
      }, 1000);
    }
  }, []);

  const [loader3, setloader3] = useState(false);
  const [loader4, setloader4] = useState(false);

  // Handle change in input fields for the form data
  const onChangeHandle = (e) => {
    const clone = { ...data };
    clone[e.target.name] = e.target.value;
    setData(clone);
  };

  // Handle change in GST availability status
  const onChangeHandle2 = (val) => {
    const clone = { ...data, isGstAvailable: val };
    setData(clone);
    setSubmitVerified(false);

    if (val) {
      window.localStorage.setItem("register-type", 1);
      setData({
        isGstAvailable: true,
        GSTIN: "",
        businessName: "",
        shop_name: "",
        business_pincode: "",
        business_city: "",
        business_Address: "",
        gst_register_type: "",
        business_state: "",
      });
    } else {
      window.localStorage.setItem("register-type", -1);
      setData({
        isGstAvailable: false,
        GSTIN: "",
        businessName: "",
        shop_name: "",
        business_pincode: "",
        business_city: "",
        business_Address: "",
        gst_register_type: "",
        business_state: "",
      });
    }
  };

  // Extract and format address components
  function extractAddressComponents(data, address) {
    const components = address.split(",").map((component) => component.trim());
    const pincode = components.pop();
    const state = components.pop();
    const city = components.pop();
    const area = components.join(", ");

    const clone = {
      ...data,
      business_pincode: pincode,
      business_city: city,
      businessName: state,
    };
    setData(clone);
  }

  // Submit GST verification

  const OtpSubmit2 = async (gstData) => {
    const dat = gstData ? gstData : data;
    try {
      const res = await GstBusiness({
        ...dat,
        user_id: window.localStorage.getItem("userToken"),
      });
      setloader3(false);
      if (res.data.statusCode === "200") {
        const clone = {
          ...dat,
          businessName: res?.data?.data?.legal_name_of_business,
          business_Address: res?.data?.data?.principal_place_address,
          gst_register_type: res?.data?.data?.taxpayer_type,
        };
        extractAddressComponents(
          clone,
          res?.data?.data?.principal_place_address
        );
        setSubmitVerified(true);
      }
    } catch (error) {
      setloader3(false);
    }
  };

  // Submit OTP for verification
  const OtpSubmit = async () => {
    setloader3(true);
    try {
      const res = await GstBusiness({
        ...data,
        user_id: window.localStorage.getItem("userToken"),
      });
      setloader3(false);
      if (res.data.statusCode === "200") {
        toastSuccessMessage("Gst & Business Verification Successfully");
        const clone = {
          ...data,
          businessName: res?.data?.data?.legal_name_of_business,
          business_Address: res?.data?.data?.principal_place_address,
          gst_register_type: res?.data?.data?.taxpayer_type,
        };
        extractAddressComponents(
          clone,
          res?.data?.data?.principal_place_address
        );
        setSubmitVerified(true);
      }
    } catch (error) {
      setloader3(false);
    }
  };

  // Submit form data after verification

  const onSubmitOfGst = async (e) => {
    e.preventDefault();
    // Check if shop_name is missing
    console.log("onSubmitOfGst submit");
    if (!data?.shop_name) {
      // Display error message and return early
      setState(2);
      window.localStorage.setItem("steps", state);
      toastErrorMessage("Please enter Shop Name");
      return;
    }
    // If shop_name is present, proceed with submission
    setloader4(true);
    try {
      const res = await GstBusinessAfterVerifide({
        ...data,
        user_id: window.localStorage.getItem("userToken"),
      });
      setloader4(false);
      if (res?.data?.statusCode === "200") {
        // Display success message and update state
        toastSuccessMessage(res?.data?.message);
        setTimeout(() => {
          setState(3);
          window.localStorage.setItem("steps", 3);
        }, 1000);
      }
    } catch (error) {
      // Handle error
    }
  };

  // State for non-GST business form data
  const [noRegister, setnoRegister] = useState({
    isGstAvailable: null,
    businessName: "",
    shop_name: "",
    business_pincode: "",
    business_city: "",
    business_Address: "",
    business_Area: "",
    business_state: "",
  });

  // Effect to populate non-GST business form data

  useEffect(() => {
    let type = window.localStorage.getItem("register-type");
    setregisterType(type);
    console.log(type);
    if (type == 1) {
      setnoRegister({
        isGstAvailable: true,
        businessName: "",
        shop_name: allData?.shop_name,
        business_pincode: allData?.business_pincode,
        business_city: allData?.business_city,
        business_Address: allData?.presentAddr,
        business_Area: allData?.business_Area,
        business_state: allData?.business_state,
      });
    }
    if (type == -1) {
      setnoRegister({
        isGstAvailable: false,
        businessName: "",
        shop_name: allData?.shop_name,
        business_pincode: allData?.business_pincode,
        business_city: allData?.business_city,
        business_Address: allData?.presentAddr,
        business_Area: allData?.business_Area,
        business_state: allData?.business_state,
      });
    }

 
  }, [registerType]);

  // Handle change in non-GST business form fields
  const onChangeHandle3 = async (e) => {
    if (e.target.name === "business_pincode") {
      const clone = { ...noRegister };
      clone[e.target.name] = e.target.value;
      setnoRegister(clone);
      onHitPincode(e.target.value);
    } else {
      const clone = { ...noRegister };
      clone[e.target.name] = e.target.value;
      setnoRegister(clone);
    }
  };

  // Fetch details by pincode
  const onHitPincode = async (num) => {
    if (!num.length) {
      return;
    }
    try {
      const res = await getDetailByPin(num);
      if (res.data?.error === true) {
        setnoRegister({
          business_pincode: num,
          businessName: "",
          isGstAvailable: false,
          shop_name: "",

          business_city: "",
          business_Address: "",
          business_Area: "",
          business_state: "",
        });
      } else {
        setnoRegister({
          ...noRegister,
          businessName: "",
          isGstAvailable: false,
          shop_name: "",
          business_pincode: num,
          business_city: res.data?.data?.city,
          business_Address:
            res.data?.data?.city +
            " " +
            res.data?.data?.district +
            " " +
            res.data?.data?.state,
          business_Area: res.data?.data?.sub_distance,
          business_state: res.data?.data?.state,
        });
      }
    } catch (error) {}
  };

  // Submit non-GST business form data
  const onSubmitAfterVerified2 = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      !noRegister.shop_name ||
      !noRegister.business_pincode ||
      !noRegister.business_city ||
      !noRegister.business_Address ||
      !noRegister.business_Area ||
      !noRegister.business_state
    ) {
      // Show error message if any field is empty
      toastErrorMessage("All fields must be filled");
      return;
    }
    setloader4(true);
    try {
      console.log(noRegister, "noRegister");
      const res = await GstBusinessAfterVerifide({
        ...noRegister,
        user_id: window.localStorage.getItem("userToken"),
      });

      setloader4(false);
      if (res?.data?.statusCode === "200") {
        // Show success message if submission is successful
        toastSuccessMessage(res?.data?.message);
        setTimeout(() => {
          setState(3);
          window.localStorage.setItem("steps", 3);
        }, 1000);
      }
    } catch (error) {
      setloader4(false);
    }
  };

  // Handle back button action
  const backButton = async () => {
    setState(1);
    window.localStorage.setItem("steps", 1);
    const data = await getVarifyallData();
  };
  console.log(data, "noRegister");
  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <h6 style={{ textAlign: "center", margin: "14px 0" }}>
          Are you Register for Gst
        </h6>
        <div
          className="d-flex"
          style={{ justifyContent: "center", margin: "10px 0 " }}
        >
          <div className="form-check" style={{ margin: "0 20px" }}>
            <input
              onChange={() => {
                onChangeHandle2(true);
              }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={data?.isGstAvailable === true}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={() => {
                onChangeHandle2(false);
              }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={data?.isGstAvailable === false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              No
            </label>
          </div>
        </div>
      </div>

      {data.isGstAvailable ? (
        <form className="row" onSubmit={onSubmitOfGst}>
          <div className="col-6 mb-3 clrelative">
            <input
              type="text"
              className="form-control"
              onChange={onChangeHandle}
              name="GSTIN"
              value={data.GSTIN}
              id="exampleInputEmail1"
              placeholder="Enter GST provisional GST number"
              aria-describedby="emailHelp"
            />
            <IoLocationOutline className="clApsulute" />
          </div>
          <div className="col-6 mb-3 clrelative">
            <input
              type="text"
              className="form-control"
              onChange={onChangeHandle}
              name="shop_name"
              value={data.shop_name}
              id="exampleInputEmail1"
              placeholder="Enter Shop Name"
              aria-describedby="emailHelp"
            />
            <IoLocationOutline className="clApsulute" />
          </div>

          {!submitVerified && (
            <div className="button-fit">
              <button
                type="submit"
                onClick={backButton}
                style={{ width: "100px" }}
                className="btn btn-primary mr-3 mb-3"
              >
                Back
              </button>
              <button
                type="button"
                onClick={OtpSubmit}
                style={{  width: "100px" }}
                className="btn btn-success mb-3"
              >
                Verify{" "}
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

          {submitVerified ? (
            <>
              <div className="col-6 mb-3 clrelative">
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeHandle}
                  name="business_pincode"
                  id="exampleInputEmail1"
                  disabled
                  value={data?.business_pincode}
                  placeholder="Enter business_pincode"
                  aria-describedby="emailHelp"
                />
                <IoLocationOutline className="clApsulute" />
              </div>
              <div className="col-6 mb-3 clrelative">
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeHandle}
                  name="businessName"
                  id="exampleInputEmail1"
                  disabled
                  value={data?.businessName}
                  placeholder="Enter business GST Name"
                  aria-describedby="emailHelp"
                />
                <IoLocationOutline className="clApsulute" />
              </div>
              <div className="col-6 mb-3 clrelative">
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeHandle}
                  name="business_city"
                  id="exampleInputEmail1"
                  disabled
                  value={data?.business_city}
                  placeholder="Enter Business City"
                  aria-describedby="emailHelp"
                />
                <IoLocationOutline className="clApsulute" />
              </div>
              <div className="col-6 mb-3 clrelative">
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeHandle}
                  name="business_Address"
                  id="exampleInputEmail1"
                  disabled
                  value={data?.business_Address}
                  placeholder="Business Address"
                  aria-describedby="emailHelp"
                />
                <IoLocationOutline className="clApsulute" />
              </div>
              <div className="col-6 mb-3 clrelative">
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeHandle}
                  name="gst_register_type"
                  id="exampleInputEmail1"
                  disabled
                  value={data?.gst_register_type}
                  placeholder="Enter Gst Register Type"
                  aria-describedby="emailHelp"
                />
                <IoLocationOutline className="clApsulute" />
              </div>

              <div className="button-fit" style={{ justifyContent: "center" }}>
                <button
                  type="submit"
                  // onClick={onSubmitOfGst}
                  style={{ backgroundColor: "#2E3191", width: "150px" }}
                  className="btn btn-primary mr-3 mb-3"
                >
                  Submit
                  {loader4 && (
                    <div
                      style={{ height: "16px", width: "16px" }}
                      className="spinner-border"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
                <button
                  onClick={backButton}
                  style={{ backgroundColor: "#2E3191", width: "100px" }}
                  className="btn btn-primary mr-3 mb-3"
                >
                  Back
                </button>
              </div>
            </>
          ) : null}
        </form>
      ) : (
        <>
          <form className="row" onSubmit={onSubmitAfterVerified2}>
            <div className="col-6 mb-3 clrelative">
              <input
                type="text"
                className="form-control"
                onChange={onChangeHandle3}
                name="business_pincode"
                value={noRegister?.business_pincode}
                id="exampleInputEmail1"
                placeholder="Enter business_pincode"
                aria-describedby="emailHelp"
              />
              <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
              <input
                type="text"
                className="form-control"
                onChange={onChangeHandle3}
                name="business_state"
                value={noRegister?.business_state}
                id="exampleInputEmail2"
                placeholder="Enter state"
                aria-describedby="emailHelp"
              />
              <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
              <input
                type="text"
                className="form-control"
                onChange={onChangeHandle3}
                name="business_city"
                value={noRegister?.business_city}
                id="exampleInputEmail2"
                placeholder="Enter City"
                aria-describedby="emailHelp"
              />
              <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
              <input
                type="text"
                className="form-control"
                onChange={onChangeHandle3}
                name="business_Area"
                id="exampleInputEmail1"
                value={noRegister?.business_Area}
                placeholder="Area"
                aria-describedby="emailHelp"
              />
              <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
              <input
                type="text"
                className="form-control"
                onChange={onChangeHandle3}
                name="business_Address"
                id="exampleInputEmail1"
                value={noRegister?.business_Address}
                placeholder="Enter Address "
                aria-describedby="emailHelp"
              />
              <IoLocationOutline className="clApsulute" />
            </div>
            <div className="col-6 mb-3 clrelative">
              <input
                type="text"
                className="form-control"
                onChange={onChangeHandle3}
                name="shop_name"
                id="exampleInputEmail1"
                value={noRegister?.shop_name}
                placeholder="Enter shop name "
                aria-describedby="emailHelp"
              />
              <IoLocationOutline className="clApsulute" />
            </div>

            <div className="button-fit">
              <button
                type="submit"
                onClick={backButton}
                style={{ backgroundColor: "#2E3191", width: "100px" }}
                className="btn btn-primary mr-3 mb-3"
              >
                Back
              </button>
              <button
                type="submit"
                // onClick={onSubmitAfterVerified2}
                style={{ backgroundColor: "#2E3191", width: "150px" }}
                className="btn btn-primary mb-3"
              >
                Submit
                {loader4 && (
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
          </form>
        </>
      )}
    </div>
  );
};
