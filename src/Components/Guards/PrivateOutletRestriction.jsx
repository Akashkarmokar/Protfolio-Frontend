import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../Hooks'

const PrivateOutletRestriction = ({children})=>{
    // return children
    const { userInfo , UserInfoHandler } = useAuth();
    return userInfo.role === "ADMIN" ? children : <Navigate to="/"/>
}

export default PrivateOutletRestriction;