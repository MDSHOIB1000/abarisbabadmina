import React, { useEffect, useState } from 'react'
import ExportPdf from '../../../../common/exportPdf/ExportPdf'
import { Pagination } from 'antd';
import Loadar from '../../../../common/loader/Loader';
import { CSVLink } from 'react-csv';
import { CiSaveDown1 } from 'react-icons/ci';
import { Button } from 'react-bootstrap';

function DmtReportSearchList({ onChangeVal, dmtTtxn, loading, dmtExcelTtxn }) {

    const curdmtTtxn = dmtTtxn?.dmtTransaction
    const curdmtexcelTtxn = dmtExcelTtxn?.dmtTransaction
    const [total, setTotal] = useState(0)
   

    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b> DMT Transaction Reports </b></h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="/admin/add-summary-report" role="button" aria-controls="offcanvasExample">+  ADD SUMMARY REPORTS </Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                        <ExportPdf />
                                        {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                        </CSVLink>) : ""}

                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                   <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>

                                            <tr role="row">
                                                {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}
                                                  <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                  Transaction Date
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    User Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Txn Id	</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                UTR No	</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    User Mobile
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Account No</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Bank Name </th>
                                           
                                               
                                               

                                             
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Opening Balance  </th>
                                               
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Amount  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Charge  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Commission  </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                TDS   </th>
                                                     <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Closing Balance</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Key Status  </th>


                                            </tr>
                                        </thead>
                                        {loading && <Loadar />}
                                        <tbody>
                                            {curdmtTtxn?.map((item, i) => {
                                                return <tr role="row" className="odd" key={i}>
                                                    <td> {item?.createdAt}</td>
                                                    {/* <td> {new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date().getFullYear()}</td> */}
                                                    <td> {item?.username}</td>
                                                    <td> {item?.txn_id}</td>
                                                    <td> {item?.utr}</td>
                                                    <td> {item?.customer_mobile}</td>
                                                    <td> {item?.account_number}</td>
                                                    <td> {item?.bank_name}</td>
                                                
                                                   
                                                    <td> {item?.o_bal}</td>
                                                    <td> {item?.amount}</td>
                                                    <td> {item?.charge}</td>
                                                    <td> {item?.commission}</td>
                                                    <td> 
                                                    {/* {item?.amount} */}--
                                                    </td>
                                                    <td> {item?.c_bal}</td>
                                                    <td>

                                                        {item?.tx_status == 0 &&  <Button variant="success">Success</Button>}
                                                        {item?.tx_status == 1 &&  <Button variant="danger">Failed </Button>}
                                                        {item?.tx_status == 2 &&  <Button variant="secondary">Initiated</Button>}
                                                        {item?.tx_status == 3 && <Button variant="warning">Pending</Button>}
                                                        {item?.tx_status == 4 && <Button variant="info">Refunded</Button>} 
                                                        {item?.tx_status == 5 &&    <Button variant="primary">Hold</Button>}

                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {dmtTtxn?.total} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            // showSizeChanger
                                            // onShowSizeChange={''}

                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                            total={dmtTtxn?.total}
                                        />
                                    </div>
                                </div>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                       <h4> Total Amount : {dmtTtxn?.totalAmount} </h4>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section>
    )
}

export default DmtReportSearchList