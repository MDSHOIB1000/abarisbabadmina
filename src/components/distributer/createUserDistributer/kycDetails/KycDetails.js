import React, { useState } from 'react'
import { baseUrlImage } from '../../../../baseUrl';
import dummyAdhaarFront from "../../../../assets/images/kyc/adhaarFront.png"
import dummyAdhaarBack from "../../../../assets/images/kyc/adhharBack.png"
import gst from "../../../../assets/images/kyc/kycCirtificate.png"
import pancard from "../../../../assets/images/kyc/panCard.png"
import bankProof from "../../../../assets/images/kyc/bankProof.png"
import kycVid from "../../../../assets/images/kyc/kycVideo.png"
import kycVideo from "../../../../assets/images/kyc/kycvideos.mp4"
import "../kycDetails/KycDetails.css"
import KycModals from './kycModals/KycModals';
import { FaEye } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { ModalImgShow } from './ModalImgShow';


function KycDetails({ initialValues, state }) {
    const [open, setOpen] = useState(false);
    console.log(state.kycVideo);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cantain, setcantain] = useState({})

    const CLickImgShow = (url, str) => {
        handleShow()
        setcantain({ url: url, str: str })
    }
    return (
        <section className="ListDistributer m-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1 style-11">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>KYC DETAILS LIST</b></h4>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"></div>
                                    <div className='row'>
                                        <div className='col-xl-3'>
                                            <div className="card-body p-0 m-4">
                                                <div className="table-responsive active-projects style-1 style-11">
                                                    <div className="tbl-caption  justify-content-center">
                                                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Aadhar Card  Front</b></h4>
                                                    </div>
                                                    <div className="card mt-3" style={{}} onClick={() => { CLickImgShow(initialValues?.docs?.adhaar_front_card, 'Aadhaar Front') }}>
                                                        {initialValues?.docs?.adhaar_front_card ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${initialValues?.docs?.adhaar_front_card}`} alt='document' width={100 + "%"} />
                                                                </picture>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={dummyAdhaarFront} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'><strong>Aadhar Front Not Found</strong></figcaption>
                                                            </div>
                                                        )}
                                                        <div className="eyeV"><FaEye /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className="card-body p-0 m-4">
                                                <div className="table-responsive active-projects style-1 style-11">
                                                    <div className="tbl-caption  justify-content-center">
                                                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Aadhar Card Back</b></h4>
                                                    </div>
                                                    <div className="card mt-3" style={{}} onClick={() => { CLickImgShow(initialValues?.docs?.adhaar_back_card, 'Aadhar Card Back') }}>

                                                        {initialValues?.docs?.adhaar_back_card ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${initialValues?.docs?.adhaar_back_card}`} alt='document' width={100 + "%"} />
                                                                </picture>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={dummyAdhaarBack} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'>
                                                                    <strong>Aadhar Back Not Found</strong>
                                                                </figcaption>
                                                            </div>
                                                        )}
                                                        <div className="eyeV"><FaEye /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className="card-body p-0 m-4">
                                                <div className="table-responsive active-projects style-1 style-11">
                                                    <div className="tbl-caption  justify-content-center">
                                                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Pan Card</b></h4>
                                                    </div>
                                                    <div className="card mt-3" style={{}} onClick={() => { CLickImgShow(initialValues?.docs?.pan_card, 'Pan Card') }}>

                                                        {initialValues?.docs?.pan_card ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${initialValues?.docs?.pan_card
                                                                        }`} alt='document' width={100 + "%"} />
                                                                </picture>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={pancard} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'>
                                                                    <strong>PAN CardNot Found</strong>
                                                                </figcaption>
                                                            </div>
                                                        )}
                                                        <div className="eyeV"><FaEye /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className="card-body p-0 m-4">
                                                <div className="table-responsive active-projects style-1 style-11">
                                                    <div className="tbl-caption  justify-content-center">
                                                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Bank Proof</b></h4>
                                                    </div>
                                                    <div className="card mt-3" style={{}} onClick={() => { CLickImgShow(initialValues?.docs?.bank_proof, 'Bank Proof') }}>

                                                        {initialValues?.docs?.bank_proof ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${initialValues?.docs?.bank_proof}`} alt='document' width={100 + "%"} />
                                                                </picture>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={bankProof} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'>
                                                                    <strong>Bank Proof Not Found</strong>
                                                                </figcaption>
                                                            </div>
                                                        )}
                                                        <div className="eyeV"><FaEye /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className="card-body p-0 m-4">
                                                <div className="table-responsive active-projects style-1 style-11">
                                                    <div className="tbl-caption  justify-content-center">
                                                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>GST Cirtificate</b></h4>
                                                    </div>
                                                    <div className="card mt-3" style={{}} onClick={() => { CLickImgShow(initialValues?.docs?.gst, 'GST Cirtificate') }}>

                                                        {initialValues?.docs?.gst ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${initialValues?.docs?.gst}`} alt='document' width={100 + "%"} />
                                                                </picture>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={gst} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'>
                                                                    <strong>GST Cirtificate Not Found</strong>
                                                                </figcaption>
                                                            </div>
                                                        )}
                                                        <div className="eyeV"><FaEye /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className="card-body p-0 m-4">
                                                <div className="table-responsive active-projects style-1 style-11">
                                                    <div className="tbl-caption  justify-content-center">
                                                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>KYC Video</b></h4>
                                                    </div>
                                                    {/* <div className="card mt-3" style={{}}>
                                                        {state?.kycVideo ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <video src={`${baseUrlImage}${state?.kycVideo}`} alt='document' width={100 + "%"} muted autoPlay />
                                                                    <img src={kycVid} alt='document' width={100 + "%"} />
                                                                </picture>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={kycVid} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'>
                                                                    <strong>KYC Video Not Found</strong>
                                                                </figcaption>
                                                            </div>
                                                        )}
                                                    </div> */}
                                                    <div className="card mt-3" style={{}}>
                                                        {state?.kycVideo ? (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    {/* <video src={`${baseUrlImage}${state?.kycVideo}`} alt='document' width={100 + "%"} muted autoPlay /> */}
                                                                    <video src={`${baseUrlImage}${state?.kycVideo}`} width={100 + "%"} />
                                                                </picture>
                                                                <span class="play-btn playPosition" onClick={() => setOpen(true)}></span>
                                                            </div>
                                                        ) : (
                                                            <div className="preferably-square" >
                                                                <picture>
                                                                    <img src={kycVid} alt='document' width={100 + "%"} />
                                                                </picture>
                                                                <figcaption className='text-center p-2'>
                                                                    <strong>KYC Video Not Found</strong>
                                                                </figcaption>
                                                            </div>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <KycModals open={open} setOpen={setOpen} 
            kycVideo={kycVideo} 
            // kycVideo={state?.kycVideo ? state?.kycVideo : kycVideo} 
            />

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                size='sm'
                className='naomedClass'
            // style={{width:"500px" , margin:"auto"}}
            >
                <ModalImgShow handleClose={handleClose} cantain={cantain} />
            </Modal>

        </section>
    )
}

export default KycDetails
