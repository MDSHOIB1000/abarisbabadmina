import React, { useState } from 'react'
import { Pagination } from 'antd';
import ExportPdf from '../../common/exportPdf/ExportPdf';
import { ToastContainer, toast } from 'react-toastify';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function InsurenceListReport({ onChangeVal, aepsData, title }) {
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
                                        <h4 className="heading mb-0"><b>{title} List</b></h4>
                                        <div className='d-flex'>
                                            <ExportPdf />
                                            <ReactHTMLTableToExcel
                                                id="test-table-xls-button"
                                                className="download-table-xls-button cadetblueS"  
                                                table="table-to-xls"
                                                filename="test"
                                                sheet="tablexls"
                                                buttonText="Download as XLS"
                                            />
                                        </div>

                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Sr. No
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Date / Time 					</th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Member code
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Transaction ID
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Ref ID
                                                    </th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Name 				</th>


                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Customer name 				</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        CA Number				</th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Operator name
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Operator ID
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Amount  					</th>

                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Status
                                                    </th>
                                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Action
                                                    </th> */}
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Dispute
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {aepsData?.data?.map((item, i) => {
                                                    return <tr role="row" className="odd" >
                                                        <td>{i + 1}</td>
                                                        {/* <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                                        <td>{item?.createdAt}</td>
                                                        <td>{item?.refer_id}</td>
                                                        <td>{item?.txn_id}</td>
                                                        <td>{item?.refId}</td>
                                                        <td>{item?.name}</td>
                                                        <td>{item?.package_name}</td>
                                                        <td>{item?.tax_type}</td>
                                                        <td>{item?.operator_name}</td>

                                                        <td>{item?.biller_id}</td>
                                                        <td>{item?.amount}</td>
                                                        <td>
                                                            {item?.status == 1 && 'Success'}
                                                            {item?.status == 2 && 'Pending'}
                                                            {item?.status == 3 && 'Failed'}
                                                        </td>
                                                        <td>{'--'}</td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                       
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {aepsData?.totalCount} entries
                                        </div>
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
                                    <h3>Total Amount : {aepsData?.totalAmount}</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}

export default InsurenceListReport
