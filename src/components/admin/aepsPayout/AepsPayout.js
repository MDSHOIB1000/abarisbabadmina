import { Link } from "react-router-dom"

function AepsPayout() {
    return (
        <>
            <div className="PageHeading">
                <h1>Aeps Payout Account</h1>
            </div>

            <div className="ContentArea">
                <div className="card p-2 mb-3 rounded">
                    <div className="text-danger">
                        <p className="mb-1"><strong>Pay attention:</strong> Your payout limit will be reset on every month end.</p>
                        <p className="mb-0"><strong>ध्यान दें:</strong> आपकी पेआउट सीमा हर महीने के अंत में रीसेट कर दी जाएगी।</p></div>
                </div>

                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-header"><span>Aeps Payout Account</span></div>
                    <div className="card-body">
                        <div>
                            <p className="alert py-1 px-2 d-inline-block">
                                <b>Note :</b> <strong>You can add maximum 5 bank accounts!.</strong> </p><br />
                        </div>
                        <div className="GridUi no-header-footer-grid" id="all_transaction">
                            <table className="table table-bordered">
                                <tbody><tr>
                                    <th>Sr.</th>
                                    <th>Account Name</th>
                                    <th>Account Number</th>
                                    <th>IFSC Code</th>
                                    <th>Transfer Now</th>
                                    {/*  <th></th> */}
                                </tr>
                                </tbody></table>
                            <div className="divsmcontainer" style={{ textAlign: 'center' }}>
                                <Link to="/admin/add-aeps-payout-account" className="btn btn-primary">Add New Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default AepsPayout