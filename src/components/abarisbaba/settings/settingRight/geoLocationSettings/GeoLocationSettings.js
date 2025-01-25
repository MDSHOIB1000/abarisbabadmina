import React from 'react'

function GeoLocationSettings() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">GEO Location Settings

                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Map Library</label>
                                            <select className='form-select'>
                                                <option>Open Select Map </option>
                                                <option>Open Street Map</option>
                                                <option>Open Google Map</option>
                                            </select>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Product List Radius Search</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'> <small>Check this to enable product list radius filter by user location. </small></p>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Maximum Radius to Search</label>
                                            <select className='form-select'>
                                                <option>100 </option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>10</option>
                                                <option>15</option>
                                                <option>20</option>
                                                <option>50</option>
                                                <option>150</option>
                                                <option>200</option>
                                                <option>250</option>
                                                <option>500</option>
                                            </select>
                                            <p className='text-start'> <small>Set maximum radius allow to search.</small></p>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Product List Radius Search</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'> <small>Check this to enable store list radius filter by user location.

                                            </small></p>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Radius Unit</label>
                                            <select className='form-select'>
                                                <option>Kilometer </option>
                                                <option>Miles </option>

                                            </select>

                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Enable Auto Filter Search</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'> <small>Check this to enable auto-filter by user's location.
                                            </small></p>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Checkout User Location</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'> <small>Check this to enable user's location input using map at checkout.

                                                .</small></p>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Show Product Location</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                            <p className='text-start'> <small>Check this to show product's location at single product page.</small></p>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Map Default Location</label>
                                            <input
                                                type="search"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Search...'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className='col-xl-12'>
                                            <div className='map card'>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.957114192769!2d77.2672748752006!3d28.57105048687052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzE1LjgiTiA3N8KwMTYnMTEuNSJF!5e0!3m2!1sen!2sin!4v1737538254451!5m2!1sen!2sin"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Store List Page</h4>
                                </div>
                                <ul>
                                <li><small>You just have to create a page using short code – <b>wcfm_stores</b></small></li>
                                <li><small>You may specify “per_row” attribute to specify number of store in one row, by default it’s “2”.</small></li>
                                <li><small>Also specify “per_page” attribute to set how many stores you want to show in a page. Default value is 10.</small></li>
                                <li><small>You may also specify “excludes” attribute (comma separated store ids) to excludes some store from list</small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeoLocationSettings
