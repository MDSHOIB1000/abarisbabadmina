import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { Formik } from 'formik';
import CustomInputField from '../../../common/CustomInputField';
import { addStaffpermision, clodinaryImage, getAreaSelecStaff, getBlockSelecStaff, getDepartmentSelecStaff, getDesignationSelecStaff, getFloorSelecStaff, getOfficeSelecStaff, getRoleSelecStaff, getStaffpermisionId, getStaffSelecAdd, getWardSelecStaff, updateStaffpermision } from '../../../api/login/Login';
import { toast } from 'react-toastify';
import { baseUrlImage } from '../../../baseUrl';

function AddPermision() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Roles & Permisions",
        title_2: "Add Staff ",
    }
    const [profileImage, setProfileImage] = useState();
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        profile: "",
        password: "",
        role_id: "",
        building_id: "",
        office_id: "",
        block_id: "",
        ward_id: "",
        area_id: "",
        floor_id: "",
        department_id: "",
        designation_id: "",
    });
    const [buildingState, setBuildingState] = useState()
    const [officeState, setOfficeState] = useState()
    const [floorState, setFloorState] = useState()
    const [areaState, setAreaState] = useState()
    const [blockState, setBlockState] = useState()
    const [wardState, setWardState] = useState()
    const [departmentState, setDepartmentState] = useState()
    const [designationState, setDesignationState] = useState()
    const [roleState, setRoleState] = useState()

    const params = useParams();
    const navigate = useNavigate()

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Staff Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addStaffpermision(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/admin/staff-list')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await updateStaffpermision(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/admin/staff-list')
                        }, [4000])
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };



    const buildingSelecId = async () => {
        const res = await getStaffSelecAdd()
        setBuildingState(res?.data)
    }
    const staffofficeSelecId = async () => {
        const res = await getOfficeSelecStaff()
        setOfficeState(res?.data)
    }
    const staffFloorSelecId = async () => {
        const res = await getFloorSelecStaff()
        setFloorState(res)
    }
    const staffAreaSelecId = async () => {
        const res = await getAreaSelecStaff()
        setAreaState(res?.data)
    }
    const staffBlockSelecId = async () => {
        const res = await getBlockSelecStaff()
        setBlockState(res?.data)
        console.log(res);
    }
    const staffWardSelecId = async () => {
        const res = await getWardSelecStaff()
        setWardState(res?.data)
    }
    const staffDepartmentSelecId = async () => {
        const res = await getDepartmentSelecStaff()
        setDepartmentState(res?.data)
    }
    const staffDesignationSelecId = async () => {
        const res = await getDesignationSelecStaff()
        setDesignationState(res?.data)
    }
    const staffRoleSelecId = async () => {
        const res = await getRoleSelecStaff()
        setRoleState(res?.data)
    }
    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getStaffpermisionId(params.id);
                    const currencyData = response?.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        email: "",
                        profile: "",
                        password: "",
                        role_id: "",
                        building_id: "",
                        office_id: "",
                        block_id: "",
                        ward_id: "",
                        area_id: "",
                        floor_id: "",
                        department_id: "",
                        designation_id: "",
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    useEffect(() => {
        buildingSelecId()
        staffFloorSelecId()
        staffofficeSelecId()
        staffAreaSelecId()
        staffBlockSelecId()
        staffWardSelecId()
        staffDepartmentSelecId()
        staffDesignationSelecId()
        staffRoleSelecId()
    }, [])
    const imgs = new FormData();
    const colodinaryImage = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs)
            setTimeout(() => {
                setProfileImage(res?.data)
            }, 3000)


        } catch (error) {
            alert(`Profile not uploaded`)
        }


    }
    console.log(profileImage);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Staff
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                // validate={validate}
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
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                {/* <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.SecurityPin}
                                                        hasError={errors.SecurityPin && touched.SecurityPin}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.SecurityPin}
                                                        autoFocus={true}
                                                        id="SecurityPin"
                                                        name="SecurityPin"
                                                        placeholder="Last Name"
                                                    />
                                                </div> */}
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="email"
                                                        value={values?.email}
                                                        hasError={errors.email && touched.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.email}
                                                        autoFocus={true}
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.mobile}
                                                        hasError={errors.mobile && touched.mobile}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobile}
                                                        autoFocus={true}
                                                        id="mobile"
                                                        name="mobile"
                                                        placeholder="mobile"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="password"
                                                        value={values?.password}
                                                        hasError={errors.password && touched.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.password}
                                                        autoFocus={true}
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                {/* <div className="col-xl-6 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.role}
                                                        hasError={errors.role && touched.role}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.role}
                                                        autoFocus={true}
                                                        id="role"
                                                        name="role"
                                                        placeholder="Role"
                                                    />
                                                </div> */}
                                                <div className="col-xl-6 mb-3">
                                                    <div className='row align-items-center'>
                                                        <div className='col-xl-9'>
                                                            <CustomInputField
                                                                type="file"
                                                                hasError={errors.profile && touched.profile}
                                                                onChange={colodinaryImage}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.profile}
                                                                autoFocus={true}
                                                                id="profile"
                                                                name="profile"
                                                                placeholder="Profile"
                                                            />
                                                        </div>
                                                        <div className='col-xl-3'>
                                                            {profileImage &&
                                                                <div className='profilepic'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${profileImage?.data?.url}`} alt='profile_pic' />
                                                                    </picture>
                                                                </div>
                                                            }
                                                            {values?.profile ? <div className='profilepic'>
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${values?.profile}`} alt='profile_pic'/>
                                                                </picture>
                                                            </div> : <div className='border p-2 rounded'>Upload Profile</div>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 mb-3">
                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.role_id} name="role_id">
                                                        <option>Select Role</option>
                                                        {roleState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.building_id} name="building_id">
                                                        <option>Select Building</option>
                                                        {buildingState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.floor_id} name="floor_id">
                                                        <option>Select Floor</option>
                                                        {floorState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.area_id} name="area_id">
                                                        <option>Select Area</option>
                                                        {areaState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.block_id} name="block_id">
                                                        <option>Select Block</option>
                                                        {blockState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.ward_id} name="ward_id">
                                                        <option>Select Ward</option>
                                                        {wardState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.office_id} name="office_id">
                                                        <option>Select Office   </option>
                                                        {officeState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.department_id} name="department_id">
                                                        <option>Select Department</option>
                                                        {departmentState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">

                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.designation_id} name="designation_id">
                                                        <option>Select Designation   </option>
                                                        {designationState?.map((item) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>


                                            </div>
                                            <div>
                                                <Link to='/admin/staff-list' className="btn btn-danger light ms-1">Cancel</Link>
                                                <button
                                                    className="btn btn-primary me-1"
                                                    type="submit"
                                                    disabled={!isValid || !dirty}
                                                >
                                                    {params?.id ? "Update" : "Add"}
                                                </button>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPermision
