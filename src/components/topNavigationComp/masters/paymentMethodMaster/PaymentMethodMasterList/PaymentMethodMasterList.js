import { Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import Loadar from "../../../../../common/loader/Loader";
import { getpaymentMethod, paymentMethodDelete } from "../../../../../api/login/Login";

function PaymentMethodMasterList() {
    const [data, setData] = useState(null)
    // console.log(data);
    const [loading, setLoading] = useState(false);
    const getpaymentMetodList = async () => {
        setLoading(true)
        try {
            const data = await getpaymentMethod()
            setData(data?.data)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const deleteCurrency = async (id) => {
        setLoading(true)
        try {
            await paymentMethodDelete(id)
            getpaymentMetodList()
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getpaymentMetodList()
    }, [])


    const confirm = (id) => {
        deleteCurrency(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    return (
        <>
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">PAYMENT METHOD</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/admin/add-payment-method" role="button" aria-controls="offcanvasExample">+ PAYMENT METHOD</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Type</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Create At
                                            </th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item) => {
                                            return <tr role="row" className="odd" key={item?._id}>
                                                <td><span>{item?.type}</span></td>
                                                <td> { new Date(item?.createdAt).getDate() + "-" +Number(new Date(item?.createdAt).getMonth() + 1) + "-" + new Date().getFullYear()}</td>
                                                <td>
                                                    <span className="badge badge-success light border-0">{item?.is_active?.toString()}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to={`/admin/update-payment-method/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete Currency !"
                                                            description="Are you sure to delete ?"
                                                            onConfirm={() => confirm(item?._id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                        </Popconfirm>
                                                    </div>

                                                </td>

                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default PaymentMethodMasterList