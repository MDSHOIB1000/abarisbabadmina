import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import BlockPermissionForm from './blockpermissionForm/BlockPermissionForm'
import BlockPermisionList from './blockPList/BlockPermisionList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import { toast } from 'react-toastify';
import { message } from 'antd';
import { addBlockMaster, deleteBlockMaster, getBlockMaster, getBlockMasterId, updateBlockMaster } from '../../../api/login/Login';

function BlockMaster() {
  const breadCrumbsTitle = {
    id: "1",
    title_2: "Block Master",
  }

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState()
  const [initialValues, setInitialValues] = useState({
    name: "",
    isActive: false,
  });
  const params = useParams();
  const navigate = useNavigate()

  // ----------list Api----------
  const getBlockMasters = async (page) => {
    setLoading(true)
    try {
      const res = await getBlockMaster(page, count)
      setTotalCount(res?.data?.count)
      setData(res)
    } catch (error) {

    }
    setLoading(false)
  }
  // add Block


  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} Block Master Successfully.`, {
      position: "top-right",
    });
  };
  const toastErrorMessage = () => {
    toast.error(`${params?.id ? "Update" : "Add"} Block Master Successfully.`, {
      position: "top-right",
    });
  };

  const submitForm = async (values) => {
    try {
      if (!params?.id) {
        try {
          const res = await addBlockMaster(values);
          if (res?.statusCode == "200") {
            toastSuccessMessage();
          }
        } catch (error) {

        }

      } else {
        try {
          const res = await updateBlockMaster(params.id, values);
          if (res?.statusCode == "200") {
            toastSuccessMessage();
            getBlockMasters(page)
          }
        } catch (error) {

        }

      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        if (params?.id) {
          const response = await getBlockMasterId (params.id);
          const currencyData = response.data;
          setInitialValues(currencyData);
        } else {
          setInitialValues({
            name: "",
            isActive: true
          });
        }
      } catch (error) {
        console.error("Error fetching currency:", error);
      }
    };

    fetchCurrency();
  }, [params?.id]);


  const onChangeVal = (e) => {
    getBlockMaster(e - 1)
    // setPage(e - 1)
  };
  const deleteBlockAdd = async (id) => {
    console.log(id);
    setLoading(true)
    try {
      await deleteBlockMaster(id)
      getBlockMasters(page)
    } catch (error) {
      toastSuccessMessage(error.message)
    }
    setLoading(false)
  }

  const confirm = (id) => {
    console.log(id);
    deleteBlockAdd(id)
    message.success('Delete Successfull!');

  };
  const cancel = (e) => {
    // console.log(e);
    message.error('Cancle Successfull!');
  };

  useEffect(() => {
    getBlockMasters(page)
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BlockPermissionForm initialValues={initialValues} params={params} submitForm={submitForm}  />
      <BlockPermisionList data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} />
    </>
  )
}

export default BlockMaster
