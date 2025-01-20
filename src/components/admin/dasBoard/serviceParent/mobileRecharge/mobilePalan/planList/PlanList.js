function PlanList() {
    return (
        <>

            <div className="card mt-4" style={{ overflow: 'auto' }}>
                <div className="card-body">
                    <div id="myTable_wrapper" className="dataTables_wrapper no-footer">

                        <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                        <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                            <thead>
                                <tr role="row">
                                    <th className="sorting">Amount</th>
                                    {/* <th className="sorting">
                                            Update Date
                                        </th> */}
                                    <th className="sorting">
                                        Desc
                                    </th>
                                    <th className="sorting">
                                        Validity
                                    </th>
                                    <th className="sorting" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>75</td>
                                    <td>JioPhone Pack validity 23 days Total data 2.5 GB (100 MB/Day + 200MB) Data at high speed* 100 MB/Day + 200 MB Voice Unlimited SMS</td>
                                    <td>23 days</td>
                                    <td>
                                        <button type="button" className="btn btn-success">Select</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}
export default PlanList