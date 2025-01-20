import { Link } from "react-router-dom"
import CustomDropdown from "../../../../common/CustomDropdown";
import CustomInputField from "../../../../common/CustomInputField";
import CustomTextArea from "../../../../common/CustomTextArea";
import { Formik } from "formik";
const initialValues = {
    notificationTitle: "",
    notificationMessage: "",
}
function NotificationsSetting() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Abc",
            value: "Abc",
        },
        {
            name: "Abcd",
            value: "Abcd",
        },
        {
            name: "Abce",
            value: "Abce",
        },
        {
            name: "Abcf",
            value: "Abcf",
        },
    ];
    const validate = (values) => {
        let errors = {};

        if (!values.notificationTitle) {
            errors.notificationTitle = "Notification Title is required";
        }

        if (!values.notificationMessage) {
            errors.notificationMessage = "Notification Message is required";
        }


        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
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
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption ">
                                                <h4 className="heading mb-0">SEND NOTIFICATION</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={submitForm}>
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Notification Type *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select Member Type *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Notification Title *"
                                                            value={values.notificationTitle}
                                                            hasError={errors.notificationTitle && touched.notificationTitle}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.notificationTitle}
                                                            id="notificationTitle"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomTextArea
                                                            placeholder="Notification Message *"
                                                            value={values.notificationMessage}
                                                            hasError={errors.notificationMessage && touched.notificationMessage}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.notificationMessage}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="notificationMessage"
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    {/* <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    <button className="btn btn-primary me-1">Send Notificaton</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}
export default NotificationsSetting