import { message, Pagination, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import { deleteStaffpermision, getStaffpermision } from '../../../api/login/Login'

function ListStaffPermision() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Roles & Permisions",
        title_2: "List Staff",
    }
    const [state, setState] = useState()
    const [loading, setLoading] = useState(0)
    const [page, setPage] = useState(0)
    const [count, setCount] = useState(10)
    const getStaffList = async () => {
        try {
            const res = await getStaffpermision(page,count)
            setState(res?.data)
        } catch (error) {
            alert(error?.message)
        }
    }
    useEffect(() => {
        getStaffList(page)
    }, [])
    const deleteStaff = async (id) => {
        setLoading(true)
        try {
            await deleteStaffpermision(id)
            getStaffList(page)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    const confirm = (id) => {
        console.log(id);
        deleteStaff(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Staff List</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/admin/add-staff" role="button" aria-controls="offcanvasExample">+ ADD STAFF</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                S.No
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                 Name
                                            </th>
                                            
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                Email
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Phone</th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Role</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Floor</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Area</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Building</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Block</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Office</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Ward</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Department</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Designation</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Actions </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state?.map((item,i)=>{
                                            console.log(item);
                                            return <tr role="row" className="odd">
                                            <td>
                                            {(i + 1) + (page * count)}
                                            </td>
                                            <td>{item?.name}</td>
                                            
                                            <td>
                                                {item?.email}
                                            </td>
                                            <td>
                                                {item?.mobile}
                                            </td>
                                            <td>
                                                {item?.role_name}
                                            </td>
                                            <td>
                                                {item?.floor_id}
                                            </td>
                                            <td>
                                                {item?.area_id}
                                            </td>
                                            <td>
                                                {item?.building_id}
                                            </td>
                                            <td>
                                                {item?.block_id}
                                            </td>
                                            <td>
                                                {item?.office_id}
                                            </td>
                                            <td>
                                                {item?.ward_id}
                                            </td>
                                            <td>
                                                {item?.department_id}
                                            </td>
                                            <td>
                                                {item?.designation_id}
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to={`/admin/update-staff/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <Popconfirm
                                                        title="Delete Staff !"
                                                        description="Are you sure to delete ?"
                                                        onConfirm={() => confirm(item?._id)}
                                                        onCancel={cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                    </Popconfirm>
                                                </div>

                                            </td>

                                        </tr>
                                        })}
                                        
                                    </tbody>
                                </table>
                                    < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        {/* Total {totalCount} entries */}
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}

                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ListStaffPermision
