import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import DmtReportSearchFill from './dmtReportSearchFill/DmtReportSearchFill'
import DmtReportSearchList from './dmtReportSearchList/DmtReportSearchList'
import { exportExcelDmt_txnList, fillterDmtTxnReport, usersList } from '../../../api/login/Login'

function DmtReportSearch() {
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
      const res = await fillterDmtTxnReport(values);
      setDmtTtxn(res?.data);
      setLoadig(false)
    } catch (error) {

    }

  }
  const getDmtTxnData = async () => {
    setLoadig(true)
    try {
      const res = await fillterDmtTxnReport({ page, count, token });
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
        const response = await usersList();
        setUserData(response?.data);
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
      <Breadcrumbs breadCrumbsTitle={"DMT Transaction Search"} />
      <DmtReportSearchFill submitForm={submitForm} userData={userData} page={page} count={count} token={token} loading={loading} />
      <DmtReportSearchList onChangeVal={onChangeVal} dmtTtxn={dmtTtxn} loading={loading} dmtExcelTtxn={dmtExcelTtxn} />
    </>
  )
}

export default DmtReportSearch