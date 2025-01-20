import { useEffect, useState } from "react"
import CustomerApi from "./customerApi/CustomerApi"
import NotExitCustomer from "./notExitCustomer/NotExitCustomer"
import CreateCustomer from "./createCustomer/CreateCustomer";
import { BENEFICIARYDelete, CustomerInfo, VerifyCustomer, reciptList, reciptListUpdate, sagestMobileNumber, settingBank } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import OtpCustomer from "./createCustomer/otpCustomer/OtpCustomer";
import OtpChaeckTost from "./otpcheckTost/OtpCheckTost";
import { Button, message, Popconfirm } from 'antd';
import Loader from "../../../common/loader/Loader";
import mobileImage from '../../../asesets/adminImage/phone.jpg'

let nums = ''
function MoneyTransfer() {
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [customerNumber, setCustomerNumber] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isActiveCus, setIsActiveCus] = useState(false)

    const [data, setData] = useState(null)
    const [beneficiaryData, setBeneficiaryData] = useState(null)
    console.log(beneficiaryData);

    const [initialCustomer, setInitialCustomer] = useState({
        mobile: '',
        api_id: 'Paysprint'
    })


    const [updateNumber, setupdateNumber] = useState({
        mobile: '',
    })

    // console.log(updateNumber);

    const [suggestions, setSuggestions] = useState([]);

    const [maxLength, setMaxLength] = useState(10)
    const handleChangeCustomer = (e) => {

        const name = e.target.name
        const value = e.target.value
        const updateClone = { ...initialCustomer, [name]: value, api_id: initialCustomer.api_id }
        // console.log(updateClone);
        // clone[name] = value
        // var regex = /^[0-9]{11}$/;
        // if (/^\d{11}$/.test(value) || /^\d{11}-\d{16}$/.test(value)) {
        //     return
        // }

        // if (value.length <= maxLength) {
        //     console.log('oijio', value.length);
        //     setInitialCustomer(updateClone)
        // }
        if (/^\d{0,10}$/.test(value)) {
            setInitialCustomer(updateClone)
        }
        fetchSuggestions(updateClone)
    }

    const handleChangeCustomer2 = (str) => {
        const clone = { ...initialCustomer, api_id: str }
        setInitialCustomer(clone);



        // const name = str.target.name
        // const value = str.target.value
        // const updateClone = { ...initialCustomer, [name]: value }
        // console.log(updateClone);

    }

    const toastSuccessMessage = (data) => {
        // console.log(data);
        toast.success(`${data}`, {
            position: "top-center",
        });
    };

    const toastSuccessMessageError = (data) => {
        // console.log(data);
        toast.error(`${data}`, {
            position: "top-center",
        });
    };

    const SubmitCustomer = async () => {
        setLoading(true)
        nums = initialCustomer.mobile
        const clone = { ...initialCustomer }
        // console.log(clone);
        try {
            const res = await CustomerInfo(clone)
            const resRecipt = await reciptList(clone)
            // console.log(resRecipt);
            setupdateNumber(clone)
            // setInitialCustomer({
            //     ...initialCustomer,
            //     mobile: ''
            // })
            setBeneficiaryData(resRecipt?.data?.data)
            // console.log(res);
            setData(res?.data?.data?.response);
            // console.log('fjidsf', res?.data?.data?.response?.customer_id);
            // setCustomerNumber(res?.data?.data)
            if (res?.data?.statusCode == 200) {
                toastSuccessMessage(res?.data?.message)
                SearchCustomer()
            }
            if (res?.data?.statusCode == 400 || res?.data?.statusCode == 401) {
                // toastSuccessMessage(res?.data?.message)
                setIsActiveCus(false)
                setModalShow(true)

            }
            if (res?.data?.statusCode == 300) {
                toastSuccessMessageError(res?.data?.message)
                setShow(true)
            }
            if (res?.data?.statusCode == 500) {
                toastSuccessMessageError(res?.data?.message)
            }
            setLoading(false)
        } catch (error) {

        }
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            SubmitCustomer();
        }
    };


    const updateRecipetList = async () => {
        setLoading(true)
        const clone = { ...updateNumber }
        try {
            const res = await reciptListUpdate(clone)
            setBeneficiaryData(res?.data?.data?.response?.recipient_list)
            if (res?.data?.statusCode == 200) {
                // toastSuccessMessage(res?.data?.message)

            }
        } catch (error) {

        }
        setLoading(false)
    }


    const confirm = (id) => {
        deleteRecipt(id)

    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };

    const deleteRecipt = async (id) => {
        const clone = { customer_mobile: nums, recipient_id: id, user_id: window.localStorage.getItem('userIdToken'), api_id: initialCustomer.api_id }
        console.log('cloneclone', clone);
        try {
            const res = await BENEFICIARYDelete(clone)
            if (res?.data?.statusCode == 200) {
                toastSuccessMessage(res?.data?.message)
                message.success('Delete Successfull!');
                SubmitCustomer()
            }
            if (res?.data?.statusCode == 400) {
                toastSuccessMessageError(res?.data?.message)
            }
            if (res?.data?.statusCode == 300) {
                toastSuccessMessageError(res?.data?.message)
            }
        } catch (error) {

        }
    }



    const fetchSuggestions = async (number) => {
        const clone = { ...initialCustomer }
        try {
            const res = await sagestMobileNumber(number)
            setSuggestions(res?.data?.data);
        } catch (error) {

        }
    }

    const handleSuggestionClick = (suggestion) => {
        const clone = { ...initialCustomer, mobile: suggestion }
        setInitialCustomer(clone)
        setSuggestions([])

    }

    // useEffect(() => {
    //     // if (initialCustomer.mobile) {
    //     fetchSuggestions()
    //     // }

    // }, [initialCustomer.mobile])




    const SearchCustomer = () => {
        setIsActiveCus(true)
        // setModalShow(true)
    }

    const customerCreate = () => {
        setModalShow(false)
        setModalShow2(true)
    }

    const [settingState, setSettingState] = useState(null)

    const [dataEkoPay, setDataEkoPay] = useState(null)
    // console.log(dataEkoPay);


    const settingBankverify = async () => {
        try {
            const res = await settingBank()
            setSettingState(res?.data?.data?.bankVerificationCharge);
            setDataEkoPay(res?.data?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        settingBankverify()
    }, [])

    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading"><h1>Domestic Money Transfer</h1></div>
            <div className="ContentArea"><div className="card">
                <div className="card-header">
                    <span>Search</span>
                    {/* <div style={{ float: 'right', color: '#1e5591', fontWeight: 600, paddingTop: 15 }}>Dhamaka Offer Limit: 62011</div> */}
                </div>
                <div className="card-body">
                    {dataEkoPay?.dmtApiType == "both" ? <>
                        <div className="col-lg-4">
                            <div className="pay-sprint-set">
                                <div className="form-check mr-3">
                                    <input className="form-check-input" type="radio" name="api_id" id="flexRadioDefault2" onChange={(e) => handleChangeCustomer2('eko')} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Bank 1
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="radio" name="api_id" id="flexRadioDefault1" defaultChecked={'Paysprint'} onChange={(e) => handleChangeCustomer2('Paysprint')} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        {/* Paysprint */}
                                        Bank 2
                                    </label>
                                </div>
                            </div>
                        </div>
                    </> : ''}


                    <div className="row row-row" id="dev-search-form">
                        <div className="col-md-4 ">
                            <div className="form-group mobile-input-container">
                                <label htmlFor="txtSM">Customer Number <span id="lenofsendernumber" className="float-right" /></label>
                                <input type="text" id="txtSM" className="form-control" name="mobile" value={initialCustomer.mobile} placeholder=" Enter Customer Number" maxLength={maxLength} onKeyDown={handleKeyPress} onChange={handleChangeCustomer} />
                                {suggestions.length > 0 && (
                                    <ul className="suggestions-list">
                                        {suggestions && suggestions.map((suggestion) => (
                                            <li
                                                key={suggestion?._id}
                                                className="suggestion-item"
                                                onClick={() => handleSuggestionClick(suggestion.customer_number)}
                                            >
                                                <span>{suggestion?.customer_number}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                        </div>

                        <div className="col-md-3 pt-md-3 mt-1">
                            <button type="button" id="btnSearch" className="btn btn-success custom-button example-1" onClick={SubmitCustomer}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {isActiveCus ? <CustomerApi data={data} beneficiaryData={beneficiaryData} customerNumber={updateNumber.mobile} confirm={confirm} cancel={cancel} toastSuccessMessage={toastSuccessMessage} updateRecipetList={updateRecipetList} settingState={settingState} initialCustomer={initialCustomer} toastSuccessMessageError={toastSuccessMessageError} SubmitCustomer={SubmitCustomer} /> : ''}
            <NotExitCustomer
                show={modalShow}
                onHide={() => setModalShow(false)}
                customerCreate={customerCreate}
            />

            <CreateCustomer
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow2={setModalShow2}
                handleShow={handleShow}
                toastSuccessMessage={toastSuccessMessage}
                updateNumber={updateNumber}
                initialCustomer={initialCustomer}
                toastSuccessMessageError={toastSuccessMessageError}
            />

            <OtpChaeckTost
                setShow={setShow}
                show={show}
                handleClose={handleClose}
                setModalShow3={setModalShow3}
            />

            <OtpCustomer
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                customerNumber={customerNumber}
                toastSuccessMessage={toastSuccessMessage}
            />

            <ToastContainer />
        </>
    )
}
export default MoneyTransfer