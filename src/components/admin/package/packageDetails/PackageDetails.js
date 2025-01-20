
import { useEffect, useRef, useState } from 'react';
import img1 from '../../../../asesets/banner/package.jpg'
import BuyPackage from './buyPackage/BuyPackage'
import { useParams } from 'react-router-dom';
import { pacDetails, packageBuy, userValidate } from '../../../../api/login/Login';
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
function PackageDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const param = useParams()
    // console.log(param?.id);
    const [dataDetails, setDataDetails] = useState(null)
    // console.log(dataDetails);

    const [saleRate, setSaleRate] = useState(null)
    const [waletsData, setwaletsData] = useState(null)
    console.log('fvfdvdf', waletsData);

    const [totalData, setTotalData] = useState()



    const packageDetail = async () => {
        try {
            const res = await pacDetails(param?.id)
            setDataDetails(res?.data?.data)
            changeHandle(res?.data?.data?.prices[0])
        } catch (error) {

        }
    }

    function createMarkup(data) {
        return { __html: data };
    }

    const length = 4
    const [otp, setOtp] = useState(new Array(length).fill(''));
    // console.log(otp);

    let str = ''
    for (let index = 0; index < otp.length; index++) {
        const element = otp[index];
        str = str + element
    }

    console.log(str);

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





    const [initialValue, setInitialValue] = useState({
        package_id: '665ec22328aef0e0c7108773',
        tpin: '',
        price: '',
        user_id: ''
    })

    console.log(initialValue);

    const changeHandle = (item) => {
        console.log(item);
        setSaleRate(item)
        const clone = { ...initialValue, price: item?._id }
        console.log(clone);
        setInitialValue(clone);
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const toastErrorMessage = (str) => {
        toast.error(`${str}`, {
            position: "top-center"
        })
    };


    const payPackage = async () => {
        const clone = { ...initialValue, package_id: param?.id, tpin: str, user_id: window.localStorage.getItem("userIdToken") }
        try {
            const res = await packageBuy(clone)
            if (res?.data?.error == true) {
                toastErrorMessage(res?.data?.message)
            }
            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message)
            }
        } catch (error) {

        }
    }


    const waletsShow = async () => {
        try {
            const res = await userValidate()
            setwaletsData(res?.data)
            const totalData = res.data?.main_wallet - saleRate?.sale_rate
            setTotalData(totalData)
        } catch (error) {

        }
    }




    useEffect(() => {
        packageDetail()
    }, [])
    useEffect(() => {
        waletsShow()
    }, [saleRate])
    return (
        <>
            <div className="PageHeading">
                <h1>Package Details</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header card-header-plannhrad">
                        <h2 className='plannhrad'>Subscription Plan</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-row">
                            {/* <div className="col-lg-6">
                                <div className="image-banner">
                                    <img src={img1} alt="" />
                                </div>
                            </div> */}
                            <div className="col-lg-12">
                                <div className='details-set'>
                                    <h3>{dataDetails?.package_name}</h3>
                                    <hr />
                                    <p>
                                        <div
                                            className="products-details-tab-content"
                                            dangerouslySetInnerHTML={createMarkup(
                                                dataDetails?.description
                                            )}
                                        />
                                    </p>


                                    {dataDetails?.Dmt_Comm?.map((item) => {
                                        // console.log(item);
                                        return <div>
                                            <h3 className='text-align-center mb-3'>{item?.commision_name} /  {item?.dmt_name}</h3>
                                            <table class="table">
                                                <thead>
                                                    <tr className='table-primary'>
                                                        <th scope="col">S No.</th>
                                                        <th scope="col">Distributor Commision</th>
                                                        <th scope="col">Distributor Commision Type</th>
                                                        <th scope="col">Start Amount</th>
                                                        <th scope="col">End Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>{item?.commision?.map((item, index) => {
                                                    return <tr key={item?._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item?.distributor_comm}</td>
                                                        <td>{item?.distributor_comm_type}</td>
                                                        <td>{item?.start_amt}</td>
                                                        <td>{item?.end_amt}</td>

                                                        {/* <td><button type='button' className='btn btn-success' onClick={() => setModalShow(true)}>BUY</button></td> */}
                                                    </tr>
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    })}


                                    <div>
                                        <h4 style={{ fontSize: '12px' }}> <strong>Subsciption Plans</strong> </h4>
                                        <div className='Subscition'>
                                            {dataDetails?.prices?.map((item, i) => {
                                                return <div className="form-check mr-3" key={item?._id}>
                                                    <input className="form-check-input" type="radio" name="package_id" defaultChecked={i == 0} value={initialValue?.package_id} id={item?._id} onChange={(e) => changeHandle(item)} />
                                                    <label className="form-check-label" htmlFor={item?._id}>
                                                        {item?.duration} {item?.duration_type} ({item?.tax_type} {item?.sale_rate} + GST /-)
                                                    </label>
                                                </div>
                                            })}



                                            {/* <div className="form-check mr-3">
                                                <input className="form-check-input" type="radio" name="api_id" id="flexRadioDefault3" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    1 Year (Rs. 10000 + GST /-)
                                                </label>
                                            </div>
                                            <div className="form-check mr-3">
                                                <input className="form-check-input" type="radio" name="api_id" id="flexRadioDefault4" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                    One Time (Rs. 20000 + GST /-)
                                                </label>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className='mt-3 ConditionsTerm'>
                                        <h4 style={{ fontSize: '12px' }}> <strong>Terms & Conditions</strong> </h4>
                                        <ul>
                                            <li>1. In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</li>
                                            <li>2. In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</li>
                                            <li>3. In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</li>
                                        </ul>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={isChecked}
                                                onChange={handleCheckboxChange} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                I agree to the terms and Condition.
                                            </label>
                                        </div>
                                    </div>
                                    <div className='buy-now'>
                                        <button type='button' className='btn btn-success' disabled={!isChecked} onClick={handleShow}>BUY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BuyPackage
                show={modalShow}
                onHide={() => setModalShow(false)}
                otp={otp}
                otpChandleChange={otpChandleChange}
                handleKeyDown={handleKeyDown}
                inputs={inputs}
            /> */}



            <Modal
                // {...props}
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="by-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Package Purchase
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="walet-purchage-show">
                            <p><strong>Current Amount  - </strong></p>
                            <p>Rs {waletsData?.main_wallet} </p>
                        </div>
                        <div className="walet-purchage-show">
                            <p><strong>Package Amount -</strong></p>
                            <p>Rs {saleRate?.sale_rate} </p>
                        </div>
                        <div className="walet-purchage-show">
                            <p><strong>Available Amount -</strong></p>
                            <p>Rs {totalData} </p>
                        </div>

                        <div className="form-group form-group-cus text-align-center col-lg-12 m-0">
                            <label htmlFor="txtCnfPassword" className="mb-3">Enter Tpin <span style={{ color: 'red' }}>*</span></label>
                            <div className="otp-box">
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        value={value}
                                        onChange={(e) => otpChandleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        ref={(input) => (inputs.current[index] = input)}
                                        style={{ width: '23%', marginBottom: '15px' }}
                                    />
                                ))}
                            </div>
                            <button type="button" className="btn btn-success mt-2" onClick={payPackage}>
                                PAY
                                {/* {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                } */}
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>


            <ToastContainer />
        </>
    )
}
export default PackageDetails