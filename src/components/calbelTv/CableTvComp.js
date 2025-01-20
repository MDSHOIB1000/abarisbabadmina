import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { getDataPacage, getDataPacageSales, getDataReports } from '../../api/login/Login'
import SameCompFilter from './SameCompFilter'
import BrodBandReport from './CableTvReport'
import CableTvReport from './CableTvReport'
import { useParams } from 'react-router-dom'
function CableTvComp({title_1,title_2,title}) {
  const breadCrumbsTitle = {
    id: "1",
    title_1: title_1,
    title_2:  title_2,
  }
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [aepsData, setAepsData] = useState()
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(false)
  const token = window.localStorage.getItem('userToken')
  const [initialValues, setIntialValues] = useState({
    name: "",
    datetime: "",
    amount: count,
    message: page,
    transactionstatus: "",
    disputestatus: "",
    customer_mobile: "",
  })

  const submitForm = async (values) => {
    setLoading(true)
    console.log(values);
    try {
      // const res = await DisputeFilter(values);
      // setAepsData(res?.data);
      // setLoading(false)
    } catch (error) {

    }

  }
  const param = useParams()
  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await getDataReports({ page: num, count, user_id: token, param: param.id, biller_id: null, start_date: null, end_date: null });
      console.log(res);
      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
  }


  const onChangeVal = (e) => {
    setPage(e - 1)
    setTimeout(() => {
      getDmtTxnData(e - 1)
    }, 1000);
  };


  useEffect(() => {
    getDmtTxnData(0)
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SameCompFilter title={title} initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData}/>
      <CableTvReport title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData}/>
    </>
  )
}

export default CableTvComp
