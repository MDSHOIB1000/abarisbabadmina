import { useEffect, useState } from "react";
import MobilePlan from "../mobileRecharge/mobilePalan/MobilePlan"
import Select from "react-select"
import { operatorApi } from "../../../../../api/login/Login";
import PostPaidRechargeList from "./postPaidRechargeList/PostPaidRechargeList";

function PostPaidRecharge() {
    const [showBanak, setShowBank] = useState()
    const [bankData, setBankData] = useState(null)
    console.log(bankData);
    // console.log(showBanak?.bankID);

    const bankChange = (e) => {
        console.log(e);
        // const clone = { ...initialValue }
        // // if (name == 'bank_id') {
        // const findIfac = bankData.find((item) => {
        //     // console.log(item);
        //     return item?.bankID == e.bankID
        // })
        // // console.log(findIfac);
        // let abc = findIfac?.ifsc_code
        // let bankName = findIfac?.bank_name
        // // console.log(findIfac, abc);
        // const clone2 = { ...clone, ifsc: abc == 'NULL' ? "" : abc, bank_name: bankName }
        // // console.log({ ...initialData, account_number: abc });
        // setInitialValue(clone2)

        setShowBank(e)

    }



    const postPaidrechargeOperator = async () => {
        const electricity = '6655db77d0ff3e6928e2c27f'
        try {
            const res = await operatorApi(electricity)
            console.log(res?.data.data);
            const maped = res?.data?.data?.map((item) => {
                // console.log(item);
                return { ...item, label: item.name }
            })
            setBankData(maped)
        } catch (error) {

        }
    }
    useEffect(() => {
        postPaidrechargeOperator()
    }, [])
    return (
        <>
            <div className="PageHeading">
                <h1>Postpaid Recharge</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    {/* <div className="card-header"><span>Filter</span></div> */}
                    <div className="card-body">

                        <input type="hidden" id="hidID" name="hidID" />
                        <div className="form-row">
                            {/* <div className="tab-pane fade active show in" id="DTH" role="tabpanel" aria-labelledby="DTHTab">
                                <div className="row"> */}
                            <div className="col-md-5 col-sm-12">
                                <h2 className="SecTitle">Postpaid Recharge</h2>
                                <form id="frmDthrecahrge" name="frmrecahrge" method="post" action="#" className="CustomForm fl-form ng-pristine ng-valid" autoComplete="off">
                                    <input type="hidden" id="hidSubmitRecharge" name="hidSubmitRecharge" defaultValue="Success" autoComplete="off" />
                                    <div className="form-group">
                                        <div className="fl-wrap fl-wrap-input">
                                            <label htmlFor="txtDthNo" className="">MOBILE NUMBER</label>
                                            <input type="text" className="form-control fl-input" id="txtDthNo" maxLength={40} name="txtMobileNo" placeholder="Enter Mobile Number" data-placeholder="Enter Mobile Number" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="fl-wrap fl-wrap-select">
                                            <label htmlFor="ddlDthOperator" className="">SELECT OPERATOR</label>
                                            <Select
                                                // isMulti
                                                // defaultValue={showCateg}
                                                value={showBanak}
                                                name="showBanak"
                                                options={bankData}
                                                className="games-dropdown-2 customsection"
                                                classNamePrefix="select"
                                                onChange={bankChange}

                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="fl-wrap fl-wrap-input">
                                            <label htmlFor="txtDthAmount" className="">AMOUNT</label>
                                            <input type="text" style={{ cursor: 'text !important', backgroundColor: 'white' }} className="form-control txtAmountDthRec fl-input" id="txtDthAmount" maxLength={20} name="txtAmount" placeholder="Amount" tabIndex={3} onfocus="if (this.hasAttribute('readonly')) { this.removeAttribute('readonly');this.blur();    this.focus();  }" data-placeholder="Enter Amount" /></div><span className="numtowords_output" id="numtowords_outputDthRec" style={{ display: 'none' }} />
                                    </div>

                                    <div className="FormButtons">
                                        <button type="button" className="btn btn-success">Submit</button>
                                    </div>
                                </form>
                                <MobilePlan />
                            </div>
                            <PostPaidRechargeList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostPaidRecharge