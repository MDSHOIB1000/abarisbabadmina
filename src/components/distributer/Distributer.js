
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import '../../components/distributer/distributer.css'
import DistributerKycStatus from './distributerKycStatus/DistributerKycStatus'
import DistributerList from './distributerList/DistributerList'
import { useEffect, useState } from 'react'
import { getLength, reailerDistIdAgainst, reailerDistIdAgainstFillers, updateDistributerApproval } from '../../api/login/Login'
import { toast } from 'react-toastify'
import DisterbuterFIlter from './distributerKycStatus/DisterbuterFIlter'
function Distributer() {
    const params = useParams()
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState()
    const userId = params?.id
    // const [userTypeLength, setUserTypeLength] = useState([]);
    const [page, setPage] = useState(0)
    const [count, setCount] = useState(10)
    const [approval, setApproveVal] = useState(false)
    const [initialValues, setInitialValues] = useState(
        { merchant: "", page: page, count: count, id: params?.id }
    );


    const submitForm = async (values) => {
        setLoading(true)
        try {
            const res = await reailerDistIdAgainstFillers({...values ,page: page, count: count,id: params?.id});
            setState(res?.data);
            setLoading(false)
        } catch (error) {

        }
    }
    const getReailerDistIdAgainst = async (page) => {
        setLoading(true)
        try {
            const res = await reailerDistIdAgainst(page, count, userId)
            setTotalCount(res?.data?.count)
            setState(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }

    const onChangeVal = (e) => {
        getReailerDistIdAgainst(e - 1)
        setPage(e - 1)
    };

    useEffect(() => {
        getReailerDistIdAgainst(page)
    }, [params?.id])
    useEffect(() => {
        getReailerDistIdAgainst(page)
    }, [])

    const [dowm, setDown] = useState(false)

    const dropdownOpen = () => {
        setDown(!dowm)
    };

    const toastSuccessMessage = () => {
        toast.success(`Status Updated Successfully.`, {
            position: "top-center",
        });
    };
    const errorMessage = () => {
        toast.error(`Status Not Updated.`, {
            position: "top-center"
        })
    }

    // console.log(state);

    const handleChange = async (e, id) => {
        const val = e.target.value;
        console.log(val);
        setLoading(true)
        try {
            const res = await updateDistributerApproval({ is_approved:val }, id);
            setApproveVal(val);
            if (res?.statusCode == "200") {
                toastSuccessMessage();
                getReailerDistIdAgainst(page)
            }
        } catch (error) {
            errorMessage()
        };
        setLoading(false)
    };

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: params?.name,
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            {/* <DistributerKycStatus submitForm={submitForm} params={params} initialValues={initialValues} /> */}
            <DisterbuterFIlter params={params}  submitForm={submitForm} getReailerDistIdAgainst={getReailerDistIdAgainst}/>
            <DistributerList loading={loading} params={params} state={state} handleChange={handleChange} onChangeVal={onChangeVal} approval={approval}/>
        </>
    )
}
export default Distributer