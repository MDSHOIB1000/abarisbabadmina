import { useEffect, useState } from "react"
import { WalletsShow, addPaymentRequest, bankListApi, bankPublic, cloudImage, trasferTo } from "../../../../api/login/Login"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function AddPaymentRequest() {
    const [loader1, setloader1] = useState(false)
    const [profileImage, setProfileImage] = useState()
    const [imageShow, setImageShow] = useState()
    const navigate = useNavigate()
    // console.log(profileImage);
    const [bankData, setBankData] = useState(null)
    // console.log(bankData);

    const [dataTrans, setDataTrans] = useState(null)

    const [retailer, setRetailer] = useState(false)
    // 65e2f15785bfd78f9866c090
    const [distributer, setDistributer] = useState(false)
    // 65e2f1a585bfd78f9866c09b
    const [superDistributer, setsuperDistributer] = useState(false)
    // 65f3fb87a6a2a92f979b47eb

    const [adminSelect, setAdminSelect] = useState(false)
    // console.log(adminSelect);
    const [distributerSelect, setDistributerSelect] = useState(false)
    const [superDistributerSelect, setsuperDistributerSelect] = useState(false)


    const [initialData, setInitialData] = useState({
        user_id: '',
        paymentDate: '',
        bankRef: '',
        amount: '',
        bank: '',
        method: '',
        account_number: '',
        receipt_img: '',
        remark: '',
        transferTo: ''
        // image: '',
        // remark: ''
    })

    console.log(initialData);

    const { paymentDate, bankRef, amount, bank, method } = initialData

    const handleChange = (e) => {
        const clone = { ...initialData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        // bankAcountFind(value)

        if (name == 'bank') {
            const findBankAccount = bankData.find((item) => {
                return item?.bank_name == value
            })
            let abc = findBankAccount?.bank_account_number
            console.log(findBankAccount, abc);
            const clone2 = { ...clone, account_number: abc }
            // console.log({ ...initialData, account_number: abc });
            setInitialData(clone2)
            return
        }
        setInitialData(clone)

    }

    const getCurrentDate = () => {
        const clone = { ...initialData, paymentDate: new Date().toISOString().substr(0, 10) }
        setInitialData(clone)
    }



    const [userSelect, setUserselect] = useState({
        transferTo: ''
    })
    // console.log(userSelect.transferTo);

    const userSelectChange = (e) => {
        const clone = { ...userSelect }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setUserselect(clone)

        if (e.target.value == 'Admin') {
            setAdminSelect(true)
            setDistributerSelect(false)
            setsuperDistributerSelect(false)
        }
        if (e.target.value == 'distri') {
            setDistributerSelect(true)
            setAdminSelect(false)
            setsuperDistributerSelect(false)
        }
        if (e.target.value == 'Super_dis') {
            setsuperDistributerSelect(true)
            setDistributerSelect(false)
            setAdminSelect(false)
        }
    }

    const dataTarasferTo = async () => {
        try {
            const res = await trasferTo()
            setDataTrans(res?.data?.data);
        } catch (error) {

        }
    }



    const imgs = new FormData();
    const colodinaryImage = async (e) => {
        // setProfileImage(e.target.files[0])
        // imgs.append("image", e.target.files[0]);
        // try {
        //     const res = await cloudImage(imgs)
        //     setTimeout(() => {
        //         setImageShow(res?.data?.data?.url);
        //     }, 1000)

        //     setProfileImage(res?.data?.data?.url)
        // } catch (error) {

        // }

        setProfileImage(e.target.files[0])
        imgs.append("image", e.target.files[0]);
        const file = profileImage
        // console.log(file);
        // const allowedExtensions = ['.jpg', '.jpeg', 'image/png', '.gif']; // Allowed image file extensions
        // const disallowedExtensions = ['.doc', '.docx', '.xls', '.xlsx', '.pdf', '.rar', '.zip']; // Disallowed file extensions
        // const fileExtension = getFileExtension(file.name);

        const allowedTypes = [
            'video/mp4',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/pdf',
            'application/x-rar-compressed',
            'application/x-zip-compressed',
            'application/zip'
        ];
        if (e.target.files[0] && allowedTypes.includes(e.target.files[0].type)) {
            alert('Warning: Only image files are allowed.');
        } else {
            // Proceed with file upload
            setProfileImage(e.target.files[0])
            try {

                const res = await cloudImage(imgs)
                setTimeout(() => {
                    setImageShow(res?.data?.data?.url);
                }, 1000)

                setProfileImage(res?.data?.data?.url)
            } catch (error) {

            }
        }

        // if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
        //     if (disallowedExtensions.includes(fileExtension.toLowerCase())) {
        //         alert('Warning: Only image files are allowed.');
        //     } else {
        //         alert('Unsupported file format. Only image files are allowed.');
        //     }
        //     // Clear the file input
        //     e.target.value = null;
        // } else {
        //     // Proceed with file upload
        //     setProfileImage(e.target.files[0])
        //     try {

        //         const res = await cloudImage(imgs)
        //     } catch (error) {

        //     }
        // }


    }

    const getFileExtension = (filename) => {
        console.log(filename);
        return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
    };


    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const bankListName = async () => {
        try {
            const res = await bankPublic()
            // console.log(res);
            setBankData(res?.data?.data);
        } catch (error) {

        }
    }



    const bankAcountFind = (name) => {

    }


    const checkUser = async () => {
        try {
            const res = await WalletsShow()
            // console.log(res.data.data.user_type_id);
            if (res.data.data.user_type_id == '65e2f15785bfd78f9866c090') {
                setRetailer(true)
            }
            if (res.data.data.user_type_id == '65e2f1a585bfd78f9866c09b') {
                setDistributer(true)
            }
            if (res.data.data.user_type_id == '65f3fb87a6a2a92f979b47eb') {
                setsuperDistributer(true)
            }
        } catch (error) {

        }
    }




    const submitData = async () => {
        setloader1(true)
        const clone = { ...initialData, receipt_img: profileImage, transferTo: userSelect.transferTo, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await addPaymentRequest(clone)
            if (res?.data?.statusCode == '200') {
                toastSuccessMessage(res?.data?.message)
                setTimeout(() => {
                    if (adminSelect) {
                        navigate('/payment-request-to-company')

                    } else {
                        navigate('/payment-request-to-distributor')
                    }
                }, 1000)
            }

            // if (clone.transferTo == 'admin') {
            //     navigate('/payment-request-to-company')
            // }
            setloader1(false)
        } catch (error) {
            setloader1(false)
        }
    }

    useEffect(() => {
        bankListName()
        checkUser()
        dataTarasferTo()
        getCurrentDate()
    }, [])

    const [maxLength, setMaxLength] = useState(125)

    return (
        <>
            <div className="PageHeading"><h1>ADD Payment Request</h1></div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>ADD Payment Request</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-3">
                                    <label htmlFor="ddldb">Select Trasfer To</label>
                                    <select className="form-select" aria-label="Default select example" name="transferTo" onChange={userSelectChange}>
                                        <option selected>Select Trasfer</option>
                                        {dataTrans && dataTrans?.map((item) => {
                                            return <option value={item?.value}>{item?.title}</option>
                                        })}
                                        {/* {
                                            retailer ? <>
                                                <option value={"admin"}>Admin</option>
                                                <option value={"distributor"}>Distributor</option>
                                                <option value={"super_distributor"}>Super Distributor</option>
                                            </> : ''
                                        }
                                        {
                                            distributer ? <>
                                                <option value={"admin"}>Admin</option>
                                                <option value={"super_distributor"}>Super Distributor</option>
                                            </> : ''
                                        }
                                        {
                                            superDistributer ? <>
                                                <option value={"admin"}>Admin</option>
                                            </> : ''
                                        } */}
                                    </select>
                                </div>

                                {adminSelect ? <>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Payment Date : <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtFrom" type="date" placeholder="Enter Amount" name="paymentDate" value={initialData.paymentDate} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="ddldb">Select Method : <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-select" aria-label="Default select example" name="method" onChange={handleChange}>
                                            <option selected>Select Method</option>
                                            <option value={"neft"}>NEFT</option>
                                            <option value={"rtgs"}>RTGS</option>
                                            <option value={"imps"}>IMPS</option>
                                            <option value={"qrpayment"}>QR Payment</option>
                                            <option value={"upipayment"}>UPI Payment</option>
                                            <option value={"cashdeposit"}>Cash Deposit</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Bank Name : <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-select" aria-label="Default select example" name="bank" onChange={handleChange}>
                                            <option selected>Select Bank</option>
                                            {bankData && bankData.map((item) => {
                                                return <option value={item?.bank_name}>{item?.bank_name}</option>
                                            })}
                                            {/* <option value={"neft"}>NEFT</option>
                                        <option value={"rtgs"}>RTGS</option> */}
                                        </select>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Account Number : <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtFrom" type="number" placeholder="Enter Account Number" name="account_number" value={initialData?.account_number} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Amount : <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtFrom" type="number" placeholder="Enter Amount" name="amount" value={initialData.amount} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Bank
                                            Reference No : <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtFrom" type="text" placeholder="Enter Bank Ref No" name="bankRef" value={initialData.bankRef} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Image : <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtFrom" name="receipt_img" type="file" onChange={colodinaryImage} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Remark : <span style={{ color: 'red' }}>*</span></label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" maxLength={maxLength} rows="1" placeholder="Message" name="remark" value={initialData.remark} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="form-group col-md-3">
                                        {imageShow && <img src={`https://api.paypandabnk.com/api/cloudinary/${imageShow}`} style={{ height: '50px', width: '100px' }} alt="image" />}
                                    </div>

                                </> : ""}

                                {distributerSelect ? <>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Amount :</label>
                                        <input className="form-control datefield" id="txtFrom" type="number" placeholder="Enter Amount" name="amount" value={initialData.amount} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Remark :</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Message" name="remark" value={initialData.remark} onChange={handleChange}></textarea>
                                    </div>
                                </> : ''}

                                {superDistributerSelect ? <>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Amount :</label>
                                        <input className="form-control datefield" id="txtFrom" type="number" placeholder="Enter Amount" name="amount" value={initialData.amount} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="txtUserId">Remark :</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Message" name="remark" value={initialData.remark} onChange={handleChange}></textarea>
                                    </div>
                                </> : ''}



                                <div className="form-group col-md-12 text-align-center">
                                    <label>&nbsp;</label>
                                    <button type="button" disabled={adminSelect == true ? !initialData.remark || !initialData.paymentDate || !initialData.method || !initialData.bank || !initialData.account_number || !initialData.amount || !initialData.bankRef || !imageShow : '' || distributerSelect == true ? !initialData.remark || !initialData.amount : '' || superDistributerSelect == true ? !initialData.remark || !initialData.amount : ''} className="btn btn-primary" onClick={submitData}>
                                        Submit
                                        {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        }
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddPaymentRequest