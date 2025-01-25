import React from 'react'

function ReviewSettings() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Store Review Settings
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Review auto-approve? Checkout</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Review only store users?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'><small>Enable this to allow only users to review the store who already purchased something from this store.</small></p>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Product review sync?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'><small>Enable this to allow vendor's products review consider as store review.</small></p>
                                        </div>
                                        <div className="col-xl-7 mb-3">
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

                                        </div>
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

export default ReviewSettings
