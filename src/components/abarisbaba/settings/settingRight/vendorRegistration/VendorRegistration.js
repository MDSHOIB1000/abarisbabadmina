import React from 'react'

function VendorRegistration() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Store Registration Settings
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Hide "Become a Vendor"?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Required Approval</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Email Verification</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className='col-xl-12'>
                                            <div className="tbl-caption tbl-caption-2 mb-3">
                                                <h4 className="heading mb-0 p-2">Store Registration Settings
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >First Name</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Last Name</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >User Name</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Store AddressStore</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Store Phone</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Terms & ConditionsTerms</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className='col-xl-12'>
                                            <div className="tbl-caption tbl-caption-2 mb-3">
                                                <h4 className="heading mb-0 p-2">Registration Form Custom Fields
                                                </h4>
                                            </div>
                                        </div>
                                        <div className='card'>
                                            <div className='row'>
                                                <div className="col-xl-7 mb-3">

                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable</label>
                                                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                    </div>

                                                </div>
                                                <div className="col-xl-7 mb-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label">Feild Type</label>
                                                    <select className='form-select' style={{ width: "400px" }}>
                                                        <option value="text" selected="selected">Text</option><option value="number">Number</option><option value="textarea">textarea</option><option value="datepicker">Date Picker</option><option value="timepicker">Time Picker</option><option value="checkbox">Check Box</option><option value="select">Select / Drop Down</option><option value="mselect">Multi-Select Drop Down</option><option value="upload">File/Image</option><option value="html">HTML</option>
                                                    </select>
                                                </div>
                                                </div>
                                                <div className="col-xl-7 mb-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Lebel</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder='0.00'
                                                            // value={""}
                                                            // name=""
                                                            // onChange={handleChange}
                                                            style={{ width: "400px" }}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-xl-7 mb-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Help Content</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder='0.00'
                                                            // value={""}
                                                            // name=""
                                                            // onChange={handleChange}
                                                            style={{ width: "400px" }}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-xl-7 mb-3">

                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Required?</label>
                                                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-7 mb-3">
                                            <div className="tbl-caption tbl-caption-2 ">
                                                <h4 className="heading mb-0 p-2">Category
                                                </h4>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Features</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                    // value={""}
                                                    // name=""
                                                    // onChange={handleChange}
                                                    style={{ width: "400px" }}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0 p-2">Category
                                                </h4>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Flexibility</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                    // value={""}
                                                    // name=""
                                                    // onChange={handleChange}
                                                    style={{ width: "400px" }}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0 p-2">Category
                                                </h4>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Delivery</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                    // value={""}
                                                    // name=""
                                                    // onChange={handleChange}
                                                    style={{ width: "400px" }}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0 p-2">Category
                                                </h4>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Support</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                    // value={""}
                                                    // name=""
                                                    // onChange={handleChange}
                                                    style={{ width: "400px" }}
                                                />
                                            </div>

                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VendorRegistration
