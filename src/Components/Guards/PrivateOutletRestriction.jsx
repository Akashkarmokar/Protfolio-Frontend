import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../Hooks'

const PrivateOutletRestriction = ({children})=>{
    return children
    const authDetails = useAuth();
    return authDetails.isUserLoggedIn === false ? children : <Navigate to="/"/>
}

export default PrivateOutletRestriction;