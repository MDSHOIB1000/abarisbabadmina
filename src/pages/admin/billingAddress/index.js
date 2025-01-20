
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getBillingAddress, getShippingAddressDelete } from "../../../api/login/Login";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
const toastSuccessMessage = (str) => {
    toast.success(`${str}`, {
        position: "top-center"
    })
};
function BillingAddress() {
    const [data, setData] = useState(null);
    console.log(data);
    const getData = async () => {
        try {
            const res = await getBillingAddress()
            setData(res.data);
        } catch (error) {
            alert("Server Error Failed To load Data");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const deleteAddress = async (id) => {
        try {
            await getShippingAddressDelete(id)
            toastSuccessMessage('Address Delete Successfully')
            getData()
        } catch (error) {
            alert('Address Not Delete')
        }
    }
    const navigate = useNavigate()
    const setIdAddresdEdit = (id) => {
        navigate(`/admin/billing_AddressaForm/${id}`)
    }

    const [checkDef, changeDefoult] = useState(null)

    return (
        <div className="addressInfo mt-3">
            <ToastContainer />
            <div className="card container" style={{ margin: "10px auto" }}>
                <div className="card-header">
                    <h5 className="mb-0 h6">Billing Address</h5>
                </div>
                <div className="card-body">
                    {/* <div className="col-lg-3 mx-auto">
                        <div className="border p-3 rounded mb-3 c-pointer text-center bg-light">
                            <i className="la la-plus la-2x" />
                            <div
                                className="alpha-7"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <Link to='/admin/billing_AddressaForm'>  Add Billing Address</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="row gutters-10">
                        {/* {!data && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>} */}

                        <div className="col-lg-6" >
                            <div className="border p-3 pr-5 rounded mb-3 position-relative">
                                <h6
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "bold",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    className="mt-2"
                                >
                                    Type :Permanent Address
                                    {/* <div className="form-check form-switch d-flex">
                                        {i !== 0 && <FaEdit
                                            onClick={() => {
                                                setIdAddresdEdit(item._id);
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        />}
                                        <MdDelete style={{ marginLeft: "10px", cursor: 'pointer' }} onClick={() => { deleteAddress(item._id) }} />
                                    </div> */}
                                </h6>
                                <div>
                                    <span className="w-50 fw-600">Name:</span>
                                    <span className="ml-2">
                                        {data?.data?.permanent?.firstname} {data?.data?.permanent?.lastname ? data?.data?.permanent?.lastname : ''}
                                    </span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Email:</span>
                                    <span className="ml-2">{data?.data?.permanent?.email}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Phone:</span>
                                    <span className="ml-2">{window.localStorage.getItem('regisNumber')}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Country:</span>
                                    <span className="ml-2">{data?.data?.permanent?.country}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">State:</span>
                                    <span className="ml-2">{data?.data?.permanent?.state}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">City:</span>
                                    <span className="ml-2">{data?.data?.permanent?.city}</span>
                                </div>


                                <div>
                                    <span className="w-50 fw-600">Postal code:</span>
                                    <span className="ml-2">{data?.data?.permanent?.pin_code}</span>
                                </div>

                                <div>
                                    <span className="w-50 fw-600">Province:</span>
                                    <span className="ml-2">{data?.data?.permanent?.province}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Address Line 1:</span>
                                    <span className="ml-2">{data?.data?.permanent?.addressLine1}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Address Line 2:</span>
                                    <span className="ml-2">{data?.data?.permanent?.addressLine2}</span>
                                </div>




                                <div className="dropdown position-absolute right-0 top-0 mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={!checkDef} defaultChecked id="flexCheckDefault1" onChange={() => changeDefoult(null)} />
                                        {/* <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Default checkbox
                                                    </label> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {
                            data?.data?.delivery?.map((item, i) => {
                                return (
                                    <div className="col-lg-6" key={item?._id}>
                                        <div className="border p-3 pr-5 rounded mb-3 position-relative ">
                                            <h6
                                                style={{
                                                    fontSize: "17px",
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}
                                                className="mt-2"
                                            >

                                                Type : {item?.type} Address
                                                <div className="form-check form-switch d-flex ">
                                                    {i == 0 && <FaEdit
                                                        onClick={() => {
                                                            setIdAddresdEdit(item._id);
                                                        }}
                                                        style={{ cursor: 'pointer' }}
                                                    />}
                                                    {/* <MdDelete style={{ marginLeft: "10px", cursor: 'pointer' }} onClick={() => { deleteAddress(item._id) }} /> */}
                                                </div>
                                            </h6>
                                            <div>
                                                <span className="w-50 fw-600">Name:</span>
                                                <span className="ml-2">
                                                    {item?.firstname} {item?.lastname ? item?.lastname : ''}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Email:</span>
                                                <span className="ml-2">{item?.email}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Phone:</span>
                                                <span className="ml-2">{item?.mobile_number}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Country:</span>
                                                <span className="ml-2">{item?.country}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">State:</span>
                                                <span className="ml-2">{item?.state}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">City:</span>
                                                <span className="ml-2">{item?.city}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Postal code:</span>
                                                <span className="ml-2">{item?.pin_code}</span>
                                            </div>


                                            <div>
                                                <span className="w-50 fw-600">Province:</span>
                                                <span className="ml-2">{item?.province}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Address Line 1:</span>
                                                <span className="ml-2">{item?.addressLine1}</span>
                                            </div>
                                            <div>
                                                <span className="w-50 fw-600">Address Line 2:</span>
                                                <span className="ml-2">{item?.addressLine2}</span>
                                            </div>
                                            <div className="dropdown position-absolute right-0 top-0 mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" checked={item._id == checkDef} onChange={() => { changeDefoult(item._id) }} defaultValue id="flexCheckDefault2" />
                                                    {/* <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Default checkbox
                                                    </label> */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default BillingAddress;
