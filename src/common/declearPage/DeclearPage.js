import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userValidate } from "../../api/login/Login";

function DeclearPage() {
  const navigate = useNavigate();

  const getVarifyall = async () => {
    try {
      const res = await userValidate();
      console.log(res.data?.is_approved);
      if (res.data?.is_approved == true) {
        navigate("/Dashboard");
      }
    } catch (error) {}
  };
  useEffect(() => {
    getVarifyall();
  }, []);
  return (
    <>
      <div className="set-center ">
        <div className="text-align-center abc-set">
          <h4 className="text-align-center mt-4">Your Approval is Pending !</h4>
          <p>
            {" "}
            We regret to inform you that your current status has not been
            approved by the admin team. Please check back later or contact
            support for further assistance.
          </p>

          <div className=" d-flex justify-content-center gap-4">
            <button type="button" class=" btn btn-success fw-bold  text-white">
              {" "}
              <Link to="/login-area " className=" link-underline-opacity-0 text-white"> Login </Link>
            </button>
            <button type="button" class=" btn btn-info fw-bold  text-white">
              {" "}
              <Link to="/login-area" className=" link-underline-opacity-0 text-white"> Contact-Us </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeclearPage;
