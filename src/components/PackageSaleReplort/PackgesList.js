import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import PackgesSearch from './PackgesSearch'
import { getDataPacage, getDataPacageSales } from '../../api/login/Login'
import PackesSalesLists from './PackesSalesLists'

function PackgesListSales() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Package",
    title_2: "Package-Sales",
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
      const res = await getDataPacageSales({ page: page, count, user_id: token,package_id:values.package_id });
      setAepsData(res?.data);
    } catch (error) {

    }

  }
  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await getDataPacageSales({ page: num ? num : page, count, user_id: token });
      setAepsData(res?.data);
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
    // const fetchUserType = async () => {
    //   setLoading(true)
    //   try {
    //     const response = await usersList();
    //     setUserData(response?.data);

    //     setLoading(false)
    //   } catch (error) {
    //     alert("Error fetching User type:", error);
    //   }
    // };
    // fetchUserType();
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PackgesSearch initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData}/>
      <PackesSalesLists onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData}/>
    </>
  )
}

export default PackgesListSales
