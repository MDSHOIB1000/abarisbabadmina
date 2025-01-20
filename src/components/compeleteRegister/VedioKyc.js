import { useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { declarationSub, videoKycUpload } from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TermCondition } from "./TermCondition";
import { PrivecyPolicy } from "./PrivecyPolicy";
import ModalVideoKycSet from "./modalVideoKycSet/ModalVideoKycSet";
import { toastErrorMessage, toastSuccessMessage } from "./ToastShare";
export const VedioKyc = ({ setState, datas, modalShow, setModalShow }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // console.log(datas);
  const navigate = useNavigate();
  const [disa, setDisa] = useState(true);
  // console.log(disa);
  const [initialValue, setInitialValue] = useState({
    video: "",
    userId: "",
  });

  // const toastSuccessMessage = (str) => {
  //     toast.success(`${str}`, {
  //         position: "top-center"
  //     })
  // };
  // const toastSuccessMessageq = (str) => {
  //     toast.error(`${str}`, {
  //         position: "top-center"
  //     })
  // };

  const videoUploadHandle = async (e) => {
    const allowedTypes = [
      // 'video/mp4',
      "image/jpeg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/pdf",
      "application/x-rar-compressed",
      "application/x-zip-compressed",
      "application/zip",
    ];
    if (e.target.files[0]?.type == "image/jpeg") {
      toastErrorMessage("Invalid file type. Please select a vedio.");
      return;
    }
    if (e.target.files[0]?.type == "image/png") {
      toastErrorMessage("Invalid file type. Please select a vedio.");
      return;
    }
    if (e.target.files[0] && allowedTypes.includes(e.target.files[0].type)) {
      // setProfileImage(e.target.files[0])
      toastErrorMessage("Invalid file type. Please select a vedio.");
      return;
    }
    const video = new FormData();
    video.append("video", e.target.files[0]);
    video.append("user_id", window.localStorage.getItem("userIdToken"));
    setInitialValue(video);
  };

  const handleSubmitKyc = async () => {
    try {
      const res = await videoKycUpload(initialValue);
      if (res?.data?.statusCode == "200") {
        toastSuccessMessage(res?.data?.data?.message);
        setTimeout(() => {
          // navigate('/admin')
          //   setState(0);
          //   window.localStorage.setItem("setps", 0);
        }, 1000);
      }
    } catch (error) {}
  };
  const Declaration = async () => {
    try {
      const res = await declarationSub({
        user_id: window.localStorage.getItem("userIdToken"),
      });
      if (res?.data?.statusCode == "200") {
        toastSuccessMessage("Self Declaration Saved");
        setTimeout(() => {
          // navigate('/admin')
          setState(0);
          window.localStorage.setItem("steps", 0);
          //   navigate("/is_self_declare");
        }, 1000);
      }
      if (res?.data?.statusCode == "401") {
        toastSuccessMessage(res.data.message);
      }
    } catch (error) {}
  };
  const backButton = () => {
    setState(4);
    window.localStorage.setItem("steps", 4);
  };

  return (
    <div className="container">
      <h6 style={{ margin: "15px 0", textAlign: "center" }}>
        Video Kyc upload{" "}
      </h6>
      <form className="row">
        <div className="col-12">
          <>
            {" "}
            <div className="kycCall">
              <FcVideoCall className="kycicon" />
              <input
                type="file"
                name="video"
                value={initialValue.video}
                onChange={videoUploadHandle}
              />
            </div>
            <div className="text-align-center">
              <button
                type="button"
                style={{ backgroundColor: "#2E3191" }}
                onClick={handleSubmitKyc}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </>

          {/* {datas?.is_kycVid == false && <> <div className="kycCall">
                    <FcVideoCall className="kycicon" />
                    <input type="file" name="video" value={initialValue.video} onChange={videoUploadHandle} />

                </div>
                    <div className="text-align-center">
                        <button type="button" style={{ backgroundColor: '#2E3191' }} onClick={handleSubmitKyc} className="btn btn-primary">Save</button>
                        <p className="perakyc">
                        Your video kyc has not been shedule yet, as soon as it is sheduled we will inform you throught sms and you will also be able to see its details here
                        </p>
                    </div>



                </>} */}
        </div>
        {/* <div className="row">
                <div class="form-group col-6 ">
                    <label for="internalPhoto">Shop Internal Photo</label>
                    <input type="file" class="form-control" id="internalPhoto" />
                </div>
                <div class="form-group col-6">
                    <label for="externalPhoto">Shop Outside Photo</label>
                    <input type="file" class="form-control" id="externalPhoto" />
                </div>
            </div> */}

        <div>
          <h6>Self Declaration</h6>
          <div className="form-check">
            <input
              onClick={() => {
                setDisa(!disa);
              }}
              className="form-check-input"
              type="checkbox"
              checked={!disa}
              value=""
              id="flexCheckDefault"
            />
            <div className="form-check-label" for="flexCheckDefault">
              I Agree to the latest{" "}
              <span className="spanNext" onClick={() => setShow(true)}>
                Terms & Conditions
              </span>{" "}
              &{" "}
              <span onClick={() => setShow2(true)} className="spanNext">
                Privacy Policy
              </span>
              .
            </div>
            <div className="laste">
              I certify that all the information provided by me is correct and
              accurate
            </div>
            <div className="btn-center-set">
              <button
                type="button"
                onClick={backButton}
                // style={{ backgroundColor: "#2E3191" }}
                className="btn btn-primary text-white"
              >
                Back
              </button>
              <button
                type="button"
                disabled={disa}
                // style={{ backgroundColor: "#2E3191" }}
                onClick={Declaration}
                className="btn btn-success text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="cusmoal"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <TermCondition />
      </Modal>
      <Modal
        show={show2}
        onHide={() => setShow2(false)}
        className="cusmoal"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <PrivecyPolicy />
      </Modal>

      <ModalVideoKycSet show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
