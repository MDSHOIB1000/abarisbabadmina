import React from 'react'

function ShippingSettings() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Store Shipping Settings
                                    </h4>
                                </div>

                                <form className="tbl-captionn">
                                    <div className="row">

                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Store Shipping
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />

                                            </div>
                                            <small><i>Uncheck this to disable vendor wise store shipping options.

                                            </i></small>
                                        </div>

                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Shipping By Zone
                                            </h4>
                                        </div>
                                        <div className='col-xl-7 mb-3'>
                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <small><i>Uncheck this to disable zone wise shipping options.</i></small>
                                            </div>
                                        </div>
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Shipping By Country
                                            </h4>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />

                                            </div>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Default Shipping Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='0.00'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Per Product Additional Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='0.00'
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Per Qty Additional PricePer</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='0.00'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Free Shipping Minimum Order Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='No Free Shipping'
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className='col-xl-7 mb-3'>
                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable Local Pickup
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Local Pickup Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='0.00'
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Ships from:</label>
                                            <select className='form-select'>
                                                <option value="no_charge" selected="selected">Choose...</option>
                                                <option value="percent" selected="selected">India</option>
                                                <option value="fixed">America</option>
                                                <option value="percent_fixed">China</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Ships from:</label>
                                            <select className='form-select'>
                                                <option value="no_charge" selected="selected">Choose...</option>
                                                <option value="percent" selected="selected">India</option>
                                                <option value="fixed">America</option>
                                                <option value="percent_fixed">China</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Cost ($)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='0.00'
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <h5><i>Shipping Rates by Country</i></h5>

                                        <div className='card'>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Country</label>
                                                <select className='form-select'>
                                                    <option value="no_charge" selected="selected">Choose...</option>
                                                    <option value="percent" selected="selected">India</option>
                                                    <option value="fixed">America</option>
                                                    <option value="percent_fixed">China</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Cost ($)</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                // value={""}
                                                // name=""
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className='card'>
                                                <h5><i>Shipping Rates by State</i></h5>
                                                <div className='row'><div className="col-xl-6 mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Country</label>
                                                    <select className='form-select'>
                                                        <option value="no_charge" selected="selected">Choose...</option>
                                                        <option value="percent" selected="selected">India</option>
                                                        <option value="fixed">America</option>
                                                        <option value="percent_fixed">China</option>
                                                    </select>
                                                </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Cost ($)</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder='0.00'
                                                        // value={""}
                                                        // name=""
                                                        // onChange={handleChange}
                                                        />

                                                    </div></div>
                                            </div>
                                        </div>
                                        <small><i>Add the countries you deliver your products to. You can specify states as well. If the shipping price is same except some countries, there is an option Everywhere Else, you can use that.
                                        </i></small>
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Shipping By Weight
                                            </h4>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />

                                            </div>
                                            <small><i>Uncheck this to disable weight based shipping options.</i></small>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Free Shipping Minimum Order Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='No Free Shipping'
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable Local Pickup
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />

                                            </div>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Local Pickup Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='0.00'
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Country and Weight wise Shipping Rate Calculation
                                            </h4>
                                        </div>
                                        <div className='card'>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Country</label>
                                                <select className='form-select'>
                                                    <option value="no_charge" selected="selected">Choose...</option>
                                                    <option value="percent" selected="selected">India</option>
                                                    <option value="fixed">America</option>
                                                    <option value="percent_fixed">China</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Calculate Cost</label>
                                                <select className='form-select'>
                                                    <option value="no_charge" selected="selected">Based On Rule</option>
                                                    <option value="percent" selected="selected">Per Unit Cost</option>

                                                </select>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Default Cost If No Matching Rule ($)</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                // value={""}
                                                // name=""
                                                // onChange={handleChange}
                                                />

                                            </div>
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0 p-2">Weight-cost Rule
                                                </h4>
                                            </div>
                                            <div className='card'>

                                                <div className='row'><div className="col-xl-6 mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Weight Rule</label>
                                                    <select className='form-select'>
                                                        <option value="no_charge" selected="selected">Weight up to</option>
                                                        <option value="percent" selected="selected">Weight More Than</option>
                                                    </select>
                                                </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Weight (KG)</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder='0.00 Free Shipping'
                                                        // value={""}
                                                        // name=""
                                                        // onChange={handleChange}
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Cost (Rs)</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder='0.00 Free Shipping'
                                                        // value={""}
                                                        // name=""
                                                        // onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <small><i>Add the countries you deliver your products to and specify rates for weight range. If the shipping price is same except some countries/states, there is an option Everywhere Else, you can use that.
                                                </i></small>
                                            </div>
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0 p-2">Shipping By Distance
                                                </h4>
                                            </div>
                                            <div className='col-xl-7 mb-3'>
                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable Local Pickup
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <small><i>Uncheck this to disable distance based shipping options.</i></small>
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

export default ShippingSettings
