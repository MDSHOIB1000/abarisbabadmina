import React from 'react'
import imgSele from "../../../../../assets/images/kyc/default-photo.jpg"
function MarketPlaceSettings() {

  return (
    <>
      <div className="row">
        <div className="col-xl-12">

          <div className="card">
            <div className="card-body p-0">
              <div className="">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0 p-2">Marketplace Settings
                  </h4>
                </div>
                <form className="tbl-captionn">
                  <div className="row">
                    <div className="col-xl-6 mb-3">

                      <div class="d-flex align-items-center justify-content-between">
                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Product Approval</label>
                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                      </div>
                      <p className='text-start'>Man <small>ager vendor capabilities from Capability Setting</small></p>
                    </div>


                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store URL Base*</label>
                      <input
                        type="url"
                        className="form-control"
                        // value={""}
                        // name=""
                        placeholder='Enter Url'
                      // onChange={handleChange}
                      />
                      <p className='text-start'>De <small>fine the seller store URL (https://demowpthemes.com/buy2abarisbaba/[this-text]/[seller-name])</small></p>
                    </div>
                    <div className="col-xl-6 mb-3">

                      <div class="d-flex align-items-center justify-content-between">
                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Visible Sold By</label>
                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                      </div>
                      <p className='text-start'>Unc <small>heck this to disable Sold By display for products.

                      </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Sold By Label</label>
                      <input
                        type="url"
                        className="form-control"
                        // value={""}
                        // name=""
                        placeholder='Enter Url'
                      // onChange={handleChange}
                      />
                      <p className='text-start'> <small>Sold By label along with store name under product archive pages.

                      </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Sold By Template</label>
                      <select className='form-select'>
                        <option>Advance </option>
                        <option>Simple</option>
                        <option>As Tab</option>
                      </select>
                      <p className='text-start'>Si <small>ngle product page Sold By template. </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <div className='border'>
                        <img src={imgSele} alt='selected Img' width={100} />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Sold By Position</label>
                      <select className='form-select'>
                        <option value="bellow_title">
                          Below Title
                        </option>
                        <option value="bellow_price">Below Price</option>
                        <option value="bellow_sc">Below Short Description</option>
                        <option value="bellow_atc" selected="selected">Below Add to Cart</option>
                      </select>
                      <p className='text-start'> <small>Sold by display position at Single Product Page.

                      </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store Name Position</label>
                      <select className='form-select'>
                        <option>On Banner </option>
                        <option>At Header</option>
                      </select>
                      <p className='text-start'> <small>Store name position at Vendor Store Page.</small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store List Sidebar</label>
                      <input
                        type="url"
                        className="form-control"
                        // value={""}
                        // name=""
                        placeholder='Store List Sidebar'
                      // onChange={handleChange}
                      />
                      <p className='text-start'> <small>Uncheck this to disable store list sidebar.

                      </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store Sidebar</label>
                      <input
                        type="url"
                        className="form-control"
                        // value={""}
                        // name=""
                        placeholder='Store Sidebar'
                      // onChange={handleChange}
                      />
                      <p className='text-start'> <small>Uncheck this to disable vendor store sidebar.</small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store Sidebar Position</label>
                      <select className='form-select'>
                        <option value="bellow_title">
                          At Left
                        </option>
                        <option value="bellow_price">At Right</option>
                      </select>
                      <p className='text-start'> <small>Sold by display position at Single Product Page.

                      </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Products per page</label>
                      <input
                        type="number"
                        className="form-control"
                      // value={""}
                      // name=""
                      // onChange={handleChange}
                      />
                      <p className='text-start'> <small>No of products at Store per Page.</small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store Related Products</label>
                      <select className='form-select'>
                        <option value="default" selected="selected">As per WC Default Rule</option>
                        <option value="store">Only same Store Products</option>
                      </select>
                      <p className='text-start'> <small>Sold by display position at Single Product Page.

                      </small></p>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store Default Logo</label>
                      <div className='border'>
                        <img src={imgSele} alt='selected Img' width={100} />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store Default Banner Store</label>
                      <div className='border'>
                        <img src={imgSele} alt='selected Img' width={100} />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Store List Default Banner Store</label>
                      <div className='border'>
                        <img src={imgSele} alt='selected Img' width={100} />
                      </div>
                    </div>
                    <div className="tbl-caption tbl-caption-2">
                      <h4 className="heading mb-0 p-2">Banner Dimension(s)
                      </h4>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Width</label>
                      <input
                        type="number"
                        className="form-control"
                      // value={""}
                      // name=""
                      // onChange={handleChange}
                      />

                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Height</label>
                      <input
                        type="number"
                        className="form-control"
                      // value={""}
                      // name=""
                      // onChange={handleChange}
                      />

                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Width <b>(Mob)</b></label>
                      <input
                        type="number"
                        className="form-control"
                      // value={""}
                      // name=""
                      // onChange={handleChange}
                      />

                    </div>
                    <div className="col-xl-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Height <b>(Mob)</b></label>
                      <input
                        type="number"
                        className="form-control"
                      // value={""}
                      // name=""
                      // onChange={handleChange}
                      />

                    </div>
                    <div className="col-xl-6 mb-3">

                      <div class="d-flex align-items-center justify-content-between">
                        <label for="exampleFormControlInput1" class="form-label mb-0  " >Disable Store Setup Widget</label>
                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                      </div>

                    </div>
                    <div className="col-xl-6 mb-3">

                      <div class="d-flex align-items-center justify-content-between">
                        <label for="exampleFormControlInput1" class="form-label mb-0  " >On Uninstall</label>
                        <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                      </div>

                    </div>
                    <div className='col-xl-12'>
                      <p className='text-start'> <small>Delete all marketplace data on uninstall. Be careful, there is no way to retrieve those data if once deleted!

                      </small></p>
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

export default MarketPlaceSettings
