import { Link } from "react-router-dom"


function AddAepsPayout() {
    return (
        <>
            <div className="PageHeading">
                <h1>ADD BANK</h1>
            </div>

            <div className="ContentArea">
                <div className="card" style={{ overflow: 'auto' }}>
                    <div className="card-header"><span>ADD BANK</span></div>
                    <div className="card-body">

                        <form id="frmregister" name="frmregister" method="post" action="https://m.masterpay.pro/Retailer/Payment_withdrawal_main/Addbeneficiary?idgs=925ab4003e80729abcd4151d7f88f2f59aa2011b73a7b66d858cf8c46d78f7a0eaa37b05c5c70e420d05cfc0573b0690e8877b9553339481cd90fde08e31a7b8c6lPGSivWJfb9CCJOsaKVPnN01W~kYJNJB4XpEkOzRA-" autoComplete="off">
                            <input type="hidden" id="hidsession_id" name="hidsession_id" defaultValue="a3ral1ah4prgfo42d1b58qa5btpg6129" />
                            <input type="hidden" id="hidaction" name="hidformaction" />
                            <input type="hidden" id="hidbankname" name="hidbankname" />
                            <table border={0} className="table">
                                <tbody>
                                    <tr>
                                        <td style={{ fontSize: 14, fontWeight: 'bold', width: 200, minWidth: 200 }}>Account Name:</td>
                                        <td align="left">
                                            <input style={{ width: 300, height: 50, fontWeight: 'bold' }} type="text" className="form-control" id="txtbeneName" maxLength={40} name="txtbeneName" placeholder="Enter Name" tabIndex={1} required fdprocessedid="qsa2eh" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 14, fontWeight: 'bold', width: 200, minWidth: 200 }}>Account Number:</td>
                                        <td align="left">
                                            <input style={{ width: 300, height: 50, fontWeight: 'bold' }} type="text" className="form-control" id="txtAccountNumber" maxLength={20} name="txtAccountNo" placeholder="Enter Account Number" tabIndex={2} fdprocessedid="qhkh9" /><sup id="txtAccCounter" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 14, fontWeight: 'bold', width: 200, minWidth: 200 }}>Confirm Account Number:</td>
                                        <td align="left">
                                            <input style={{ width: 300, height: 50, fontWeight: 'bold' }} type="text" className="form-control" id="txtCAccountNumber" maxLength={20} name="txtCAccountNumber" placeholder="Enter Confirm AccountNumber" tabIndex={3} fdprocessedid="6zmtnc" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 14, fontWeight: 'bold', width: 200, minWidth: 200 }}>Select bank:</td>
                                        <td align="left">
                                            <select id="dropdownbank" name="ddlbank" className="form-control select2" style={{ width: 300, height: 50, fontWeight: 'bold' }} >
                                                <option value={2}>Select</option>
                                                <option value={466} ifsc="HDFC0CMAN01">ABHINANDAN URBAN COOP BANK LTD.                                                    </option>
                                                <option value={17} ifsc="ABHY0065001">Abhyudaya Co-Op Bank ltd</option>
                                                <option value={18} ifsc="ADCB0000001">Abu Dhabi Commercial Bank</option>
                                                <option value={886} ifsc="IBKL0100ACB">ACE Cooperative Bank Ltd</option>
                                                <option value={497} ifsc="HDFC0CPDPBK">ADARNIYA P D PATILSAHEB SAHAKARI BANK LTD KARAD                                                   </option>
                                                <option value={433} ifsc="ICIC00ADRSH">Adarsh Co-Operative bank Hyderabad                                                                </option>
                                                <option value={615} ifsc="HDFC0CADARS">ADARSH COOPERATIVE BANK RAJASTHAN                                                                 </option>
                                                <option value={580} ifsc="YESB0AMSB01">ADARSH MAHILA NAGARI SAHAKARI BANK LTD AURANGABAD                                                 </option>
                                                <option value={246} ifsc="GSCB0ADC001">Ahmedabad District Central Co-Op Bank ltd.</option>
                                                <option value={79} ifsc="AMCB0RTGS4S">Ahmedabad Mercantile Co-Op Ban</option>
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 18, fontWeight: 'bold', width: 200, minWidth: 200 }}>IFSC Code :</td>
                                        <td align="left">
                                            <input style={{ width: 220, height: 50, fontWeight: 'bold' }} type="text" className="form-control" id="txtIfsc" maxLength={11} name="txtIfsc" placeholder="Enter IFSC" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td align="left">
                                            <input type="button" className="btn btn-primary mr-2" defaultValue="Submit" id="btnReg" name="btnReg" onclick="formsubmission()" fdprocessedid="u5hvcn" />
                                            <input type="button" className="btn btn-success mr-2" defaultValue="Verify" id="btnReg" name="btnReg" onclick="validate_bene_name()" fdprocessedid="3y8dxr" />
                                            <Link to="/admin/aeps-payout-account">
                                                <input type="button" className="btn btn-dark" defaultValue="Back" id="btnBankacc" name="btnBankacc" fdprocessedid="xtslep" /></Link>
                                            <br />
                                            <br />
                                            <p><b>Note : Account Verification Charges 3 Rupees Will Be Debited.</b></p>
                                            <p><b>Note : You can add maximum 5 bank accounts!. </b></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input type="hidden" id="hiddashboardurl" />
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default AddAepsPayout