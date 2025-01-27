import { useEffect, useState } from "react"
import AepsOnBording from "../../../components/admin/aepsOnboarding/AepsOnBoarding"
import { UserPermissionAeps, aepsOnboard } from "../../../api/login/Login"
import PermissionAepsOnboarding from "../../../components/admin/aepsOnboarding/permissionAepsOnboarding/PermissionAepsOnboarding"
import SuggestOnboarding from "../../../components/admin/aepsOnboarding/suggetsOnboarding/SuggestOnboarding"
import { ToastContainer, toast } from "react-toastify"
import BankPermission from "../../../components/admin/aepsOnboarding/bankPermission/BankPermission"
import AuthResister from "../../../components/admin/aepsOnboarding/authResister/AuthResister"
import DailyAuth from "../../../components/admin/aepsOnboarding/dailyAuth/DailyAuth"
import CompleteOnBoarding from "../../../components/admin/aepsOnboarding/comleteOnBoarding/CompleteOnBoarding"
import Loader from "../../../common/loader/Loader"


function AepsOnBoardingPage() {

    const [loder, setLoder] = useState(false)


    const [onBoading, setOnBoarding] = useState(false)
    const [activeMessage, setActiveMessage] = useState()
    const [buyMessage, setBuyMessage] = useState()

    const [bank2, setbank2] = useState()
    const [bank3, setbank3] = useState()

    const [suggestOnBoard, setSuggestOnBoarding] = useState(false)

    const [bankPermission, setBankPermission] = useState(false)
    const [authRegistered, setAuthRegistered] = useState(false)
    const [dailyAuth, setDailyAuth] = useState(false)

    const permissionAeps = async () => {
        setLoder(true)
        try {
            const res = await UserPermissionAeps()
            // console.log(res?.data?.data);
            // if (res?.data?.data?.is_active == false) {
            //     setActiveMessage('Please Admin Side Active User')
            // }
            // if (res?.data?.data?.is_active == true) {
            //     if (res?.data?.data?.is_buy == false) {
            //         setBuyMessage('Please Purchase')
            //     }
            // }
            // if (res?.data?.data?.is_active == true && res?.data?.data?.is_buy == true) {
            //     setOnBoarding(true)
            // }

            // if (res?.data?.data?.isOnBoarded == false) {
            //     // onBoardingApiCall()
            //     setSuggestOnBoarding(true)
            // }
            // if (res?.data?.data?.isOnBoarded == true) {
            //     setBankPermission(true)
            // }

            // // bankPermission/////
            // if (res?.data?.data?.isOnBoarded == true) {
            //     if (!res?.data?.data?.bank2 || !res?.data?.data?.bank3) {
            //         setbank2('AEPS OnBoarding Side is Pending')
            //         // setbank2('AEPS OnBoarding Side is Pending Bank 2')
            //         // setSuggestOnBoarding(false)
            //     }
            // }

            // // if (res?.data?.data?.bank2 == true) {
            // //     if (res?.data?.data?.bank3 == false) {
            // //         setbank3('AEPS OnBoarding Side is Pending ')
            // //         // setbank3('AEPS OnBoarding Side is Pending Bank 3')
            // //         // setSuggestOnBoarding(false)
            // //     }
            // // }

            // if (res?.data?.data?.bank2 == true || res?.data?.data?.bank3 == true) {
            //     // console.log('setBankPermission == true');

            //     if (res?.data?.data?.authRegistered == false) {
            //         setBankPermission(true)
            //     }
            // }

            // if (res?.data?.data?.authRegistered == true) {
            //     setBankPermission(true)
            // }

            // if (res?.data?.data?.authRegistered == true) {
            //     if (res?.data?.data?.dailyAuth == false) {
            //         setBankPermission(true)
            //     }
            // }

            // bankPermission/////

            if (res?.data?.data?.is_active == false) {
                setActiveMessage('Please Admin Side Active User')
            }
            if (res?.data?.data?.is_active == true) {
                if (res?.data?.data?.is_buy == false) {
                    setBuyMessage('Please Purchase')
                }
            }
            if (res?.data?.data?.is_active == true && res?.data?.data?.is_buy == true) {
                setOnBoarding(true)
                setSuggestOnBoarding(false)
                setBankPermission(true)
                setAuthRegistered(true)
                setDailyAuth(true)
            }

            if (res?.data?.data?.isOnBoarded == true) {
                setOnBoarding(true)
                setSuggestOnBoarding(true)
                setBankPermission(false)
                setAuthRegistered(true)
                setDailyAuth(true)
            }

            if (res?.data?.data?.bank2 == true || res?.data?.data?.bank3 == true) {
                setOnBoarding(true)
                setSuggestOnBoarding(true)
                setBankPermission(true)
                setAuthRegistered(false)
                setDailyAuth(true)
            }

            if (res?.data?.data?.authRegistered == true) {
                setOnBoarding(true)
                setSuggestOnBoarding(true)
                setBankPermission(true)
                setAuthRegistered(true)
                setDailyAuth(false)
            }


            if (res?.data?.data?.dailyAuth == true) {
                setOnBoarding(true)
                setSuggestOnBoarding(true)
                setBankPermission(true)
                setAuthRegistered(true)
                setDailyAuth(true)

            }



            // if (res?.data?.data?.isOnBoarded == true) {
            //     setOnBoarding(false)

            // }









            setLoder(false)
        } catch (error) {
            setLoder(false)
        }
    }

    const toastSuccessMessage = (str) => {
        toast.error(`${str}`, {
            position: "top-center",
        });
    };

    const onBoardingApiCall = async () => {
        const data = { user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await aepsOnboard(data)
            // console.log(res);
            if (res?.data?.statusCode == '403') {
                toastSuccessMessage(res?.data?.message)
            }
            if (res?.data?.statusCode == 200) {
                window.open(res?.data?.data?.url, '_blank')
            }
        } catch (error) {

        }
    }


    useEffect(() => {
        permissionAeps()
    }, [])
    // console.log(suggestOnBoard);
    return (
        <>
            {/* {onBoading ? <AepsOnBording /> : <PermissionAepsOnboarding activeMessage={activeMessage} buyMessage={buyMessage} />}

            {bankPermission == false ? suggestOnBoard ? <SuggestOnboarding onBoardingApiCall={onBoardingApiCall} /> : <BankPermission bank2={bank2} bank3={bank3} /> : ''}

            {suggestOnBoard == false ? bankPermission ? <AuthResister /> : <DailyAuth /> : ''} */}

            {loder && <Loader />}



            {onBoading ? <AepsOnBording /> : <PermissionAepsOnboarding activeMessage={activeMessage} buyMessage={buyMessage} />}

            {suggestOnBoard ? '' : <SuggestOnboarding onBoardingApiCall={onBoardingApiCall} />}

            {bankPermission ? '' : <BankPermission bank2={bank2} bank3={bank3} />}

            {authRegistered ? '' : <AuthResister />}

            {dailyAuth ? '' : <DailyAuth />}
            {suggestOnBoard && bankPermission && authRegistered && dailyAuth ? <>
                <CompleteOnBoarding />
            </> : ''}
            {/* <CompleteOnBoarding /> */}

            <ToastContainer />

        </>
    )
}
export default AepsOnBoardingPage