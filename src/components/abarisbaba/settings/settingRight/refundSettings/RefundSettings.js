import React from 'react'

function RefundSettings() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Store Refund Settings
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Refund auto-approve? Checkout</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-7 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Refund by Customer?</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'><small>Enable this to allow customers make refund requests. Customers refund requests never auto-approve, admin always has to manually approve this.</small></p>
                                        </div>
                                        <div className="col-xl-12 mb-3">

                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Refund Threshold</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='0.00'
                                                // value={""}
                                                // name=""
                                                // onChange={handleChange}
                                                style={{width:"400px"}}
                                                />
                                            </div>
                                            <p className='text-start'><small>Refund Threshold Days, (Allow an order available to make a refund request). Leave empty to inactive this option.</small></p>
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

export default RefundSettings
