import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { message } from 'antd'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import DepartMentForm from './departmentMasterform/DepartMentForm'
import DepartmentMasterList from './departmentMasterList/DepartmentMasterList'
import { addDepartmentMaster, deleteDepartmentMaster, getDepartmentMaster, getDepartmentMasterId, updateDepartmentMaster } from '../../../api/login/Login'

function DepartmentMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "Department Master",
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
    const getDepartmentMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getDepartmentMaster(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area


    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Department Successfully.`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Department  Successfully.`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addDepartmentMaster(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getDepartmentMasters(page)
                    }
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateDepartmentMaster(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getDepartmentMasters(page)
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
                    const response = await getDepartmentMasterId(params.id);
                    const currencyData = response?.data;
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
        getDepartmentMaster(e - 1)
        // setPage(e - 1)
    };
    const deleteBlockAdd = async (id) => {
        console.log(id);
        setLoading(true)
        try {
            await deleteDepartmentMaster(id)
            getDepartmentMasters(page)
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
        navigate(`/admin/Departments-master`)
    };


    useEffect(() => {
        getDepartmentMasters(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <DepartMentForm initialValues={initialValues} params={params} submitForm={submitForm} cancelBtn={cancelBtn} />
            <DepartmentMasterList totalCount={totalCount} onChangeVal={onChangeVal} data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} />
        </>
    )
}

export default DepartmentMaster
