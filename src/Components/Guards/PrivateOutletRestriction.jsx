import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../Hooks'

const PrivateOutletRestriction = ({children})=>{
    const authDetails = useAuth();
    const location = useLocation();
    console.log(location);
    return authDetails.isLoggedIn === false ? children : <Navigate to="/"/>
}

export default PrivateOutletRestriction;