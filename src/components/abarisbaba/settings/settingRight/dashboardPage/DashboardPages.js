import React from 'react'

function DashboardPages() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Dashboard Page/Endpoint Setting
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-7 mb-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label for="exampleFormControlInput1" class="form-label mb-0  " >Refresh Permalink</label>
                                                <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Dashboard</label>
                                            <select className='form-select'>
                                                <option>Vendor</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Member Ship</label>
                                            <select className='form-select'>
                                                <option>Vendor</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Registration</label>
                                            <select className='form-select'>
                                                <option>Vendor</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Dashboard End Points
                                            </h4>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-products</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Products'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-products-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Products Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-stock-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Stock Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-products-import</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Products import'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-products-export</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Products Exports'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-coupons</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-coupons-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Coupons Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-orders</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Oderlist'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-orders-details</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Order Details'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-reports-sales-by-date</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reports Sales By Date'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-reports-sales-by-vendor</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reports Sales By Vendor'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-reports-out-of-stock</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reports Out Of Stock'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-reports-sales-by-product</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reports Sale Reports By Products'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-reports-coupons-by-dateWcfm</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reports Coupons By Date'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-reports-low-in-stock</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reports Low In Stock'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-profile</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='profile'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-settings</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='settings'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-capability</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='capability'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-knowledgebase</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='knowledgebase'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-knowledgebase-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='knowledgebase-manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-notices</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='notices'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-notice-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='notice-manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-notice-view</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='notice-view'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-messages</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='messages'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-groups</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='groups'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-groups-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='groups-manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-managers</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='managers'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-managers-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='managers-manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-staffs</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='staffs'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-staffs-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='staffs-manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-vendors</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='vendors'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-vendors-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='vendors-manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-groups-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Groups Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Managers-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Managers Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-staff</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Staff Manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Staff Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Vendor</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Vendor '
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Vendor Vendor</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Vendor New'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Vendor-Manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Vendor Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-payments</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='payments'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Withdrawal</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Withdrawal Request</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Withdrawal Request'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Transaction Details</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Transaction Details'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-enquries</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Enquries'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-enquries manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Enquries Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Customers</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Customers'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm customer manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Customer Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm customer Details</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Customer Details'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-articles</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-article-manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Articles Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm refund-request</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Refund Request'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Sell Iitems Catalog</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Add To My Store Catlog'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Fllowers</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Followers'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Fllowings</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Followings'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Supports</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Supports'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm-Supports Manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Supports Manage '
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Chat box</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Chatbox'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Chats Offline</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Products'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Chat History </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Chat History'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Member Ship</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Member Ship'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Member Ship Manage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Member Ship Manage'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Wcfm Member Ship Settings</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Products'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">Store End Points
                                            </h4>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">About</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='About'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Articles</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">Policies</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Policies'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Reviews</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Reviews'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Fllowers</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Fllowers'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Fllowings</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Fllowings'
                                            // onChange={handleChange}
                                            />

                                        </div>

                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0 p-2">My Account End Points
                                            </h4>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Inquiry</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Inquiry'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">View Inquiry</label>
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
                                            <label for="exampleFormControlInput1" class="form-label">Followings</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Fllowings'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Supports Tickets</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='Supports Ticket'
                                            // onChange={handleChange}
                                            />

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">View Supports Ticket</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={""}
                                                // name=""
                                                placeholder='View Supports Tickets'
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

export default DashboardPages
