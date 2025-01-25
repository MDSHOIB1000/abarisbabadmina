import React from 'react'

function MenuMAnager() {
    return (
        <>
            <div className='row'>
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Dashboard Menu Manager
                                </h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-12 mb-3">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <label for="exampleFormControlInput1" class="form-label">Home Menu Label</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Home'
                                                // onChange={handleChange}
                                                style={{ width: "400px" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Articles'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='File-alt'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Media'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Image'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Product'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Cube'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Orders'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='shopping-cart'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Withdrawal'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='credit-card'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Coupons'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Gift'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Store Vendor'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='User-Alt'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Customer'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='User-circle'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Manager'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='User-secrete'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Staff'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='User'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Groups'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='User'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Membership'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='User-plus'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable </label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Refund'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Icon</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='Retweet'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder='https://abaribaba.com/athi/alibaba/store-manager/media/'
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Has New</label>
                                                    <input type="checkbox"

                                                        id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} checked={true} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">New Menu URL</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    // value={""}
                                                    // name=""
                                                    placeholder=''
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Menu For</label>
                                                <select className='form-select'>
                                                    <option>All User</option>
                                                    <option>Only Admin</option>
                                                    <option>Only Vendors</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-7'>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >Open In New Tab</label>
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default MenuMAnager
