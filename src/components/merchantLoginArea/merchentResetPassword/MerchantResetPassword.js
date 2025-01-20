import { useRef, useState } from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { fogotPassVerifyByEmail, fogotPassVerifyByMobile, isVerifiedEmailOtp, isVerifiedMobileOtp, resetApi } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { TbLayoutNavbarExpand } from "react-icons/tb";
function MerchantResetPassword({ handleSubmitBack, getOtp, resetOtp, OtpUp, openReset, handleChange, initalValue, userId, setOtpUp, setOpenReset, setLoginForm, setInitialValue, buttonDisable, mobileMsg, setButtonDisable, setMobileMsg, panError, mobileError, emailError,
    EmailpanError, loader3 }) {


    const [isValid, setIsValid] = useState(false);
    const [resetInitialValue, setResetInitialValue] = useState({
        user_id: '',
        password: '',
        repassword: ''
    })

    // const [otp, setOtp] = useState({
    //     user_id: userId,
    //     otp: ''
    // })

    const toastSuccessMessage = (data) => {
        toast.success(`${data}`, {
            position: "top-center",
        });
    };

    // const otpChandleChange = (e) => {
    //     const clone = { ...otp }
    //     const vlaue = e.target.value
    //     const name = e.target.name
    //     clone[name] = vlaue
    //     setOtp(clone)
    // }

    /////
    const length = 6
    const [otp, setOtp] = useState(new Array(length).fill(''));
    // console.log(otp);

    let str = ''
    for (let index = 0; index < otp.length; index++) {
        const element = otp[index];
        str = str + element
    }

    // console.log(str);

    const inputs = useRef([]);

    const otpChandleChange = (index, value) => {
        // const input = value.replace(/[^0-9+]/g, '');
        const newOtp = [...otp];
        if (value.length == 2) {
            return
        }
        newOtp[index] = value;
        setOtp(newOtp);


        // Move to the next input field if there's a value
        if (value && inputs.current[index + 1]) {
            inputs.current[index + 1].focus();
        }

    };

    const handleKeyDown = (index, e) => {
        // Move to the previous input field if backspace is pressed and the input is empty
        if (e.key === 'Backspace' && !otp[index] && inputs.current[index - 1]) {
            inputs.current[index - 1].focus();
        }
    };

    ////
    const [radioSet, setRadioSet] = useState(false)
    const submitOtp = async () => {
        try {
            if (radioSet) {
                const res = await fogotPassVerifyByEmail({ otp: str, user_id: userId })
                if (res?.data?.statusCode == '200') {
                    // getUserDetails(res?.data?.user)
                    toastSuccessMessage(res?.data?.data?.message)
                    // debugger
                    setTimeout(() => {
                        setOtpUp(false)
                        setOpenReset(true)
                    }, 2000)
                }
            } else {
                const res = await fogotPassVerifyByMobile({ otp: str, user_id: userId })
                if (res?.data?.statusCode == '200') {
                    // getUserDetails(res?.data?.user)
                    toastSuccessMessage(res?.data?.data?.message)
                    // debugger
                    setTimeout(() => {
                        setOtpUp(false)
                        setOpenReset(true)
                    }, 2000)
                }
            }
            // setMobile(res?.data?.data?.user);

            // console.log(res);
        } catch (error) {

        }
        // setOtpUp(false)
        // setOpenReset(true)
    }

    const resendHandler = (e, str) => {
        if (str) {

            const clone = { ...resetInitialValue }
            const vlaue = e.target.value
            const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!&])[A-Z](?=.*[a-zA-Z\d@$!&])[a-zA-Z\d@$!&]{8,}$/;
            setIsValid(regex.test(vlaue));
            const name = e.target.name
            clone[name] = vlaue
            setResetInitialValue(clone)
            return
        }
        const clone = { ...resetInitialValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setResetInitialValue(clone)

    }
    const handleSubmit = async () => {
        const cloen = { ...resetInitialValue, user_id: window.localStorage.getItem("forgotUser") }
        try {
            const res = await resetApi(cloen)
            console.log(res?.data.data.message);
            if (res?.data?.statusCode == "200") {
                toastSuccessMessage(res?.data?.data?.message)
                setTimeout(() => {
                    window.location.reload()
                }, 400)
            }
            if (res?.data?.statusCode == 402) {
                toastSuccessMessage(res?.data?.data?.message)
            }
        } catch (error) {
        }
    }



    const handleRadio = (e) => {
        if (e == 'number') {
            setRadioSet(!radioSet)
            setMobileMsg('')
            setInitialValue({
                mobileNo: '+91',
                pan: '',
                emailId: '',
            })
        } else {
            setButtonDisable(false)
            setMobileMsg('')
            setInitialValue({
                pan: '',
                emailId: '',
                mobileNo: '',
            })
            setRadioSet(!radioSet)
        }
    }
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        // console.log('fgfd', !showPassword);
        setShowPassword(!showPassword);
    };


    const handlePaste = (event) => {
        event.preventDefault();
    }

    const inputRef = useRef(null);

    const handleMouseDown = (event) => {
        if (document.activeElement === inputRef.current) {
            event.preventDefault();
        }
    };

    const handleSelect = (event) => {
        event.preventDefault();
        if (inputRef.current) {
            inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
        }
    };








    return (
        <>
            <>
                {resetOtp ? <div className="mobile-login-phone">
                    <form action="" >
                        <div className="input-group mb-3 justify-content-center">
                            <div className="form-check mr-3">
                                <input className="form-check-input" type="radio" onChange={() => { handleRadio('number') }} name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Mobile
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => { handleRadio('mail') }} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Email
                                </label>
                            </div>
                        </div>
                        {radioSet ? <> <div className="input-group  mb-1">
                            <span className="input-group-text" id="basic-addon1"><MdOutlineEmail /></span>
                            <input type="mail" className="form-control" placeholder="Enter Email" name="emailId" value={initalValue.emailId} onChange={handleChange} />

                        </div>
                            <div id="emailHelp" className="form-text  mb-1">{emailError}</div>
                            <div className="input-group  mb-1">
                                <span className="input-group-text" id="basic-addon1"><TbLayoutNavbarExpand /></span>
                                <input type="text" className="form-control" placeholder="Enter PAN Number" name="pan" value={initalValue.pan} onChange={handleChange} />

                            </div>
                            <div id="emailHelp" className="form-text  mb-1">{EmailpanError}</div>
                        </>
                            : <>
                                <div className="input-group  mb-1">
                                    <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                                    <input type="text" className="form-control" placeholder="Enter Mobile Number" ref={inputRef}
                                        onMouseDown={handleMouseDown}
                                        onSelect={handleSelect} onPaste={handlePaste} name="mobileNo" value={initalValue.mobileNo} onChange={(e) => { handleChange(e, 'mobile') }} />

                                </div>
                                <div id="emailHelp" className="form-text  mb-1">{mobileError}</div>
                                <div className="input-group  mb-1">
                                    <span className="input-group-text" id="basic-addon1"><TbLayoutNavbarExpand /></span>
                                    <input type="text" className="form-control" placeholder="Enter PAN Number" name="pan" value={initalValue.pan} onChange={handleChange} />

                                </div>
                                <div id="emailHelp" className="form-text  mb-1">{panError}</div>
                            </>}


                        {/* <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                            <input type="text" className="form-control" placeholder="Enter Mobile Number" name="mobileNo" value={initalValue.mobileNo} onChange={handleChange} />
                        </div> */}
                        <div>
                            <button type="button" className="btn btn-login" disabled={buttonDisable} onClick={() => { getOtp(radioSet) }}>
                                Send OTP
                                {loader3 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                            </button>
                        </div>
                    </form>
                    <div className="text-align-center mt-1">
                        <div onClick={handleSubmitBack} style={{ cursor: 'pointer' }}>Back To Sign In</div>
                    </div>
                </div> : <></>}
            </>


            {OtpUp ? <div className="mobile-login-phone">
                <form action="" >
                    <div className="input-group input-group-2 mb-3">
                        {/* <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span> */}
                        {/* <input type="number" className="form-control" placeholder="Enter OTP" name="otp" value={otp.otp} onChange={otpChandleChange} /> */}
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="number"
                                value={value}
                                onChange={(e) => otpChandleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(input) => (inputs.current[index] = input)}
                                style={{ width: '14%' }}
                            />
                        ))}
                    </div>
                    <div>
                        {/* <button type="button" className="btn btn-login" disabled={otp.otp.length == 6 ? false : true} onClick={submitOtp}>Submit Otp</button> */}
                        <button type="button" className="btn btn-login" disabled={str.length !== 6} onClick={submitOtp}>Submit Otp</button>

                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <div onClick={handleSubmitBack} style={{ cursor: 'pointer' }}>Back To Sign In</div>
                </div>

            </div> : <></>}


            {openReset ? <div className="mobile-login-phone">
                <form action="" >
                    <div className="input-group input-group-eye mb-1">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type={showPassword ? 'text' : 'password'} className="form-control" placeholder="Enter New password" name="password" value={resetInitialValue?.password} onChange={(e) => { resendHandler(e, 'password') }} />
                        <div className="eye" onClick={toggleShowPassword}>{showPassword ? <IoMdEye /> : <FaEyeSlash />} </div>
                    </div>
                    {isValid ? (
                        <p style={{ color: 'green' }}>Valid password</p>
                    ) : (
                        <p style={{ color: 'red', marginBottom: '4px' }}>Password must be alphanumeric, start with a capital letter, contain a special character, and be at least 8 characters long.</p>
                    )}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type="password" className="form-control" placeholder="Enter Confirm password" name="repassword" value={resetInitialValue?.repassword} onChange={resendHandler} />
                    </div>
                    <div>
                        {/* disabled={resetInitialValue?.password.length < 8 || resetInitialValue?.repassword.length < 8} */}
                        <button type="button" className="btn btn-login" disabled={!isValid == true} onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <div onClick={handleSubmitBack} style={{ cursor: 'pointer' }}>Back To Sign In</div>
                </div>

            </div> : <></>}
            <ToastContainer />
        </>
    )
}
export default MerchantResetPassword