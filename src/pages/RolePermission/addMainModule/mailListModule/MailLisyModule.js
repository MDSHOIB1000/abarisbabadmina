import { useEffect, useState } from "react"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import ListMainModule from "../listMainModule/ListMainModule"
import { mainModuleList } from "../../../../api/login/Login"


function MainListModule() {
    const [userData, setUserData] = useState()
    const [dmtTtxn, setDmtTtxn] = useState()
    const [dmtExcelTtxn, setDmtExcelTtxn] = useState()
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const token = window.localStorage.getItem('userToken')
    const [loading, setLoadig] = useState(false)
    const submitForm = async (values) => {
        console.log(values);
        setLoadig(true)
        try {
            // const res = await fillterDmtTxnReport(values);
            // setDmtTtxn(res?.data);
            // setLoadig(false)
        } catch (error) {

        }

    }
    const getDmtTxnData = async () => {
        setLoadig(true)
        try {
            const res = await mainModuleList(page, count);
            // console.log(res?.data);
            setDmtTtxn(res?.data);
            setLoadig(false)
        } catch (error) {

        }
    }
    const onChangeVal = (e) => {
        setPage(e - 1)
        getDmtTxnData()
    };
    useEffect(() => {
        getDmtTxnData()
        const fetchUserType = async () => {
            setLoadig(true)
            try {
                // const response = await usersList();
                // setUserData(response?.data);
                // const resExp = await exportExcelDmt_txnList(token);
                // setDmtExcelTtxn(resExp?.data);
                setLoadig(false)
            } catch (error) {
                alert("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={"Main Module List"} />
            <ListMainModule onChangeVal={onChangeVal} dmtTtxn={dmtTtxn} loading={loading} dmtExcelTtxn={dmtExcelTtxn} getDmtTxnData={getDmtTxnData} />
        </>
    )
}
export default MainListModule