import React from 'react'
import img1 from "../../../../../assets/images/kyc/default-photo.jpg"
function Dashboard() {
    const checkboxData = [
        { id: "disableQuickAccess", label: "Disable Quick Access" },
        { id: "disableWelcomeBox", label: "Disable Welcome Box" },
        { id: "disableWcfmMenu", label: "Disable WCFM Menu" },
        { id: "disableThemeHeader", label: "Disable Theme Header" },
        { id: "disableWcfmFullView", label: "Disable WCFM Full View" },
        { id: "disableWcfmSlickMenu", label: "Disable WCFM Slick Menu" },
        { id: "disableWcfmHeaderPanel", label: "Disable WCFM Header Panel" },
        { id: "disableFloatButton", label: "Disable Float Button" },
        { id: "disableCategoryChecklist", label: "Disable Category Checklist" },
        { id: "disableTagsInputBox", label: "Disable Tags Input Box" },
        { id: "disableUltimateNotice", label: "Disable Ultimate Notice" },
    ];

    return (
        <>
            <div className="row">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Dashboard Setting
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Logo</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                value={""}
                                                name="name"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-2 mb-3">
                                            <div className='border p-2'>
                                                <img src={img1} alt='img' className='w-100'/>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Quick Action Icon</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                value={""}
                                                
                                                name="name"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-2 mb-3"><div className='border p-2'>
                                                <img src={img1} alt='img' className='w-100'/>
                                            </div></div>
                                        <div className="col-xl-12 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">  My Store Label</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={""}
                                                placeholder='My Store Label'
                                                name="name"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        {checkboxData?.map((item) => {
                                            return <div className="col-xl-12 mb-3">
                                                <div class="d-flex align-items-center">
                                                    <input type="checkbox" id="exampleFormControlInput1" class="form-check-input me-2 border-3 " style={{ height: "25px", width: "25px" }} />
                                                    <label for="exampleFormControlInput1" class="form-label mb-0  " >{item?.label}</label>
                                                </div>
                                            </div>
                                        })}
                                        
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

export default Dashboard
