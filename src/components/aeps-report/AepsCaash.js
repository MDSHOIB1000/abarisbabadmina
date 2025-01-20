import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { getDataPacage } from '../../api/login/Login'
import AepsSearch from './AepsSearch'
import AepsLists from './AepsLists'

function AepsCaash() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "AEPS Cash Report",
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
    try {
      const res = await getDataPacage({ page:page, count, user_id: token,start_date:"" ,end_date:"" ,name:values.subject});
      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
    setLoading(false)
  }
  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await getDataPacage({ page: num ? num : page, count, user_id: token,start_date:"" ,end_date:"" ,name:""});
      // setAepsData(res);
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

  const resetData = () => {
    setIntialValues({
      name: "",
      datetime: "",
      amount: count,
      message: page,
      transactionstatus: "",
      disputestatus: "",
      customer_mobile: "",
      subject: "",
    })
    setTimeout(() => {
      getDmtTxnData(0)
    }, 1000);
  }


  useEffect(() => {
    getDmtTxnData(0)
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AepsSearch initialValues={initialValues} userData={userData} submitForm={submitForm} resetData={resetData}/>
      <AepsLists onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData}/>
    </>
  )
}

export default AepsCaash
