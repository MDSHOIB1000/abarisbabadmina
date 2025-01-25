import React from 'react'

function OrderSettings() {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">

          <div className="card">
            <div className="card-body p-0">
              <div className="">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0 p-2">Order Settings
                  </h4>
                </div>
                <form className="tbl-captionn">
                  <div className="row">
                    <div className="col-xl-7 mb-3">

                      <div class="d-flex align-items-center justify-content-between">
                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Disable Multivendor Checkout</label>
                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                      </div>
                      <p className='text-start'> <small>Enable this restrict multiple vendors product checkout at same order.

                      </small></p>
                    </div>
                    <div className="col-xl-7 mb-3">

                      <div class="d-flex align-items-center justify-content-between">
                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Product Approval</label>
                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                      </div>
                      <p className='text-start'><small>Enable this to sync WC main order status when vendors update their order status.</small></p>
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

export default OrderSettings
