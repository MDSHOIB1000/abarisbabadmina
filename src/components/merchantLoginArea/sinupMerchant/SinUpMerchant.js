import { useEffect, useState } from "react"
import MerchantLoginAreaBanner from "../../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner"
import MerchantLoginHeader from "../../../common/merchantLoginHeader/MerchantLoginHeader"
import SignUpMerchantForm from "./signUpMerchantForm/SignUpMerchantForm"
import TabSignUp from "./tabSinUp/TabSignUp"
import { isMobileExits, mobileGenerateOtp, sinupApi, userType } from "../../../api/login/Login"
import { ToastContainer, toast } from "react-toastify"


function SignUpMerchant() {

    const [loader1, setloader1] = useState(false)

    const [mobileVeridedInput, setMobileVerified] = useState(true)
    const [mobileOtp, setMobileOtp] = useState(false)
    const [emailVeridedInput, setEmailVeridedInput] = useState(false)
    const [emailOtp, setEmailOtp] = useState(false)
    const [formResiter, setFormResiter] = useState(false)

    const [countryCode, setCountryCode] = useState()
    // console.log(countryCode);

    const [userIDD, setUserID] = useState()
    console.log(userIDD);

    const [initalValue, setInitialValue] = useState({
        mobileNo: '',
        emailId: ''
    })

    const handleChange = (e) => {

        const clone = { ...initalValue }
        const input = e.target.value.replace(/[^0-9+]/g, '');
        const vlaue = input
        const name = e.target.name

        clone[name] = vlaue
        if (clone.mobileNo?.length == 14) {
            return
        }
        setInitialValue(clone)
        if (clone.mobileNo?.length == 13) {
            isMobileExit(initalValue.mobileNo)
        }

        const verifyMobile = verifiedPhone(initalValue.mobileNo)
        // if (verifyMobile) {
        //     isMobileExit(initalValue.mobileNo)
        // }

    }

    const handleCountryCode = (e) => {
        setCountryCode(e.target.value);
        const clone = { ...initalValue, mobileNo: e.target.value }
        setInitialValue(clone)

    }

    const verifiedPhone = (input) => {
        console.log(input);
        const regexMobileNumber = /^[0-9]{10}$/;
        if (input.match(regexMobileNumber)) {
            return true;
        } else {
            return false;
        }
    }

    const isMobileExit = async (value) => {
        try {
            const res = await isMobileExits(value)
            if (res?.data?.isisExist === true) {
                alert('Mobile Exit')
            } else {
            }
        } catch (error) {

        }
    }


    const toastSuccessMessage = () => {
        toast.success(`OTP Send Successfully.`, {
            position: "top-center",
        });
    };

    const mobileGenerateOtpMobile = async () => {
        setloader1(true)
        const clone = { ...initalValue }
        try {
            const res = await sinupApi(clone)
            console.log(res?.data);
            setUserID(res?.data?.data?.user);
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage();
                setMobileVerified(false)
                setMobileOtp(true)
            }
            setloader1(false)

        } catch (error) {
            setloader1(false)
        }
    }

    const getOtp = () => {
        mobileGenerateOtpMobile()
    }

    const emailgetOtp = () => {
        // setEmailVeridedInput(false)
        setEmailOtp(true)
        setEmailVeridedInput(false)
    }

    const submitOtpEmail = () => {
        setFormResiter(true)
        setEmailVeridedInput(false)
        setEmailOtp(false)
    }

    const nextForm = () => {
        setFormResiter(true)
        setEmailVeridedInput(false)
    }



    return (
        <>
            <MerchantLoginHeader />
            {/* <MerchantLoginAreaBanner title='Merchant Create account' /> */}
            <div className="container-login100">
                <section className="my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="login-area-sec">
                                    <h1 className="text-align-center">Signup</h1>

                                    <SignUpMerchantForm
                                        mobileVeridedInput={mobileVeridedInput}
                                        getOtp={getOtp}
                                        mobileOtp={mobileOtp}
                                        emailVeridedInput={emailVeridedInput}
                                        emailgetOtp={emailgetOtp}
                                        nextForm={nextForm}
                                        emailOtp={emailOtp}
                                        submitOtpEmail={submitOtpEmail}
                                        formResiter={formResiter}
                                        setEmailVeridedInput={setEmailVeridedInput}

                                        setMobileOtp={setMobileOtp}
                                        setMobileVerified={setMobileVerified}

                                        initalValue={initalValue}
                                        handleChange={handleChange}
                                        mobileGenerateOtpMobile={mobileGenerateOtpMobile}
                                        userIDD={userIDD}

                                        handleCountryCode={handleCountryCode}
                                        countryCode={countryCode}

                                        setEmailOtp={setEmailOtp}
                                        setFormResiter={setFormResiter}
                                        loader1={loader1}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </section>
            </div>

        </>
    )
}
export default SignUpMerchant