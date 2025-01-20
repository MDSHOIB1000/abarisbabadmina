
import { useEffect, useState } from 'react'
import '../PackageList/packageList.css'
import { packList } from '../../../../api/login/Login'
import { Link } from 'react-router-dom'
function PackageList() {

    const [data, setData] = useState(null)

    function createMarkup(data) {
        return { __html: data };
    }

    const packageList = async () => {
        try {
            const res = await packList()
            // console.log(res);
            setData(res?.data?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        packageList()
    }, [])
    return (
        <>
            <div className="PageHeading">
                <h1>Package List</h1>
            </div>
            <div className="ContentArea">
                <div className='form-row'>
                    {data && data?.map((item) => {
                        console.log(item?.isPurchased);
                        return <div className="col-lg-4" key={item?._id} >
                            <div className="boxes">
                                <div className="box">
                                    <div>
                                        <img src={`https://api.paypandabnk.com/api/cloudinary/${item?.icon_img}`} />
                                    </div>
                                    <p className='head-p'>
                                        <p>
                                            <div><strong>Package Name : </strong></div>
                                            <div>{item?.package_name}</div>
                                        </p>

                                        <p>
                                            <div><strong>Description : </strong></div>

                                            <div
                                                className="products-details-tab-content products-details-tab-content-2"
                                                dangerouslySetInnerHTML={createMarkup(
                                                    item?.description
                                                )}
                                            />

                                        </p>


                                        {/* <p>
                                            <div><strong>Tax : </strong></div>
                                            <div>{item?.tax}</div>
                                        </p>
                                        <p>
                                            <div><strong>Tax Type : </strong></div>
                                            <div>{item?.tax_type}</div>
                                        </p>
                                        <p>
                                            <div><strong>Duration : </strong></div>
                                            <div>{item?.duration}</div>
                                        </p>
                                        <p>
                                            <div><strong>Duration Type : </strong></div>
                                            <div>{item?.durationType}</div>
                                        </p> */}

                                    </p>

                                    <h1 >
                                        {!item?.isPurchased ? (
                                            <Link to={`/package-details/${item?._id}`} className='btn btn-success'>
                                                View Details
                                            </Link>
                                        ) : (
                                            <button className='btn btn-success' disabled>
                                                View Details
                                            </button>
                                        )}

                                    </h1>
                                </div>
                            </div>
                        </div>
                    })}


                </div>
            </div >
        </>
    )
}
export default PackageList