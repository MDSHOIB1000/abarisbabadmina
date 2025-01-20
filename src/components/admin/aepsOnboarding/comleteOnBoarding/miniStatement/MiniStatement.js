
import Select from "react-select";
import { HiMiniWallet } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { aepsBankList, miniStatement } from "../../../../../api/login/Login";
import { useEffect, useState } from "react";
import { capturefingerprint } from "../../../../../common/fingurePrintJs/FingurePrint";
import { toast } from "react-toastify";
import AepsModalSucess from "../../../../../common/aepsModleSucess/AepsModleSucess";
function MiniStatement() {
    const [modalShow, setModalShow] = useState(false);
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    // console.log(position);
    const [dataModal, setDataModal] = useState(null)
    const [bankData, setBankData] = useState(null)

    const [dataCapture, setDataCapture] = useState()



    const [initialValue, setInitialValue] = useState({
        accessmodetype: 'site',
        latitude: '',
        longitude: '',
        mobilenumber: '',
        adhaarnumber: '',
        nationalbankidentification: '',
        requestremarks: 'Aeps Balance Enquiry',
        user_id: '',
        is_iris: 'NO',
        data: ''
    })

    const changeHandle = (e, str) => {
        const cloneInitail = { ...initialValue }
        const value = e.target.value
        const name = e.target.name
        cloneInitail[name] = value
        if ('mobilenumber' == str ? value.length == 11 : '') {
            return
        }
        if ('adhaarnumber' == str ? value.length == 13 : '') {
            return
        }

        setInitialValue(cloneInitail)
    }

    const bankList = async () => {
        try {
            const res = await aepsBankList()
            console.log(res?.data);
            const maped = res?.data?.data?.map((item) => {
                return { ...item, label: item.bankName }
            })

            // console.log(maped);
            setBankData(maped)
        } catch (error) {

        }

    }
    const [showBanak, setShowBank] = useState()
    console.log(showBanak);

    const bankChange = (e) => {
        console.log(e);
        const clone = { ...initialValue }
        // if (name == 'bank_id') {
        const findIfac = bankData.find((item) => {
            // console.log(item);
            return item?.bankID == e.bankID
        })

        // let abc = findIfac?.ifsc_code
        // let bankName = findIfac?.bank_name

        // const clone2 = { ...clone, ifsc: abc == 'NULL' ? "" : abc, bank_name: bankName }

        // setInitialValue(clone2)

        setShowBank(e)

    }



    const Capturefingerherw = () => {

        try {
            const fingerData = new capturefingerprint('http://127.0.0.1:11100/rd/capture', result)
            // console.log(fingerData);
        } catch (error) {
            console.log(error);
        }
    }

    const result = (data) => {
        // console.log(data);
        // console.log(data.pid_data);

        const prolog = data?.pid_data;
        var parser = new DOMParser();
        const XmlStr = prolog + "<bookz/>";
        var xmlz = parser.parseFromString(XmlStr, "application/xml");
        // console.log(window.btoa((new XMLSerializer()).serializeToString(xmlz)));


        if (data?.errCode == '0') {
            toastSuccessMessage('Finger Capture Successfully.')
        }
        if (data?.errCode == '700') {
            toastSuccessMessage1('Finger Capture Not Successfully.')
        }

        if (data?.httpSuccess == true) {
            setDataCapture(window.btoa((new XMLSerializer()).serializeToString(xmlz)))
        }
    }


    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center",
        });
    };



    const toastSuccessMessage1 = (str) => {
        toast.error(`${str}`, {
            position: "top-center",
        });
    };


    const submitData = async () => {
        const clone = { ...initialValue, nationalbankidentification: showBanak?.iinno, latitude: position.latitude, longitude: position.longitude, data: dataCapture, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            const res = await miniStatement(clone)
            console.log(res);
            if (res?.data?.error == true) {
                toastSuccessMessage1(res?.data?.message)
            }
            if (res?.data?.error == false) {
                // toastSuccessMessage(res?.data?.message)
                setDataModal(res?.data?.data)
                setModalShow(true)
            }

        } catch (error) {

        }
    }




    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            alert('Geolocation is not available in your browser.')
        }

    }, []);
    useEffect(() => {
        bankList()
    }, [])
    return (
        <>
            {/* <div className="PageHeading">
                <h1>Aeps OnBoarding</h1>
            </div> */}

            <div className="card">
                <div className="card-header">
                    <span>Mini Statement</span>
                    <span>
                        <HiMiniWallet />
                    </span>
                </div>
                <div className="card-body">
                    <form action="" method="post" name="frmReport" id="frmReport">
                        <input type="hidden" id="hidID" name="hidID" />
                        <div className="form-row" style={{ alignItems: 'end' }}>
                            {/* <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Min Amount</label>
                                    <input type="number" name="min_amt" id="account_no" className="form-control" value={filterInitial.min_amt} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Max Amount</label>
                                    <input type="number" name="max_amt" id="account_no" className="form-control" value={filterInitial.max_amt} onChange={handleChange} />
                                </div> */}

                            <div className="form-group col-md-6">
                                <label htmlFor="txtUserId">Customer Mobile <span style={{ color: 'red' }}>*</span></label>
                                <input type="number" name="mobilenumber" id="account_no" className="form-control" placeholder="Enter Customer Mobile" value={initialValue.mobilenumber} onChange={(e) => changeHandle(e, 'mobilenumber')} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="txtUserId">Customer Aadhaar <span style={{ color: 'red' }}>*</span></label>
                                <input type="number" name="adhaarnumber" id="account_no" className="form-control" placeholder="Enter Customer Aadhaar" value={initialValue.adhaarnumber} onChange={(e) => changeHandle(e, 'adhaarnumber')} />
                            </div>
                            <div className="form-group grid-sed col-md-6">
                                <label htmlFor="txtUserId">Select Bank Name <span style={{ color: 'red' }}>*</span></label>
                                <Select
                                    // isMulti
                                    // defaultValue={showCateg}
                                    value={showBanak}
                                    name="showBanak"
                                    options={bankData}
                                    className="games-dropdown-2 customsection"
                                    classNamePrefix="select"
                                    onChange={bankChange}
                                />
                            </div>

                            <div className="form-group col-md-6 grid-sed">
                                <label htmlFor="txtUserId">Scan Finger Print <span style={{ color: 'red' }}>*</span></label>
                                <button type="button" className="btn btn-success" onClick={Capturefingerherw}>Capture Finger</button>
                            </div>
                            <div className="form-group col-md-12 text-align-center">
                                <label>&nbsp;</label>

                                <button type="button" className="btn btn-primary mr-3" disabled={!initialValue.mobilenumber || !initialValue.adhaarnumber || !showBanak?.iinno || !dataCapture} onClick={submitData}>
                                    Proceed
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <AepsModalSucess
                show={modalShow}
                onHide={() => setModalShow(false)}
                adharPay="Mini Statement"
                dataModal={dataModal}
            />

        </>
    )
}
export default MiniStatement