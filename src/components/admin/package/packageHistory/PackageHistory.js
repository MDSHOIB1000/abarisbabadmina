import { Pagination } from "antd"
import { useEffect, useState } from "react"

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from "react-router-dom";
import Loader from "../../../../common/loader/Loader";
import { packageHistory } from "../../../../api/login/Login";

function PackageHistory() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)

    const [idDispute, setIdDispute] = useState()

    // MOdal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // MOdal


    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',

        end_date: '',
        start_date: '',
        sortKey: '',
        sortType: '',
        package_id: ''
    })

    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        console.log('fgdf');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await packageHistory(clone)
            setTotalCount(res?.data?.totalCount)
            setData(res?.data?.data)
            allDataDmtData()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const ResetData = async () => {
        setLoading(true)
        const obj = {
            count: 10,
            page: 0,
            end_date: '',
            start_date: '',
            sortKey: '',
            sortType: '',

            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            // const res = await dmtTransiList(obj)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.trans)
            // setFilterInitial({
            //     end_date: new Date().toISOString().substr(0, 10),
            //     start_date: new Date().toISOString().substr(0, 10),
            //     search: ''
            // })
        } catch (error) {

        }
        setLoading(false)
    }

    const [taxnum, settaxnum] = useState(null)
    const [taxnumId, settaxnumId] = useState(null)
    const EnquiryTransition = async (id) => {
        setIdDispute(id.id)
        settaxnumId(id._id)
        settaxnum(id.txn_id)
        handleShow(true)
        // try {
        //     const res = await paymentEnquiry(id)
        //     if (res?.data?.statusCode == 200) {
        //         toastSuccessMessage(res?.data?.message);
        //     }
        // } catch (error) {

        // }
    }


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        // const sorted = [...data].sort((a, b) => {
        //     if (sortDirection === 'asc') {
        //         return a[key] > b[key] ? 1 : -1;
        //     } else {
        //         return a[key] < b[key] ? 1 : -1;
        //     }
        // });
        // console.log(sorted);
        // setData(sorted);

        // const clone = { ...filterInitial, sortType: assending, sortKey: key }

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
            // const res = await dmtTransiList(clone)
            // console.log(res?.data?.data?.trans);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.trans)
            // getTransitionReport()
        } catch (error) {

        }
        setLoading(false)
    };

    const allDataDmtData = async () => {
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await allDataDmt(clone)
            // setAllData(res?.data?.data?.trans);
        } catch (error) {

        }
    }

    const [currentDate, setCurrentDate] = useState('');
    // console.log(currentDate);

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setCurrentDate(formattedDate);
        const clone = { ...filterInitial, start_date: formattedDate, end_date: formattedDate }
        setFilterInitial(clone)
    }

    useEffect(() => {
        getCurrentDate()
    }, [])






    useEffect(() => {
        getTransitionReport(0)
        allDataDmtData()
    }, [])



    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>Package History</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
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
                                    <input type="date" name="start_date" id="account_no" className="form-control" max={currentDate} defaultValue={currentDate} value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">End Date</label>
                                    <input type="date" name="end_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Package ID</label>
                                    <input type="text" placeholder="Package ID" name="package_id" id="account_no" className="form-control" value={filterInitial.package_id} onChange={handleChange} />
                                </div>

                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>

                                    <button type="button" className="btn btn-primary mr-3" onClick={() => getTransitionReport(0)}>Search</button>
                                    <button type="button" className="btn btn-warning" onClick={ResetData}>Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            <div className="d-flex  justify-content-between align-items-center">
                                <div className="dataTables_length mb-3" id="myTable_length">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success cusxel"
                                        table="table-to-xlsx"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Download Excel sheet" />
                                </div>
                                {/* <div className="form-group col-md-2">
                                    <label >
                                        Search:
                                    </label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="text" style={{ cursor: 'pointer' }} />
                                </div> */}
                            </div>
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting" onClick={() => sortByColumn('createdAt')}>Date / Time</th>
                                        <th className="sorting">
                                            Duration
                                        </th>

                                        <th className="sorting" onClick={() => sortByColumn('txn_id')}>
                                            Duration Type
                                        </th>
                                        <th className="sorting" >Package Name</th>
                                        <th className="sorting" >User Name</th>
                                        <th className="sorting" >
                                            MRP
                                        </th>
                                        <th className="sorting" >
                                            Amount
                                        </th>
                                        <th className="sorting" >Tax</th>
                                        <th className="sorting" >Tax Type</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item) => {
                                        // console.log(item);
                                        return <tr className="odd" key={item?._id}>
                                            <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "-" + Number(new Date(item?.createdAt).getMonth() + 1) + "-" + new Date(item?.createdAt).getFullYear() + " / " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td>

                                            <td valign="top" className="dataTables_empty">{item?.duration}</td>
                                            <td valign="top" className="dataTables_empty">{item?.duration_type}</td>
                                            <td valign="top" className="dataTables_empty">{item?.package_name}</td>
                                            <td valign="top" className="dataTables_empty">{item?.user_name}</td>
                                            <td valign="top" className="dataTables_empty">{item?.mrp}</td>

                                            <td valign="top" className="dataTables_empty">{item?.amount}</td>
                                            <td valign="top" className="dataTables_empty">{item?.tax}</td>
                                            <td valign="top" className="dataTables_empty">{item?.tax_type}</td>

                                            {/* <td valign="top" className="dataTables_empty">{item?.is_refunded == true ? 'Yes' : 'No'}</td> */}

                                        </tr>
                                    })}

                                </tbody>
                            </table>

                        </div>
                        {/* </div> */}
                    </div>
                </div>

                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {totalCount}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                            // showSizeChanger
                            // onShowSizeChange={page}
                            // showQuickJumper

                            // defaultCurrent={1}
                            onChange={onChangeVal}
                            total={totalCount}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PackageHistory