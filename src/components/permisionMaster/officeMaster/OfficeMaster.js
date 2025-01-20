import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { message } from 'antd'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import OfficeMasterForm from './officeMasterForm/OfficeMasterForm'
import OfficeMAsterList from './officeMasterList/OfficeMAsterList'
import { addOfficeMaster, deleteOfficeMaster, getOfficeMaster, getOfficeMasterId, updateOfficeMaster } from '../../../api/login/Login'

function OfficeMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "Office Master",
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
    const getOfficeMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getOfficeMaster(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area


    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} office Successfully.`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} office Master Successfully.`, {
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
                    const res = await addOfficeMaster(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getOfficeMasters(page)
                        blankBtn()
                    }
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateOfficeMaster(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getOfficeMasters(page)
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
                    const response = await getOfficeMasterId(params.id);
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
        getOfficeMaster(e - 1)
        // setPage(e - 1)
    };
    const deleteBlockAdd = async (id) => {
        console.log(id);
        setLoading(true)
        try {
            await deleteOfficeMaster(id)
            getOfficeMasters(page)
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
        navigate(`/admin/office-master`)
    };


    useEffect(() => {
        getOfficeMasters(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <OfficeMasterForm initialValues={initialValues} params={params} submitForm={submitForm} cancelBtn={cancelBtn} />
            <OfficeMAsterList totalCount={totalCount} onChangeVal={onChangeVal} data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} />
        </>
    )
}

export default OfficeMaster
