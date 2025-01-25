import React from 'react'

function WithdrawalSettings() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Marketplace Withdrawal Settings
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Request auto-approve?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <div className='col-xl-12'>
                                            <small><i>Check this to automatically disburse payments to vendors on request, no admin approval required. Auto disbursement only works for auto-payment gateways, e.g. PayPal, Stripe etc. Bank Transfer or other non-autopay mode always requires approval, as these are manual transactions.💥</i></small>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Withdrawal Mode</label>
                                            <select className='form-select'>
                                                <option>Manual Withdrawal</option>
                                                <option>Priodic Withdrawal</option>
                                                <option>By Order Status</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <h4>Allowed Order Status for Withdrawal</h4>
                                            <small><i>Allowed order statuses for which vendor may request for withdrawal.</i></small>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Pending payment
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Pending payment
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Processing
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >  On hold

                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Completed
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center ">

                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " > Draft
                                                </label>
                                            </div>

                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label"> Minimum Withdraw Limit</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                            // onChange={handleChange}
                                            />
                                            <p>Minimum balance required to make a withdraw request. Leave blank to set no minimum limits.</p>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label"> Withdraw Threshold</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                            // onChange={handleChange}
                                            />
                                            <p>Withdraw Threshold Days, (Make order matured to make a withdraw request). Leave empty to inactive this option.</p>
                                        </div>

                                        <div className="col-xl-12 mb-3">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0 p-2">Marketplace Reverse Withdrawal Settings
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Reverse Withdrawal </label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>

                                        </div>
                                        <p><small><i>Enable this to keep track reverse withdrawals. In case vendor receive full payment (e.g. COD) from customer then they have to reverse-pay admin commission. This is only applicable for reverse-withdrawal payment methods.</i></small></p>
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

export default WithdrawalSettings
