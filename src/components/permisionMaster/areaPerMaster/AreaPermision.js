import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { message } from 'antd';
import AreaPermisionForm from './areaPermisionForm/AreaPermisionForm'
import AreaPermisionList from './areaPermisionList/AreaPermisionList'
import { addAreaMaster, deleteAreaMaster, getAreaMaster, getAreaMasterId, updateAreaMaster } from '../../../api/login/Login';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function AreaPermision() {
  const breadCrumbsTitle = {
    id: "1",
    title_2: "Area Master",
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
  const getAreaMasters = async (page) => {
    setLoading(true)
    try {
      const res = await getAreaMaster(page, count)
      setTotalCount(res?.data?.count)
      setData(res)
    } catch (error) {

    }
    setLoading(false)
  }
  // add Area


  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} Area Successfully.`, {
      position: "top-right",
    });
  };
  const toastErrorMessage = () => {
    toast.error(`${params?.id ? "Update" : "Add"} Block Master Successfully.`, {
      position: "top-right",
    });
  };
  const blankBtn = () => {
    setInitialValues({ name: "", isActive: "" });
};

  const submitForm = async (values) => {
    try {
      if (!params?.id) {
        try {
          const res = await addAreaMaster(values);
          if (res?.statusCode == "200") {
            toastSuccessMessage();
            getAreaMasters(page)
            blankBtn()
          }
        } catch (error) {
          alert(error.message)
        }

      } else {
        try {
          const res = await updateAreaMaster(params.id, values);
          if (res?.statusCode == "200") {
            toastSuccessMessage();
            getAreaMasters(page)
            blankBtn()
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
          const response = await getAreaMasterId(params.id);
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
    getAreaMaster(e - 1)
    // setPage(e - 1)
  };
  const deleteBlockAdd = async (id) => {
    console.log(id);
    setLoading(true)
    try {
      await deleteAreaMaster(id)
      getAreaMasters(page)
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
  const cancelBtn = () => {
    setInitialValues({ name: "", isActive: "" });
    message.error('Cancel Successful!');
    navigate(`/admin/area-master`)
  };

  useEffect(() => {
    getAreaMasters(page)
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AreaPermisionForm initialValues={initialValues} params={params} submitForm={submitForm} cancelBtn={cancelBtn} />
      <AreaPermisionList data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} />
    </>
  )
}

export default AreaPermision
