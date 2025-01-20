import React, { useState } from 'react'
// import ExportPdf from '../../../../common/exportPdf/ExportPdf'
import { Pagination } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import ExportPdf from '../../common/exportPdf/ExportPdf';
import { PackegDelete } from '../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';

function AepsLists({ onChangeVal, aepsData, getDmtTxnData }) {
    const navigate = useNavigate()
    // const ChangeRouts = (id) => {
    //     navigate(`/admin/add-package/${id}`)
    // }


    const toastSuccessMessage = () => {
        toast.success(` Package Delete Successfully.`, {
            position: "top-center",
        });
    };


    const toastErrMessage = (msg) => {
        toast.error(`Package Not Delete ${msg}.`, {
            position: "top-center",
        });
    };
    const deletePackege = async (id) => {
        try {
            const res = await PackegDelete(id)
            if (res.statusCode == 200) {
                toastSuccessMessage();
                getDmtTxnData()

            } else {
                toastErrMessage(res.message);
            }
        } catch (error) {

        }
    }
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>AEPS Cash List</b></h4>
                                        <div className='d-flex'>
                                            <ExportPdf />
                                            {/* <div>
                                                <Link to="/admin/add-package" class="btn btn-primary">Add AEPS Cash</Link>
                                            </div> */}
                                        </div>

                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                       <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Sr. No
                                                    </th>
                                                 
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Customer Name	</th>


                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Number		</th>
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Adhar Number			</th>
                                                    {/* <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Reason				</th> */}
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Icon image				</th>
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Status				</th>
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action				</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {aepsData?.data?.map((item, i) => {

                                                    return <tr role="row" className="odd" style={{ cursor: "pointer" }}>
                                                        <td>{i + 1}</td>
                                                        {/* <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                                        <td>{item?.package_name}</td>
                                                        <td>{item?.services?.map((item) => <div>{item} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.mrp} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.sale_rate} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.tax} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.tax_type} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.duration} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.duration_type} ,</div>)}</td>
                                                        <td><img style={{ width: "100px" }} src={`https://api.paypandabnk.com/api/cloudinary/${item?.icon_img}`} /></td>
                                                        <td>{item?.isActive ? 'Active' : 'In Active'}</td>

                                                        <td className='text-center'>
                                                            <Link className='btn btn-warning color2' to={`/admin/add-package/${item._id}`}>Edit</Link>
                                                            <button type="button" className="btn btn-danger" onClick={() => deletePackege(item._id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>

                                        {/* <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {aepsData?.totalCount} entries
                                        </div> */}
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                /* showSizeChanger
                                                onShowSizeChange={''} */

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={aepsData?.totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}

export default AepsLists
