import { useRef, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { ForgotPinOtp } from "../../../../../api/login/Login";

function ForgetPin(props) {
    const [finForget, setPinForget] = useState(true)
    const [loader1, setloader1] = useState(false)

    const length = 6
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

    const getOtp = () => {
        setPinForget(false)
    }

    const submitOtp = async () => {
        setloader1(true)
        const datasend = { user_id: window.localStorage.getItem('userIdToken'), otp: str }
        try {
            const res = await ForgotPinOtp(datasend)
            if (res?.data?.statusCode == 200) {
                props.toastSuccessMessage(res?.data?.message)
                setTimeout(() => {
                    props.handleClose()
                }, 2000)
            }
            setloader1(false)
        } catch (error) {
            setloader1(false)
        }
        setOtp(new Array(length).fill(''))
    }
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Forget Pin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        {!finForget ? <div className="form-group form-group-cus col-lg-12 m-0">
                            <label htmlFor="txtCnfPassword">Customer Mobile <span style={{ color: 'red' }}>*</span></label>
                            <input className="form-control" id="txtCnfPassword" name="Customer Mobile" type="number" placeholder="Enter Customer Mobile" />
                            <button type="button" className="btn btn-success mt-2" onClick={getOtp}>Get OTP</button>
                        </div> : <div className="form-group form-group-cus text-align-center col-lg-12 m-0">
                            <label htmlFor="txtCnfPassword" className="mb-3">Enter OTP <span style={{ color: 'red' }}>*</span></label>
                            <div className="otp-box">
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        value={value}
                                        onChange={(e) => otpChandleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        ref={(input) => (inputs.current[index] = input)}
                                        style={{ width: '14%', marginBottom: '15px' }}
                                    />
                                ))}
                            </div>
                            <button type="button" className="btn btn-success mt-2" onClick={submitOtp}>
                                Submit OTP
                                {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                            </button>
                        </div>}
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal >
        </>
    )
}
export default ForgetPin