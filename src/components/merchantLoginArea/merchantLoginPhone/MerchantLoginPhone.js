import { useRef, useState } from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { userLogin } from "../../../api/login/Login";
import { SaveUserDeatilsLocalStorage } from "../../../utils/localStorage";
import { useNavigate } from "react-router";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { isValidNumber } from 'libphonenumber-js';
import TermAndCondition from "./termAndCondition/TermAndCondition";
import { MdOutlineEmail } from "react-icons/md";
function MerchantLoginForm({ handleSubmitChange }) {

    const [loader1, setloader2] = useState(false)

    const [PassWordError, setPassWordError] = useState()
    // console.log(PassWordError);

    const [isChecked, setIsChecked] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [initialValue, setInitialValue] = useState({
        entity: '+91',
        password: ''
    })
    const [radioSet, setRadioSet] = useState(false)

    const [errorValue, setErrorValue] = useState({})
    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center",
        })
    };

    const toastSuccessMessageError = (str) => {
        toast.error(`${str}`, {
            position: "top-center",
        })
    };
    const validation = (values) => {
        const error = {}
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/

        if (!radioSet) {
            const splits2 = values.entity.length
            // const checkn = isValidNumber(values.entity)
            // console.log(checkn);
            if (splits2 < 13) {
                error.entity = "please 10 digit Mobile Number is Required!"
            }
            else if (values.entity == '+91') {
                error.entity = "please 10 digit Mobile Number is Required!"
            }
        } else {
            if (!values.entity) {
                error.entity = "Email is required !";
            } else if (!email_pattern.test(values.entity)) {
                error.entity = 'Email is not correct'
            }
        }


        // else if (!regexEmail.test(values.email)) {
        //     error.email = "Invalid Email";
        // }
        if (!values.password) {
            error.password = "Password is Required!"

        }
        return error

    }

    const handleUser = (e, str) => {
        if (!isChecked) {
            setIsFormSubmitted(true)
        }
        if (str) {
            // console.log('in');
            const input = e.target.value.replace(/[^0-9+]/g, '');
            const clone = { ...initialValue }
            const vlaue = input
            const name = e.target.name
            clone[name] = vlaue
            if (e.target.value.length == 2) {
                return
            }
            if (e.target.value.length == 14) {
                return
            }
            setErrorValue(validation(clone))
            setInitialValue(clone)
            return
        }

        const clone = { ...initialValue }
        const vlaue = e.target.value
        const name = e.target.name
        clone[name] = vlaue
        setErrorValue(validation(clone))
        setInitialValue(clone)
    }

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





    const navigate = useNavigate()

    const [clicked, setclicked] = useState(false)
    const handleSubmit = async (event) => {
        // console.log(initialValue);
        setloader2(true)
        event.preventDefault()
        setclicked(true)
        setErrorValue(validation(initialValue))

        setIsFormSubmitted(true)
        try {
            const res = await userLogin(initialValue)
            SaveUserDeatilsLocalStorage(res?.data?.user)
            // console.log(res);
            if (res.statusCode == 200) {
                toastSuccessMessage('Login Successfully')
                navigate('/registrationComplete')
                setTimeout(() => {

                    window.location.reload()
                }, 1000);

            }
            // if (res.statusCode == 403) {
            //     toastSuccessMessage(res.data.message)
            // }
            if (res.statusCode == 406) {
                toastSuccessMessageError(res.data.message)
                setPassWordError(res.data.message)
            }
            if (res.statusCode == 405) {
                toastSuccessMessageError(res.data.message)
            }
            setloader2(false)
        } catch (error) {
            setloader2(false)
        }
        setclicked(false)
    }



    const handleRadio = (e) => {
        setErrorValue({})
        setPassWordError('')
        if (e == 'number') {
            setRadioSet(!radioSet)
            setInitialValue({
                entity: '+91',
                password: ''
            })
            setIsFormSubmitted(false)
        } else {
            setInitialValue({
                entity: '',
                password: ''
            })
            setRadioSet(!radioSet)
            setIsFormSubmitted(false)
        }
    }


    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        // console.log('fgfd', !showPassword);
        setShowPassword(!showPassword);
    };




    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };


    return (
        <>
            <ToastContainer />
            <div className="mobile-login-phone">
                <form action="" onSubmit={handleSubmit}>
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
                    {radioSet ? <> <div className="input-group  mb-2">
                        <span className="input-group-text" id="basic-addon1"><MdOutlineEmail /></span>
                        <input type="mail" className="form-control" placeholder="Enter Email" name="entity" value={initialValue?.entity} onChange={handleUser} />

                    </div>
                        <div id="emailHelp" className="form-text">{errorValue.entity}</div>
                    </>
                        : <>
                            <div className="input-group  mb-2">
                                <span className="input-group-text" id="basic-addon1"><MdOutlinePhoneAndroid /></span>
                                <input type="text" className="form-control" placeholder="Enter Mobile Number"
                                    ref={inputRef}
                                    onMouseDown={handleMouseDown}
                                    onSelect={handleSelect} onPaste={handlePaste} name="entity" value={initialValue?.entity} onChange={(e) => { handleUser(e, 'mobile') }} />

                            </div>
                            <div id="emailHelp" className="form-text  ">{errorValue.entity}</div>
                        </>}

                    <div className="input-group input-group-eye mb-2">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type={showPassword ? 'text' : 'password'} className="form-control" placeholder="Enter password" name="password" value={initialValue?.password} onChange={handleUser} />
                        <div className="eye" onClick={toggleShowPassword}>{showPassword ? <IoMdEye /> : <FaEyeSlash />} </div>
                    </div>
                    <div id="emailHelp" className="form-text ">{PassWordError ? PassWordError : errorValue.password}</div>
                    {/* <div id="emailHelp" className="form-text ">{ }</div> */}

                    <div className="term-condition mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Remember" />
                            <label className="form-check-label" htmlFor="Remember">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div className="term-condition mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={handleCheckboxChange} isChecked={isChecked} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I have read and accepted
                            </label>

                        </div>

                        <span onClick={handleShow} style={{ cursor: 'pointer' }}>Term and Condition</span>
                    </div>
                    {isFormSubmitted && !isChecked && (
                        <p style={{ color: 'red' }}>Please accept the terms and conditions.</p>
                    )}

                    <div>
                        <button type="submit" className="btn btn-login" disabled={!isChecked}>
                            LOGIN
                            {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            }
                        </button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <div onClick={handleSubmitChange} style={{ cursor: 'pointer' }}>Forgot Password ?</div>
                    <div> Don't have an account? <Link to="/Signup">Sign up</Link> </div>
                </div>

            </div>

            <TermAndCondition handleClose={handleClose} show={show} />
        </>
    )
}
export default MerchantLoginForm