import { useEffect, useState } from "react";

function DisterbuterFIlter({ submitForm, initialValues, params, getReailerDistIdAgainst }) {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        refer_id: '',
        kycStatus: 'verified'
    });

    useEffect(()=>{
        setFormData({
            name: '',
            mobile: '',
            email: '',
            refer_id: '',
            kycStatus: ''
        });
    },[params])

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
    };
    const resetForm = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            refer_id: '',
            kycStatus: ''
        });
        getReailerDistIdAgainst(0)
    }
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter &nbsp; &nbsp;{`${params?.name}`}  </b></h4>
                                </div>
                                <form className="row cusforms" style={{ padding: "20px" }} onSubmit={handleSubmit}>
                                    <div className="form-group col-4">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="mobile">Mobile Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Enter mobile number"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="refer_id">{params?.name} Ref id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="refer_id"
                                            placeholder={`Enter ${params?.name} ref id`}
                                            value={formData.refer_id}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="kycStatus">KYC Status</label>
                                        <select
                                            className="form-control"
                                            id="kycStatus"
                                            value={formData.kycStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Status </option>
                                            <option value="verified ">verified </option>
                                            <option value="unverified">unverified </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12" style={{ margin: "20px 0" }}>
                                        <button type="submit" className="btn btn-primary">
                                            SEARCH
                                        </button>
                                        <button type="button" className="btn btn-warning" onClick={resetForm}>
                                            RESET
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DisterbuterFIlter;
