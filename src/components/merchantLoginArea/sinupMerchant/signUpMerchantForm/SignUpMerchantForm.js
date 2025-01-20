
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import TabSignUp from "../tabSinUp/TabSignUp";
import { CountryList, emailSinup, emailSinupOtp, isVerifiedMobileOtp, registerUser, userType } from "../../../../api/login/Login";
import { getUserDetails } from "../../../../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function SignUpMerchantForm({ initalValue, handleChange, mobileGenerateOtpMobile, userIDD, mobileVeridedInput, getOtp, mobileOtp, emailVeridedInput, emailgetOtp, nextForm, emailOtp, submitOtpEmail, formResiter, setEmailVeridedInput, setMobileOtp, setMobileVerified, handleCountryCode, countryCode, setEmailOtp, setFormResiter, loader1 }) {
    // console.log(countryCode);
    // console.log(initalValue.mobileNo.length);
    const [emailUser, setEmailUser] = useState()
    const [loader2, setloader2] = useState(false)
    const [loader3, setloader3] = useState(false)
    const [loader4, setloader4] = useState(false)
    const [loader5, setloader5] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [country, setCountry] = useState(null)
    // console.log(country);

    const [userId, setUserId] = useState()
    // console.log(userId);
    const [mobileId, setMobile] = useState()
    // console.log(mobileId);


    const [errorValue, setErrorValue] = useState({})


    const [count, setCount] = useState(0)

    // const [otp, setOtp] = useState({
    //     user_id: userID,
    //     otp: ''
    // })
    console.log(initalValue.mobileNo.slice(3, 13));

    const [resiter, setResister] = useState({
        // email: '',
        mobile: mobileId,
        user_type_id: "65e2f15785bfd78f9866c090",
        name: '',
        password: '',
        refer_id: ''
    })
    // console.log(resiter);
    useEffect(() => {
        setResister({ ...resiter, password: initalValue.mobileNo.slice(3, 13) })
    }, [initalValue])

    const countryget = async () => {
        try {
            const res = await CountryList()
            setCountry(res?.data)
        } catch (error) {

        }

    }
    useEffect(() => {
        countryget()
    }, [])



    const validation = (values) => {
        const error = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            error.name = "Name is Required!"

        }

        // if (!values.email) {
        //     error.email = "Email is required";
        // } else if (!regexEmail.test(values.email)) {
        //     error.email = "Invalid Email";
        // }
        if (!values.password) {
            error.password = "Password is Required!"

        }
        if (!values.refer_id) {
            error.refer_id = "Refer Id Required!"

        }
        return error

    }


    const length = 6
    const [otp, setOtp] = useState(new Array(length).fill(''));
    // console.log(otp);

    let str = ''
    for (let index = 0; index < otp.length; index++) {
        const element = otp[index];
        str = str + element
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            getOtp();
        }
    };
    const handleKeyPress2 = (event) => {
        if (event.key === 'Enter') {
            SubmitEmail();
        }
    };
    console.log(str);

    const inputs = useRef([]);

    const otpChandleChange = (index, value) => {
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

    // const otpChandleChange = (e) => {
    //     const clone = { ...otp }
    //     const vlaue = e.target.value
    //     const name = e.target.name
    //     clone[name] = vlaue
    //     setOtp(clone)
    // }

    const handleResiter = (e) => {
        const clone = { ...resiter }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setResister(clone)


    }

    const handleResiter2 = (e) => {
        const clone = { ...resiter, user_type_id: e }
        // console.log(clone);

    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };

    const toastSuccessMessage1 = (message) => {
        toast.error(`${message}`, {
            position: "top-center",
        });
    };

    const userTypeget = async () => {
        try {
            const res = await userType()
            setData(res?.data)
        } catch (error) {
        }
    }

    const tabChange = (i, id) => {
        setUserId(id)
        const clone = { ...resiter, user_type_id: id }
        // console.log(clone);
        setResister(clone)
        setCount(i)
    }
    // useEffect(() => {
    //     setUserId(data?.[0]?._id)
    // }, [data])
    useEffect(() => {
        userTypeget()
    }, [])

    // const getOtp = () => {
    //     mobileGenerateOtpMobile()
    //     setMobileVerified(false)
    //     setMobileOtp(true)
    // }
    const submitOtp = async () => {
        // debugger
        setloader2(true)
        try {
            const res = await isVerifiedMobileOtp({ otp: str, user_id: userIDD })
            // console.log(res?.data?.data.user);

            setEmailUser(res?.data?.data.user)
            setMobile(res?.data?.data?.user);
            if (res?.status == '200') {
                getUserDetails(res?.data?.user)
                toastSuccessMessage(res.data.data.message)
                // debugger
                setTimeout(() => {
                    setEmailVeridedInput(true)
                    setMobileOtp(false)
                    setMobileVerified(false)
                }, 2000)
            }
            setloader2(false)
            // console.log(res);
        } catch (error) {
            setloader2(false)
        }
    }

    const handleSubmit = async (event) => {
        setloader5(true)
        const cloen = { ...resiter, mobile: mobileId, email: emailUser }
        event.preventDefault()
        setErrorValue(validation(cloen))

        try {
            const res = await registerUser(cloen)
            if (res?.statusCode == '200') {
                toastSuccessMessage(res?.data?.message)
                // debugger
                setTimeout(() => {
                    navigate('/login-area')
                }, 2000)
            }
            if (res?.statusCode == 402) {
                toastSuccessMessage1(res?.data?.message)
                // debugger
            }
            setloader5(false)
        } catch (error) {
            setloader5(true)
            // console.log(error);
            // toastSuccessMessage(res?.data?.message)
        }

    }

    const [emailInitial, setEmailInitial] = useState({
        deviceId: '',
        emailId: ''
    })

    const handleEmail = (e) => {
        const cloneEmail = { ...emailInitial }

        const value = e.target.value
        const name = e.target.name
        cloneEmail[name] = value
        setEmailInitial(cloneEmail)
    }
    const [errorMessageEmail, setErrorMessageEmail] = useState()
    const SubmitEmail = async () => {
        setloader3(true)
        try {
            const res = await emailSinup(emailInitial)
            if (res?.data?.statusCode == 200) {
                window.localStorage.setItem('emailToken', res?.data?.data.user)
                toastSuccessMessage(res?.data?.message)
                setEmailVeridedInput(false)
                setEmailOtp(true)
            }

            if (res?.data?.statusCode == 401) {
                setErrorMessageEmail(res?.data?.message)
            }
            setloader3(false)
        } catch (error) {
            setloader3(false)
        }
    }


    const length1 = 6
    const [otp1, setOtp1] = useState(new Array(length1).fill(''));
    // console.log(otp);

    let str1 = ''
    for (let index = 0; index < otp1.length; index++) {
        const element = otp1[index];
        str1 = str1 + element
    }

    console.log(str1);

    const inputs1 = useRef([]);

    const otpChandleChange1 = (index, value) => {
        const newOtp = [...otp1];
        if (value.length == 2) {
            return
        }
        newOtp[index] = value;
        setOtp1(newOtp);

        // Move to the next input field if there's a value
        if (value && inputs1.current[index + 1]) {
            inputs1.current[index + 1].focus();
        }
    };

    const handleKeyDown1 = (index, e) => {
        // Move to the previous input field if backspace is pressed and the input is empty
        if (e.key === 'Backspace' && !otp1[index] && inputs1.current[index - 1]) {
            inputs1.current[index - 1].focus();
        }
    };


    const submitEmailOtp = async () => {
        setloader4(true)
        const otpEmailData = { otp: str1, user_id: window.localStorage.getItem('emailToken') }
        try {
            const res = await emailSinupOtp(otpEmailData)
            console.log(res?.data?.data.user);
            if (res.data.error == false) {
                toastSuccessMessage(res?.data?.message)
                setFormResiter(true)
                setEmailVeridedInput(false)
                setEmailOtp(false)
            }
            setloader4(false)
        } catch (error) {
            setloader4(false)
        }

    }

    // const emailgetOtp = () => {
    //     // setEmailVeridedInput(false)
    //     setEmailOtp(true)
    //     setEmailVeridedInput(false)
    // }

    // const submitOtpEmail = () => {
    //     setFormResiter(true)
    //     setEmailVeridedInput(false)
    //     setEmailOtp(false)
    // }

    // const nextForm = () => {
    //     setFormResiter(true)
    //     setEmailVeridedInput(false)
    // }

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

            <div className="mt-3">
                {/* {mobileVeridedInput && } */}
                <>
                    {mobileVeridedInput ? <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                                <span className="input-group-text input-group-text-2" id="basic-addon1" >
                                    <select class="form-select" aria-label="Default select example" value={countryCode} onChange={handleCountryCode}>
                                        <option selected disabled>select Country</option>
                                        {country && country?.map((item) => {
                                            return <option value={'+' + item?.phone_code}>{item?.name}</option>
                                        })}
                                    </select>
                                </span>
                                <input type="text" className="form-control" placeholder="Enter Mobile Number" ref={inputRef}
                                    onMouseDown={handleMouseDown}
                                    onSelect={handleSelect} onPaste={handlePaste} name="mobileNo" onKeyDown={handleKeyPress} value={initalValue.mobileNo} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                                <button type="button" disabled={initalValue.mobileNo.length == 13 ? false : true} className="form-control btn btn-login" onClick={getOtp}>
                                    Get OTP
                                    {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    }
                                </button>
                            </div>
                        </div>
                    </div> : <></>
                    }
                </>

                <>

                    {mobileOtp ? <> <div className="col-lg-12">
                        <div className="input-group input-group-2 mb-3">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="number"
                                    maxLength="1"
                                    value={value}
                                    onChange={(e) => otpChandleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(input) => (inputs.current[index] = input)}
                                    style={{ width: '14%' }}
                                />
                            ))}
                            {/* <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                            <input type="number" className="form-control" placeholder="Enter OTP" name="otp" value={otp.otp} onChange={otpChandleChange} /> */}
                        </div>
                    </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                                <button type="button" className="form-control btn btn-login" disabled={str.length !== 6} onClick={submitOtp}>
                                    Submit OTP
                                    {loader2 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    }
                                </button>
                            </div>
                        </div> </> : <></>}
                </>



                {emailVeridedInput ? <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><MdEmail /></span>
                            <input type="email" className="form-control" placeholder="Enter Email" name="emailId" onKeyDown={handleKeyPress2} value={emailInitial.emailId} onChange={handleEmail} />
                        </div>
                        <p style={{ color: 'red' }}>{errorMessageEmail}</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                            <button type="button" className="form-control btn btn-login me-1" onClick={SubmitEmail}>
                                {loader3 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                                Get OTP
                            </button>

                        </div>
                    </div>
                </div> : <>
                </>}



                {emailOtp ? <> <div className="col-lg-12">
                    <div className="input-group input-group-2 mb-3">
                        {otp1.map((value, index) => (
                            <input
                                key={index}
                                type="number"
                                maxLength="1"
                                value={value}
                                onChange={(e) => otpChandleChange1(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown1(index, e)}
                                ref={(input) => (inputs1.current[index] = input)}
                                style={{ width: '14%' }}
                            />
                        ))}
                        {/* <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                            <input type="number" className="form-control" placeholder="Enter OTP" name="otp" value={otp.otp} onChange={otpChandleChange} /> */}
                    </div>
                </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            {/* <span className="input-group-text" id="basic-addon1"><TiTick /></span> */}
                            <button type="button" className="form-control btn btn-login" onClick={submitEmailOtp}>
                                {loader4 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                                Submit OTP
                            </button>
                        </div>
                    </div> </> : <></>}




                {formResiter ? <TabSignUp data={data} count={count} tabChange={tabChange} resiter={resiter} handleResiter2={handleResiter2} /> : <></>}
                {formResiter ? <form >
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <label htmlFor="">Name <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><FaRegUser /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={resiter.name} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.name}
                            </p>
                        </div>
                        {/* <div className="col-lg-6  mb-3">
                            <label htmlFor="">Email <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><MdOutlineEmail /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Email" name="email" value={resiter.email} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.email}
                            </p>
                        </div> */}
                        <div className="col-lg-6   mb-3">
                            <label htmlFor="">Password <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                                {/* <input type="password" className="form-control" placeholder="Enter Your Password" name="password" value={resiter.password} onChange={handleResiter} */}
                                <input type="text" className="form-control" placeholder="Enter Your Password" name="password" disabled value={resiter.password} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.name}
                            </p>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label htmlFor="">Refer ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                                <input type="text" className="form-control" placeholder="Enter Refer id" name="refer_id" value={resiter.refer_id} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.refer_id}
                            </p>
                        </div>
                        <div>
                            <button type="button" disabled={!resiter.name || !resiter.password || !resiter.refer_id} className="btn btn-login" onClick={handleSubmit}>
                                {loader5 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                                REGISTER
                            </button>
                        </div>
                    </div>
                </form> : <></>}


            </div>
        </>
    )
}
export default SignUpMerchantForm