import { Navigate, Outlet } from "react-router-dom"
import DasRightSectionPage from "../admin/daseBoardRightSection/DasBoardRightSection"


function PrivateRoute({ component: component, ...rest }) {
    const token = window.localStorage.getItem('userIdToken')
    return token ? <DasRightSectionPage /> : <Navigate to='/login-area' />
}
export default PrivateRoute