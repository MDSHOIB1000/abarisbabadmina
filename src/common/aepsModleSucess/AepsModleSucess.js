import { Button, Modal } from "react-bootstrap"

import '../../common/aepsModleSucess/aepsModel.css'
import succees from '../../asesets/logo/accepted.gif'

function AepsModalSucess(props) {
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props?.adharPay}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* <div id="successMessage" class="success-message">
                            <div>
                                <div class="icon blink">&#10003;</div>
                                <p>Transaction Successful!</p>
                            </div>
                        </div> */}

                        {/* blanceEnquiry */}
                        <div className="success-messagee">
                            <img src={succees} alt="" />
                        </div>
                        {props?.dataModal?.message == 'AEPS Balance Enquiry Success' ? <div className="mt-3">
                            <div className="headList">
                                <p className="size-change">Available Balance : </p>
                                <p className="colo-change">{props?.dataModal?.balanceamount}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">Bank Name : </p>
                                <p className="colo-change">{props?.dataModal?.bank_name}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">Bank Ref. No : </p>
                                <p className="colo-change">{props?.dataModal?.bank_rrn}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">Aadhaar No : </p>
                                <p className="colo-change">xxxx-xxxx-{props?.dataModal?.lastAadhar}</p>
                            </div>
                        </div> : ''}

                        {/* caseWithdrow */}

                        {props?.dataModal?.message == 'AEPS Transaction Success' ? <div className="mt-3">
                            <div className="headList">
                                <p className="size-change">Amount : </p>
                                <p className="colo-change">{props?.dataModal?.amount}</p>
                            </div>
                            {/* <div className="headList">
                                <p className="size-change">Available Balance : </p>
                                <p className="colo-change">{props?.balanceamount}</p>
                            </div> */}
                            <div className="headList">
                                <p className="size-change">Bank Name : </p>
                                <p className="colo-change">{props?.dataModal?.bank_name}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">Bank Ref. No : </p>
                                <p className="colo-change">{props?.dataModal?.bank_rrn}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">transaction ID : </p>
                                <p className="colo-change">{props?.dataModal?.txn_id}</p>
                            </div>
                            {/* <div className="headList">
                                <p className="size-change">transaction ID : </p>
                                <p className="colo-change">{props?.dataModal?.iin}</p>
                            </div> */}
                        </div> : ''}


                        {/* miniStatement */}

                        {props?.dataModal?.message == 'Mini statement has been generated successfully.' ? <div className="mt-3">
                            <div className="headList">
                                <p className="size-change">Amount : </p>
                                <p className="colo-change">{props?.dataModal?.balanceamount}</p>
                            </div>
                            {/* <div className="headList">
                                <p className="size-change">Available Balance : </p>
                                <p className="colo-change">{props?.balanceamount}</p>
                            </div> */}
                            <div className="headList">
                                <p className="size-change">Aadhaar No : </p>
                                <p className="colo-change">xxxx-xxxx-{props?.dataModal?.last_adhaar}</p>
                            </div>

                            <div className="">
                                <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting">Date</th>
                                            {/* <th className="sorting">
                                            Update Date
                                        </th> */}
                                            <th className="sorting">
                                                Amount
                                            </th>
                                            <th className="sorting">
                                                Transaction Type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props?.dataModal && props?.dataModal?.ministatement?.map((item) => {
                                            // console.log(item);
                                            return <tr className="odd" key={item?._id}>
                                                <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + "," + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td>
                                                {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                                                <th valign="top" className="dataTables_empty">
                                                    {item?.amount}
                                                </th>
                                                <td valign="top" className="dataTables_empty">{item?.txnType}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div> : ''}


                        {/* addharPay */}
                        {props?.dataModal?.message == 'AEPS Transaction Successsewff' ? <div className="mt-3">
                            <div className="headList">
                                <p className="size-change">Amount : </p>
                                <p className="colo-change">{props?.dataModal?.amount}</p>
                            </div>
                            {/* <div className="headList">
                                <p className="size-change">Available Balance : </p>
                                <p className="colo-change">{props?.balanceamount}</p>
                            </div> */}
                            <div className="headList">
                                <p className="size-change">Bank Name : </p>
                                <p className="colo-change">{props?.dataModal?.bank_name}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">Bank Ref. No : </p>
                                <p className="colo-change">{props?.dataModal?.bank_rrn}</p>
                            </div>
                            <div className="headList">
                                <p className="size-change">transaction ID : </p>
                                <p className="colo-change">{props?.dataModal?.txn_id}</p>
                            </div>
                            {/* <div className="headList">
                                <p className="size-change">transaction ID : </p>
                                <p className="colo-change">{props?.dataModal?.iin}</p>
                            </div> */}
                        </div> : ''}

                        <div className="btn-section-success">
                            <p>
                                Want to make CashWithdrawal ?
                            </p>
                            <div className="btn-set">
                                <button type="button" className="btn btn-success btn-success-2">OK</button>
                                <button type="button" className="btn btn-success" onClick={props.onHide}>NO</button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default AepsModalSucess