
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function StatusChangeRequestHistory(props) {

    // console.log(props);



    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-align-center'>
                        Payment Request By Member
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="txtUserId">Date :</label>

                                <input className="form-control datefield" id="txtFrom" type="text" name="date" value={new Date(props.updateInitialMemberHistory.createdAt).getDate() + "/" + Number(new Date(props.updateInitialMemberHistory.createdAt).getMonth() + 1) + "/" + new Date(props.updateInitialMemberHistory.createdAt).getFullYear() + "," + new Date(props.updateInitialMemberHistory.createdAt).getHours() + ":" + new Date(props.updateInitialMemberHistory.createdAt).getMinutes()} disabled />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="txtUserId">Amount :</label>
                                <input className="form-control datefield" id="txtFrom" type="number" name="amount" value={props.updateInitialMemberHistory.amount} disabled />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="txtUserId">Remarks :</label>
                                <input className="form-control datefield" id="txtFrom" type="text" name="remark" value={props.updateInitialMemberHistory.remark} disabled />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="txtUserId">Security Pin :</label>
                                <input className="form-control datefield" id="txtFrom" type="password" name="pin" placeholder='Security Pin' value={props.updateInitialMemberHistory.pin} onChange={props.handleChangeUpdate} />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div classname="mb-3">
                                <label htmlFor="ddldb">Select Status</label>
                                <select className="form-select" aria-label="Default select example" name="status" value={props.updateInitialMemberHistory.status} onChange={props.handleChangeUpdate}>
                                    <option selected>Select Status</option>
                                    <option value={"Pending"}>Pending</option>
                                    <option value={"Approved"}>Approved</option>
                                    <option value={"Rejected"}>Rejected</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Button onClick={props.updateData}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default StatusChangeRequestHistory