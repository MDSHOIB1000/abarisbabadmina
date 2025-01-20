

function AepsReport() {
    return (
        <>
            <div className="PageHeading">
                <h1>Aeps Xpress Report</h1>
            </div>

            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form method="post" name="frmBillReport" id="frmBillReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtFrom">From Date</label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="date" style={{ cursor: 'pointer' }} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="txtTo">To Date</label>
                                    <input className="form-control datefield" id="txtTo" name="txtTo" type="date" style={{ cursor: 'pointer' }} />
                                </div>
                                {/* <div class="form-group col-md-2">
                                  <label for="ddlstatus">Status:</label>
                                  <select id="ddlstatus" name="ddlstatus" class="form-control">
                                      <option value="ALL">ALL</option>
                                      <option value="Success">SUCCESS</option>
                                      <option value="Pending">PENDING</option>
                                      <option value="Failure">FAILURE</option>
                                  </select>
                              </div> */}
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <input type="button" name="btnCommSearch" id="btnCommSearch" defaultValue="Search" className="btn btn-primary" title="Click to search." />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <input type="button" id="btnExport" name="btnExport" defaultValue="Export" className="btn btn-secondary" />
                                </div>
                            </div>
                        </form></div>
                    {/* <form id="frmexport" name="frmexport" action="https://m.masterpay.pro/Retailer/Aeps_fino_report/dataexport" method="POST">
                        <input type="hidden" id="hidfrm" name="from" />
                        <input type="hidden" id="hidto" name="to" />
                        <input type="hidden" id="hidstatus" name="status">
                    </form> */}
                </div>
                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div className="GridUi no-header-footer-grid" id="all_transaction">
                            <div id="tblaeps_fino_report_wrapper" className="dataTables_wrapper no-footer"><div className="d-flex  justify-content-between align-items-center">
                            <div className="dataTables_length" id="myTable_length">
                                <label>Show <select name="myTable_length" aria-controls="myTable" className fdprocessedid="srx8j"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label>
                            </div>
                                <div className="form-group col-md-2">
                                    <label >
                                        Search:
                                    </label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="text" style={{ cursor: 'pointer' }} />
                                </div>
                            </div><div id="tblaeps_fino_report_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div><table id="tblaeps_fino_report" className="table table-striped table-bordered table-hover display fixed_headers dataTable no-footer" style={{ width: 1857 }} role="grid" aria-describedby="tblaeps_fino_report_info">
                                <thead>
                                    <tr role="row"><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '78.4px' }} aria-label="Sr No: activate to sort column ascending">Sr No</th><th className="sorting_desc" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '85.4px' }} aria-sort="descending" aria-label="Txn Id: activate to sort column ascending">Txn Id</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '115.4px' }} aria-label="Txn Date: activate to sort column ascending">Txn Date</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '146.4px' }} aria-label="Cust.Mobile: activate to sort column ascending">Cust.Mobile</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '133.4px' }} aria-label="Aadhar No: activate to sort column ascending">Aadhar No</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '150.4px' }} aria-label="Txn Amount: activate to sort column ascending">Txn Amount</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '143.4px' }} aria-label="Bank Name: activate to sort column ascending">Bank Name</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '177.4px' }} aria-label="Bank Ref(RRN): activate to sort column ascending">Bank Ref(RRN)</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '89.4px' }} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '221.4px' }} aria-label="Response Message: activate to sort column ascending">Response Message</th><th className="sorting" tabIndex={0} aria-controls="tblaeps_fino_report" rowSpan={1} colSpan={1} style={{ width: '102.4px' }} aria-label="Receipt: activate to sort column ascending">Receipt</th></tr>
                                </thead>
                                <tbody>
                                    <tr className="odd"><td valign="top" colSpan={11} className="dataTables_empty">No data available in table</td></tr></tbody>
                            </table>
                                {/* <div className="dataTables_info" id="tblaeps_fino_report_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div><div className="dataTables_paginate paging_simple_numbers" id="tblaeps_fino_report_paginate"><a className="paginate_button previous disabled" aria-controls="tblaeps_fino_report" data-dt-idx={0} tabIndex={0} id="tblaeps_fino_report_previous">Previous</a><span /><a className="paginate_button next disabled" aria-controls="tblaeps_fino_report" data-dt-idx={1} tabIndex={0} id="tblaeps_fino_report_next">Next</a></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default AepsReport