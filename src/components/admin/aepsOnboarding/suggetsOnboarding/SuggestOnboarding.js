

function SuggestOnboarding({ onBoardingApiCall }) {
    return (
        <>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Onboarding Document Requirment</span></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="seggest-point">
                                    <h2>Onboarding Document Requirment</h2>
                                </div>
                                <div className="seggest-point">
                                    <p>1- Merchant Original Pancard image.</p>
                                    <p>2- Merchant Original AADHAR IMAGE image.</p>
                                    <p>3- Onboarding STATE SHOULD match Aadhaar address.</p>
                                </div>
                                <div className="btn-section">
                                    <button type="button" className="btn btn-success" onClick={onBoardingApiCall}>Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SuggestOnboarding