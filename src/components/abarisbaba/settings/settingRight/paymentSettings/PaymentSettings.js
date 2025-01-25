import React from 'react'

function PaymentSettings() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Marketplace Payment Settings
                                    </h4>
                                </div>

                                <form className="tbl-captionn">
                                    <div className="row">
                                        <h5><i>Withdraw Payment Methods</i></h5>
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center ">
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >  PayPal
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center ">
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Skrill
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center ">
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >  Bank Transfer
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center ">
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >   Cash Pay
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center ">
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Wirecard (Moip)
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Stripe</label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Stripe Split Pay
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center  justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Enable Test Mode
                                                </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />

                                            </div>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">PayPal Client ID</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">
                                                PayPal Secret Key</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                            // value={""}
                                            // name=""
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <h5><i>Transaction Charges</i></h5>
                                        <small>These charges will be deducted from vendor's total order commission depending upon Order Payment Method.
                                        </small>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">
                                                Charge Type</label>
                                            <select className='form-select'>
                                                <option value="no_charge" selected="selected">No Charge</option>
                                                <option value="percent" selected="selected">Percent</option>
                                                <option value="fixed">Fixed</option>
                                                <option value="percent_fixed">Percent + Fixed</option>
                                            </select>
                                        </div>
                                        <h5><i>Withdrawal Charges</i></h5>
                                        <small>These charges will be deducted from vendor's withdrawal amount depending upon Withdrawal Payment Method.
                                        </small>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">
                                                Charge Type</label>
                                            <select className='form-select'>
                                                <option value="no_charge" selected="selected">No Charge</option>
                                                <option value="percent" selected="selected">Percent</option>
                                                <option value="fixed">Fixed</option>
                                                <option value="percent_fixed">Percent + Fixed</option>
                                            </select>
                                        </div>
                                        <small><i>Charges applicable for each withdarwal.
                                        </i></small>
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

export default PaymentSettings
