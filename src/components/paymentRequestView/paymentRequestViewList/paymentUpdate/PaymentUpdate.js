import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
import CustomTextArea from '../../../../common/CustomTextArea';
import { changeSTatuss, usersList } from '../../../../api/login/Login';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { ModalImgShow } from '../../../distributer/createUserDistributer/kycDetails/ModalImgShow';
function PaymentUpdate({ show, handleClose, values, showLog, setshowLog, fetchUserType }) {
    console.log(values);
    const [initialValues, setinitialValues] = useState({
        user_name: "",
        amount: '',
        payment_date: '',
        remark: '',
        pin: '',
        bank_name: '',
        bank_ref: '',
        password: "",
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        if (values?.paymentDate) {
            const dates = formatDate(values?.paymentDate);
            console.log(dates);
            const clonne = {
                user_name: values?.username,
                amount: values?.amount,
                payment_date: dates,
                message: '',
                bank_ref: values?.bankRef,
                bank_name: values?.bank,
                review: values.remark,
                receipt_img: values?.receipt_img,
                method: values?.method,
                password: "",
                status: values?.status,
            };
            setinitialValues(clonne);
        }
    }, [values]);

    const validate = (values) => {
        let errors = {};

        if (!values.payment_date) {
            errors.payment_date = "Payment Date is required";
        }
        if (!values.user_name) {
            errors.user_name = "User Name is required";
        }
        if (!values.bank_name) {
            errors.bank_name = "Bank Name is required";
        }
        if (!values.amount) {
            errors.amount = "Amount is required";
        }
        if (!values.bank_ref) {
            errors.bank_ref = "Bank Ref is required";
        }
        if (!values.login_pasword) {
            errors.login_pasword = "Password is required";
        }
        // if (!values.message) {
        //     errors.message = "Message is required";
        // }

        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
    };
    const submitForm1 = async () => {
        const clone = {
            token: window.localStorage.getItem('userIdToken'),
            status: initialValues.status,
            Payment: values._id,
            message: initialValues.message,
            pin: initialValues?.pin
        }
        setinitialValues(clone);
        setshowLog(true)
        return
        try {
            const response = await changeSTatuss(clone)
            if (response?.statusCode == 200) {
                alert("successfully Change   ");
            } else {
                alert(response.message);
            }
        } catch (error) {

        }
    };

    const handleChange1 = (e) => {
        const clone = { ...initialValues }
        clone[e.target.name] = e.target.value
        setinitialValues(clone)
    }



    const validationSchema = Yup.object().shape({
        // email: Yup.string().email('Invalid email address').required('Email is required'),
        // password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
        // pin: Yup.string().length(4, 'PIN must be exactly 4 digits').required('PIN is required'),
    });
    const initialValues2 = {
        email: '',
        password: '',
        pin: '',
    };

    const submitForm2 = async (valuess) => {
        const clone = {
            token: window.localStorage.getItem('userIdToken'),
            status: initialValues.status,
            Payment: values._id,
            message: initialValues.message,
            email: valuess.email,
            password: valuess.password,
            review: valuess.message,
            pin: valuess?.pin,
        }
        console.log('Form Data', clone);
        try {
            const response = await changeSTatuss(clone)
            if (response?.statusCode == 200) {
                alert("Update Payment successfully");
                fetchUserType()
                handleClose()
            } else {
                alert(response.message);
            }
        } catch (error) {

        }
    };
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [cantain, setcantain] = useState({})

    const CLickImgShow2 = (url, str) => {
        handleShow2()
        setcantain({ url: url, str: str })
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} className='dilog-box newcuss' id="dilog-box">
                <Modal.Header closeButton>
                    <Modal.Title>Update Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {showLog ? <Formik
                        initialValues={initialValues2}
                        validationSchema={validationSchema}
                        onSubmit={submitForm2}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <Form onSubmit={handleSubmit} className='cusformsnew'>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.password && !!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formPin" className="mb-3">
                                    <Form.Label>PIN</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="pin"
                                        value={values.pin}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.pin && !!errors.pin}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.pin}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="danger" onClick={() => { setshowLog(false) }}>Cancle</Button>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik> : <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={submitForm}
                        enableReinitialize
                    >
                        {(formik) => {
                            const {
                                values,
                                handleChange,
                                handleSubmit,
                                errors,
                                touched,
                                handleBlur,
                            } = formik;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={initialValues.user_name}
                                                hasError={errors.user_name && touched.user_name}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.user_name}
                                                autoFocus={true}
                                                id="user_name"
                                                name="user_name"
                                                placeholder="User Name"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="date"
                                                value={initialValues.payment_date}
                                                hasError={errors.payment_date && touched.payment_date}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.payment_date}
                                                autoFocus={true}
                                                id="payment_date"
                                                name="payment_date"
                                                placeholder="Payment Date"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <select className="form-select" aria-label="Default select example" onChange={handleChange1} value={initialValues.method}>
                                                <option>Select Method</option>
                                                <option value='neft'>NEFT</option>
                                                <option value='rtgs'>RTGS</option>
                                                <option value="IMPS">IMPS</option>
                                                <option value="cashdeposit">CASH Deposit</option>
                                                <option value="qrpayment">QR PAYMENT</option>
                                                <option value="upipayment">UPI PAYMENT</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={initialValues.bank_name}
                                                hasError={errors.bank_name && touched.bank_name}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.bank_name}
                                                autoFocus={true}
                                                id="bank_name"
                                                name="bank_name"
                                                placeholder="Bank name"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={initialValues.amount}
                                                hasError={errors.amount && touched.amount}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.amount}
                                                autoFocus={true}
                                                id="amount"
                                                name="amount"
                                                placeholder="Amount"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={initialValues.bank_ref}
                                                hasError={errors.bank_ref && touched.bank_ref}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.bank_ref}
                                                autoFocus={true}
                                                id="bank_ref"
                                                name="bank_ref"
                                                placeholder="Bank Ref"
                                            />
                                        </div>
                                        {/* <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={initialValues.pin}
                                                hasError={errors.pin && touched.pin}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.pin}
                                                autoFocus={true}
                                                id="pin"
                                                name="pin"
                                                placeholder="Pin"
                                            />
                                        </div> */}
                                        <div className="col-xl-12 mb-3">
                                            <select className="form-select" aria-label="Default select example" value={initialValues?.status} name="status" onChange={handleChange1} onBlur={handleBlur}>
                                                <option selected disabled>Select Status</option>
                                                <option value={'Pending'}>Pending</option>
                                                <option value={'Approved'}>Approved</option>
                                                <option value={'In progress'}>In progress</option>
                                                <option value={'Rejected'}>Rejected</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <CustomTextArea
                                                type="text"
                                                value={initialValues.message}
                                                hasError={errors.message && touched.message}
                                                onChange={handleChange1}
                                                onBlur={handleBlur}
                                                errorMsg={errors.message}
                                                autoFocus={true}
                                                id="message"
                                                name="message"
                                                placeholder="Review"
                                            />
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <h5>SLIP</h5>
                                            <div  onClick={() => { CLickImgShow2(initialValues?.receipt_img, 'SLIP') }} style={{ cursor: "pointer" }} >
                                                <img style={{ width: "100px", height: "100px" }} src={`https://api.paypandabnk.com/api/cloudinary/${initialValues?.receipt_img}`} />
                                            </div>
                                        </div>
                                        <div className='border-top'>
                                            <button className="btn btn-primary pd-x-20 rounded-2" type="button" onClick={submitForm1} style={{ marginTop: "15px" }}>Update</button>
                                        </div>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>}
                </Modal.Body>
            </Modal>
            <Modal
                show={show2}
                onHide={handleClose2}
                keyboard={false}
                size='lg'
                className='naomedClass'
            // style={{width:"500px" , margin:"auto"}}
            >
                <ModalImgShow handleClose={handleClose2} cantain={cantain} />
            </Modal>
        </>
    );
}

export default PaymentUpdate;
