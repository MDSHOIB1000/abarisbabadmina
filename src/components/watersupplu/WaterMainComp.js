import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { getDataPacage, getDataPacageSales, getDataReports } from '../../api/login/Login'
import SameCompFilter from './SameCompFilter'
import SameListCOmp from './WaterListReport'
import WaterListReport from './WaterListReport'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'

function WaterComponent({title_1,title_2,title}) {
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
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };
  const [initialValues, setIntialValues] = useState({
    name: "",
    datetime: "",
    amount: count,
    message: page,
    transactionstatus: "",
    start_date: getCurrentDate(),
    end_date: getCurrentDate(),
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
      const res = await getDataReports({ page: num ? num : page, count, user_id: token, param: param.id, biller_id: null, start_date: null, end_date: null });
      console.log(res);
      setAepsData(res)
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
    getDmtTxnData()
  }, [])
  return (
    <>
    {loading && <Loadar />}
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SameCompFilter title={title} initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData}/>
      <WaterListReport title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData}/>
    </>
  )
}

export default WaterComponent
