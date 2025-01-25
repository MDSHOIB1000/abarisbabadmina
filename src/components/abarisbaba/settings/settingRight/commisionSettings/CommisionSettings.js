import React from 'react'

function CommisionSettings() {
    return (
        <>

            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Marketplace Commission Settings
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Commission For</label>
                                            <select className='form-select'>
                                                <option>Vendor</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">
                                                Commission Mode</label>
                                            <select className='form-select'>
                                                <option value="percent" selected="selected">Percent</option>
                                                <option value="fixed">Fixed</option>
                                                <option value="percent_fixed">Percent + Fixed</option>
                                                <option value="by_sales">By Vendor Sales</option>
                                                <option value="by_products">By Product Price</option>
                                                <option value="by_quantity">By Purchase Quantity</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Commission Percent(%)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Enter %'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Shipping cost goes to vendor? </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Tax goes to vendor?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Commission after consider Vendor Coupon? </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Commission after consider Admin Coupon?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Commission Tax Settings
                                            </h4>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Tax Label</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Tax'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Tax Percent (%)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                            // onChange={handleChange}
                                            />

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

export default CommisionSettings
