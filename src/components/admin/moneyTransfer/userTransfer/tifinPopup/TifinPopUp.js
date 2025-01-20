import { Popconfirm } from "antd";
import { useRef, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { FaRupeeSign } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


function TifinPopup(props) {
    console.log(props);
    const [state, setState] = useState(props?.initialMoney)
    console.log(state);

    const [pinInputDis, setpinInputDis] = useState(true)

    const openMoalTrasfer = () => {
        props.setModalShow(true)
        props.onHide()
    }

    const inputEnable = () => {
        setpinInputDis(false)
    }

    const length = 4
    const [otp, setOtp] = useState(new Array(length).fill(''));
    console.log(otp);

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


    const confirm = (e) => {
        // console.log(e);

        props.sendMoney(str)

        // sendMoney()
        // message.success('Click on Yes');
    };
    const cancel = (e) => {
        // console.log(e);
        // message.error('Thanks 🙏');
    };

    // const submit = () => {
    //     // setPinForget(false)
    //     props.sendMoney(str)
    // }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-set"
            >
                {/* <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}

                    <div className="send-money-deatils">
                        <div className="send-money-name">
                            <h2>Name : </h2>
                            <p>{props?.verifyData?.bank_account_name ? props?.verifyData?.bank_account_name : props?.sendMoneyData?.recipient_name}</p>
                        </div>
                        {props?.sendMoneyData?.recipient_mobile == undefined ? ' ' : <>
                            <div className="send-money-Mobile">
                                <h2>Mobile : </h2>
                                <p>{props?.sendMoneyData?.recipient_mobile}</p>
                            </div>
                        </>}

                        <div className="send-money-accNum">
                            <h2>IFSC Code : </h2>
                            <p>{props?.sendMoneyData?.ifsc}</p>
                        </div>

                        <div className="send-money-accNum">
                            <h2>Account Number : </h2>
                            <p>{props?.sendMoneyData?.account}</p>
                        </div>
                        <div className="send-money-bnkName">
                            <h2>Bank Name : </h2>
                            <p>{props?.sendMoneyData?.bank}</p>
                        </div>
                    </div>



                    <div className="input-group input-group-input mb-3 mt-3">

                        <span className="input-group-text" id="basic-addon1"><FaRupeeSign /></span>
                        <input type="number" className="form-control" placeholder="Enter Amount" disabled={pinInputDis} name="amount" value={props?.initialMoney?.amount} onChange={props?.handleAmount} />

                        {/* <span className="input-group-text" id="basic-addon1" onClick={sendMoney}><LuSendHorizonal /></span> */}
                        <MdEdit className="edit-co" onClick={inputEnable} />
                    </div>


                    <div className="form-group form-group-cus text-align-center col-lg-12 m-0">
                        <label htmlFor="txtCnfPassword" className="mb-3">Enter TPIN <span style={{ color: 'red' }}>*</span></label>
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
                        <Popconfirm
                            title="Send"
                            description="Are you sure to Send ?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <button type="button" className="btn btn-success mt-2 mb-2" >
                                PAY

                            </button>
                        </Popconfirm>

                        <Button onClick={props.onHide}>Close</Button>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer className="text-align-center1">
                    <Button onClick={openMoalTrasfer}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default TifinPopup