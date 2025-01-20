
import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import Select from 'react-select'

// import CustomDropdown from "../../../../../common/CustomDropdown";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { addRolee, getControler, mainModuleList, updategetId, updatesaddRole } from "../../../api/login/Login";
const moduleOptions = [
    { value: 'module1', label: 'Module 1' },
    { value: 'module2', label: 'Module 2' },
    { value: 'module3', label: 'Module 3' },
];
function AddRole() {
    const [page, setPage] = useState(0)
    const [count, setcount] = useState(30)
    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];
    const navigate = useNavigate()

    const [dataconntriler, setdataconntriler] = useState(null)
    // console.log(dataconntriler);

    const [initialValues, setInitialValues] = useState({
        role_name: "",
        slug: '',
        permits: [],
        // sub_module: '',
    });

    const [sortNumbers, setSortNumbers] = useState({});

    console.log(initialValues);

    const handleSortNumberChange = (mainModuleId, subModuleId, value) => {
        setSortNumbers(prev => ({
            ...prev,
            [mainModuleId]: {
                ...prev[mainModuleId],
                [subModuleId]: value
            }
        }));
    };

    const params = useParams();


    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.slug) {
            errors.slug = "slug is required";
        }


        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Role Succesfully`, {
            position: "top-center",
        });
    };

    const [selectedModules, setSelectedModules] = useState([]);
    // console.log(selectedModules);
    const handleModuleChange = (selectedOptions) => {

        setSelectedModules(selectedOptions);
    };

    const selectedModuleIds = selectedModules.map(module => module._id);
    console.log(selectedModuleIds);

    const [DataModule, setDataModule] = useState(null)

    const curencyidget = async () => {
        try {
            const res = await mainModuleList(page, count)
            const maped = res?.data?.map((item) => {
                console.log(item);
                return { ...item, value: item.name, label: item.name }
            })
            setDataModule(maped)

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {
        console.log(values);

        const permits = dataconntriler?.map((item) => {
            return {
                main_module: {
                    _id: item.main_module._id,
                    name: item.main_module.name,
                    sort_no: sortNumbers[item.main_module._id]?.[''] || '',
                },
                sub_module: item.sub_module?.map((subItem) => {
                    return {
                        _id: subItem._id,
                        name: subItem.name,
                        sort_no: sortNumbers[item.main_module._id]?.[subItem._id] || '',
                    };
                })
            };
        });

        console.log(permits);

        const transformedValues = {
            role_name: values.role_name,
            slug: values.slug,
            permits,
        };

        console.log(transformedValues);

        try {
            if (!params?.id) {
                try {
                    const res = await addRolee(transformedValues);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/admin/list-role')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await updatesaddRole(params.id, transformedValues);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/admin/list-role')
                        }, [4000])
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await updategetId(params.id);
                    const currencyData = response.data;
                    console.log(currencyData[0]);
                    // setInitialValues(currencyData);
                    const initialPermits = currencyData[0].permits.map(permit => {
                        console.log(permit);
                        return {
                            ...permit,
                            main_module: {
                                ...permit.main_module,
                                sort_no: permit.main_module.sort_no || '',
                            },
                            sub_module: permit.sub_module.map(sub => ({
                                ...sub,
                                sort_no: sub.sort_no || ''
                            })),
                        };
                    });

                    console.log(initialPermits);

                    setInitialValues({
                        role_name: currencyData[0].role_name,
                        slug: currencyData[0].slug,
                        permits: currencyData[0]?.permits,
                    });

                    setdataconntriler(currencyData[0]?.permits)

                    // Set selected modules for the multi-select
                    setSelectedModules(currencyData[0].permits.map(permit => ({
                        _id: permit.main_module._id,
                        name: permit.main_module.name,
                        value: permit.main_module.name,
                        label: permit.main_module.name
                    })));

                    // Set the initial sort numbers
                    const initialSortNumbers = {};
                    currencyData[0].permits.forEach(permit => {
                        initialSortNumbers[permit.main_module._id] = {
                            '': permit.main_module.sort_no || '',
                            ...permit.sub_module.reduce((acc, sub) => {
                                acc[sub._id] = sub.sort_no || '';
                                return acc;
                            }, {})
                        };
                    });
                    setSortNumbers(initialSortNumbers);
                } else {
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
    }, [params?.id]);


    const getController = async () => {
        try {
            // const res = await getControler(selectedModuleIds)
            // console.log(res?.data);
            // setdataconntriler(res?.data)
            const selectedModuleIds = selectedModules.map(module => module._id);
            const res = await getControler(selectedModuleIds);
            setdataconntriler(res?.data);
        } catch (error) {

        }
    }


    const deleteAllSubmodules = (mainModuleId) => {
        setdataconntriler(prevData =>
            prevData.filter(item => item.main_module._id !== mainModuleId)
        );
    };

    const deleteSubmodule = (mainModuleId, subModuleId) => {
        setdataconntriler(prevData => prevData.map(item => {

            if (item.main_module._id === mainModuleId) {
                return {
                    ...item,
                    sub_module: item.sub_module.filter(subItem => subItem._id !== subModuleId)
                };
            }
            return item;
        }));
    };


    const isGetControllerEnabled = () => {
        return initialValues.role_name && initialValues.slug;
        // && selectedModules.length > 0
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                // validate={validate}
                onSubmit={submitForm}
                enableReinitialize
                className="tbl-captionn"
            >
                {(formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                    } = formik;
                    return (
                        <div className="row" >
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"} Role</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={values.provider_name} name="provider_name" onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            <option value={"Airtel"}>Airtel</option>
                                                            <option value={"Jio"}>Jio</option>
                                                            <option value={'VI'}>VI</option>
                                                        </select>

                                                    </div> */}
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Add Role *"
                                                            value={values.role_name}
                                                            hasError={errors.role_name && touched.role_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.role_name}
                                                            autoFocus={true}
                                                            id="role_name"
                                                        />
                                                    </div>

                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Slug *"
                                                            value={values.slug}
                                                            hasError={errors.slug && touched.slug}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.slug}
                                                            autoFocus={true}
                                                            id="slug"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <Select
                                                            id="selectModule"
                                                            closeMenuOnSelect={false}
                                                            className="multi-select-set"
                                                            isMulti
                                                            options={DataModule}
                                                            value={selectedModules}
                                                            onChange={handleModuleChange}
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <button
                                                            className="btn btn-primary me-1 get-controller"
                                                            type="button"
                                                            onClick={getController}

                                                        >
                                                            Get Controler
                                                        </button>
                                                    </div>

                                                    <div className="row">
                                                        {dataconntriler && dataconntriler?.map((item) => {
                                                            console.log(item);
                                                            // return <div className="row">

                                                            return <div className="col-xl-6 mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h3 className="set-heading-late">Main Module </h3>
                                                                        <label htmlFor="" class="form-label">{item?.main_module?.name}</label>
                                                                        <div className="head-combo">
                                                                            <input
                                                                                type="number"
                                                                                name={`sort_no_${item.main_module._id}`}
                                                                                placeholder="Sort Number"
                                                                                value={sortNumbers[item.main_module._id]?.[''] || ''}
                                                                                onChange={(e) => handleSortNumberChange(item.main_module._id, '', e.target.value)}
                                                                                className="form-control"
                                                                            />



                                                                            <button
                                                                                className="btn btn-danger"
                                                                                type="button"
                                                                                onClick={() => deleteAllSubmodules(item.main_module._id)}
                                                                            >
                                                                                Delete All Submodules
                                                                            </button>

                                                                        </div>


                                                                        {item?.sub_module?.map((subItem) => {
                                                                            return <div className="subModule">
                                                                                <h3 className="set-heading-late">Sub Module</h3>
                                                                                <label htmlFor="" class="form-label">{subItem?.name}</label>
                                                                                <div className="head-combo">
                                                                                    <input
                                                                                        type="number"
                                                                                        name={`sort_no_${item.main_module._id}_${subItem._id}`}
                                                                                        placeholder="Sort Number"
                                                                                        value={sortNumbers[item.main_module._id]?.[subItem._id] || ''}
                                                                                        onChange={(e) => handleSortNumberChange(item.main_module._id, subItem._id, e.target.value)}
                                                                                        className="form-control"
                                                                                    />
                                                                                    <button
                                                                                        className="btn btn-danger"
                                                                                        type="button"
                                                                                        onClick={() => deleteSubmodule(item.main_module._id, subItem._id)}
                                                                                    >
                                                                                        Delete
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        })}

                                                                    </div>
                                                                    {/* <div className="col-md-6"> */}

                                                                    {/* </div> */}
                                                                </div>



                                                            </div>


                                                            {/* </div> */ }
                                                        })}
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <Link to='/admin/provider' className="btn btn-danger light ms-1">Cancel</Link>
                                                        <button
                                                            className="btn btn-primary me-1"
                                                            type="submit"
                                                        // disabled={!isValid || !dirty}
                                                        >
                                                            {params?.id ? "Update" : "Add"}
                                                        </button>
                                                    </div>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    );
                }}
            </Formik >
            <ToastContainer />
        </>
    )
}
export default AddRole