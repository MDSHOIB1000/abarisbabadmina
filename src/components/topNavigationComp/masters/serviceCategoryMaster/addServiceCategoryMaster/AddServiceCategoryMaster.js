import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ServiceCategoryUpdate, getServiceCategoryId, languageList, serviceCategoryAdd } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Service Category Master",
    title_3: "Add Service Category Master",
};

function AddServiceCategoryMaster() {
    const [language, setLanguage] = useState(null);
    const [tab, setTab] = useState();
    const [selectData, setSelectData] = useState([]);
    const params = useParams()
    const navigate = useNavigate()
    const itemList = [
        {
            name: "Enabled",
            value: "Enabled",
        },
        {
            name: "Disabled",
            value: "Disabled",
        },
    ];

    const initialValues = {
        name: '',
        meta_title: '',
        meta_description: '',
        meta_keyword: '',
        // meta_image: '',
        language_id: '',
        is_active: ''
    };
    // console.log(initialValues);

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta title is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta Keyword is required";
        }
        // if (!values.meta_image) {
        //     errors.meta_image = "Meta Keyword is required";
        // }
        if (!values.is_active) {
            errors.is_active = "Status Active is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Service Category Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (initialValues) => {

        try {
            if (!params?.id) {
                try {
                    const res = await serviceCategoryAdd({ list: selectData });
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/admin/service-category')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await ServiceCategoryUpdate(params?.id, { list: selectData });
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/admin/service-category')
                        }, [4000])
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange1 = (e, id) => {
        const updatedData = selectData.map((item) => {
            if (item.language_id === id) {
                return { ...item, [e.target.name]: e.target.value };
            }
            return item;
        });
        setSelectData(updatedData);
    };

    const getLanguageIdTab = async () => {
        const res = await languageList();
        setLanguage(res?.data);
        setTab(res?.data[0]?._id);
    };

    const initialData = () => {
        const data = language?.map((item) => {
            return { ...initialValues, language_id: item?._id, langName: item?.name };
        });
        setSelectData(data);
    };

    // useEffect(() => {
    //     initialData();
    // }, [language]);

    useEffect(() => {
        getLanguageIdTab();
    }, []);


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getServiceCategoryId(params.id);
                    const currencyData = response.data;
                    // console.log(currencyData);
                    const data = currencyData?.map((item, i) => {
                        return { id: item.id, name: item.name, meta_title: item.meta_title, meta_description: item.meta_description, meta_keyword: item.meta_keyword, language_id: item?.language_id, is_active: item.is_active ? item.is_active : false, langName: language[i].name }
                    })
                    console.log(data);
                    setSelectData(data)
                } else {
                    initialData();
                    // setInitialValues({
                    //     name: "",
                    //     code: "",
                    //     curruncy_id: "",
                    // });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id, language]);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD SERVICE CATEGORY</h4>
                                </div>

                                <Tabs
                                    defaultActiveKey={tab}
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {selectData && selectData.map((item, i) => (
                                        <Tab key={item?.language_id} eventKey={item?.language_id} title={item?.langName}>
                                            <Formik
                                                initialValues={item}
                                                validate={validate}
                                                onSubmit={submitForm}
                                                enableReinitialize
                                            >
                                                {(formik) => {
                                                    const {
                                                        values,
                                                        handleChange,
                                                        handleSubmit,
                                                        errors,
                                                        touched,
                                                        handleBlur,
                                                    } = formik;
                                                    return (
                                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Name *"
                                                                        value={item?.name}
                                                                        hasError={errors.name && touched.name}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.name}
                                                                        autoFocus={true}
                                                                        id="name"
                                                                        name="name"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Meta Title *"
                                                                        value={item?.meta_title}
                                                                        hasError={errors.meta_title && touched.meta_title}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_title}
                                                                        autoFocus={true}
                                                                        id="meta_title"
                                                                        name="meta_title"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Meta Description *"
                                                                        value={item?.meta_description}
                                                                        hasError={errors.meta_description && touched.meta_description}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_description}
                                                                        autoFocus={true}
                                                                        id="meta_description"
                                                                        name="meta_description"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Meta keyword *"
                                                                        value={item?.meta_keyword}
                                                                        hasError={errors.meta_keyword && touched.meta_keyword}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_keyword}
                                                                        autoFocus={true}
                                                                        id="meta_keyword"
                                                                        name="meta_keyword"
                                                                    />
                                                                </div>
                                                                {/* <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="file"

                                                                        value={item?.meta_image}
                                                                        hasError={errors.meta_image && touched.meta_image}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_image}
                                                                        autoFocus={true}
                                                                        id="meta_image"
                                                                        name="meta_image"
                                                                    />
                                                                </div> */}
                                                                <div className="col-xl-6 mb-3">
                                                                    <select className="form-select" aria-label="Default select example" name="is_active" value={item.is_active} onChange={(e) => handleChange1(e, item?.language_id)}>
                                                                        <option selected>Open this select menu</option>
                                                                        <option value={true}>Is Active</option>
                                                                        <option value={false}>De Active</option>
                                                                    </select>
                                                                </div>
                                                                {/* Add other input fields here */}
                                                            </div>
                                                            <div>
                                                                <Link to='/admin/service-category' className="btn btn-danger light ms-1">Cancel</Link>
                                                                <button type="button" className="btn btn-primary me-1" onClick={submitForm}>
                                                                        Submit
                                                                    </button>
                                                            </div>
                                                        </form>
                                                    );
                                                }}
                                            </Formik>
                                        </Tab>
                                    ))}
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default AddServiceCategoryMaster;