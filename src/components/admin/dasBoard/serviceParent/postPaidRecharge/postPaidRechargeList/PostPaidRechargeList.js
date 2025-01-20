
import { useEffect, useState } from "react";
import { bbps_txnElectri } from "../../../../../../api/login/Login";
function PostPaidRechargeList() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        txn_id: '',
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        biller_id: '',
        page: '',
    })

    // console.log(filterInitial);



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        setLoading(true)
        const clone = {
            ...filterInitial, count: count,
            category: '6655db77d0ff3e6928e2c27f', page: input, user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            const res = await bbps_txnElectri(clone)
            // console.log(res);
            // console.log(res);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            allDataWalletReport()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    const ResetData = async () => {
        setLoading(true)
        const obj = {
            count: 10,
            page: 0,
            min_amt: 0,
            max_amt: 0,
            end_date: '',
            start_date: '',
            type: '',
            trans_type: '',
            order_id: '',
            txn_id: '',
            sortType: '',
            sortType: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            // const res = await walletsREports(obj)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            setFilterInitial({
                end_date: new Date().toISOString().substr(0, 10),
                start_date: new Date().toISOString().substr(0, 10),
                type: '',
                trans_type: '',
                order_id: '',
                txn_id: '',
            })
        } catch (error) {

        }
        setLoading(false)
    }


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        if (sortDirection == 'asc') {
            setDecending(1)
        } else {
            setDecending(-1)
        }

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');

        setLoading(true)

        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // // console.log(res?.data?.data?.wallet);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // // getTransitionReport()
        } catch (error) {

        }
        setLoading(false)
    };

    const allDataWalletReport = async () => {
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await allDataWallets(clone)
            // setAllData(res?.data?.data?.wallet);
        } catch (error) {

        }
    }

    const getCurrentDate = () => {
        const clone = { ...filterInitial, start_date: new Date().toISOString().substr(0, 10), end_date: new Date().toISOString().substr(0, 10) }
        setFilterInitial(clone)
    }

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [])
    return (
        <>
            <div className="col-md-7 col-sm-12 mobileTopSpacing ng-scope" ng-controller="dthCtrl">
                <h2 className="SecTitle">Recent Transaction
                    {/* <p className="all-pm-0 float-right"><i className="fa fa-refresh" ng-click="updateDth()" /></p> */}
                </h2>
                <div className="card-body">
                    <form action="" method="post" name="frmReport" id="frmReport">
                        <input type="hidden" id="hidID" name="hidID" />
                        <div className="form-row" style={{ alignItems: 'end' }}>
                            {/* <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Min Amount</label>
                                    <input type="number" name="min_amt" id="account_no" className="form-control" value={filterInitial.min_amt} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Max Amount</label>
                                    <input type="number" name="max_amt" id="account_no" className="form-control" value={filterInitial.max_amt} onChange={handleChange} />
                                </div> */}

                            <div className="form-group col-md-4">
                                <label htmlFor="txtUserId">Start Date</label>
                                <input type="date" name="start_date" id="account_no" className="form-control" value={filterInitial?.start_date} onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="txtUserId">End Date</label>
                                <input type="date" name="end_date" id="account_no" className="form-control" value={filterInitial?.end_date} onChange={handleChange} />
                            </div>

                            {/* <div className="form-group col-md-4">
                                <label htmlFor="txtUserId">Transaction Id</label>
                                <input type="text" name="txn_id" id="account_no" className="form-control" placeholder="Transaction Id" value={filterInitial?.txn_id} onChange={handleChange} />
                            </div> */}
                            <div className="form-group col-md-4">
                                <label htmlFor="txtUserId">Biller Id</label>
                                <input type="text" name="biller_id" id="account_no" className="form-control" placeholder="Transaction Id" value={filterInitial?.biller_id} onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-2">
                                <label>&nbsp;</label>
                                <button type="button" className="btn btn-primary mr-3" onClick={() => getTransitionReport(0)}>
                                    Search

                                </button>
                                {/* <button type="button" className="btn btn-warning">Reset</button> */}
                            </div>

                        </div>
                    </form>
                </div>
                <div className="GridUi no-header-footer-grid">
                    <table className="DataTableGrid display responsive dataTable" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Customer ID</th>
                                <th>Company</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ngRepeat: dthRec in dthRecharges */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default PostPaidRechargeList