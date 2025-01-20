

function OpenDisput() {
    return (
        <>
            <div className="PageHeading">
                <h1>Pending Tickets</h1>
            </div>
            <div className="ContentArea">
                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">

                        <div className="GridUi no-header-footer-grid mt-3" id="all_transaction">
                            <div id="rechargehistorytbl_wrapper" className="dataTables_wrapper">

                                <table id="rechargehistorytbl" className="table table-striped table-bordered table-hover display fixed_headers dataTable" style={{ width: 1250 }} role="grid" aria-describedby="rechargehistorytbl_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Sr No: activate to sort column descending">
                                                Ticket ID
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Recharge ID: activate to sort column ascending">
                                                Sending Date
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Txn Id: activate to sort column ascending">
                                                Subject
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Recharge  DateTime: activate to sort column ascending">
                                                User
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Company Name: activate to sort column ascending">
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Mobile No: activate to sort column ascending">
                                                Last reply
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="rechargehistorytbl" rowSpan={1} colSpan={1} aria-label="Amount: activate to sort column ascending">
                                                Options

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd"><td valign="top" colSpan={10} className="dataTables_empty">No data available in table</td></tr></tbody>
                                    {/* <tfoot>
                                    <tr><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1}>Total :</th><th rowSpan={1} colSpan={1}>0</th><th rowSpan={1} colSpan={1}>0</th><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1} /></tr>
                                </tfoot> */}
                                </table>
                                {/* <div className="dataTables_info" id="rechargehistorytbl_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div><div className="dataTables_paginate paging_simple_numbers" id="rechargehistorytbl_paginate"><a className="paginate_button previous disabled" aria-controls="rechargehistorytbl" data-dt-idx={0} tabIndex={0} id="rechargehistorytbl_previous">Previous</a><span /><a className="paginate_button next disabled" aria-controls="rechargehistorytbl" data-dt-idx={1} tabIndex={0} id="rechargehistorytbl_next">Next</a></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OpenDisput