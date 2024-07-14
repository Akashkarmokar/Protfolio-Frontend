import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks";
import Cookies from "js-cookie";
import { makeToast } from "../Helpers";

const Navbar = ()=>{
    const { pathname } = useLocation();

    const { isUserLoggedIn,setIsLooggedIn,setUserDetails  } = useAuth()

    const AppMode = import.meta.env.VITE_REACT_APP_MODE 

    const HandleLogoutAction = ()=> {
        Cookies.remove('token')
        setIsLooggedIn(false)
        setUserDetails(null)
        makeToast("Log out succesfully !!")

    }
    return (
        <>
            <div className="main-container my-2">
                <div className="flex justify-between">
                    <div className="ml-5">
                        <h1 className="text-2xl" title="As known">[ Ak ]</h1>
                    </div>
                    <div className="mr-5 flex">
                        {/* <div className="flex flex-col">
                            <NavLink to="/" className="mx-1 my-0">Home</NavLink>
                            { pathname === '/'? <h1 className="text-center text-[#00DF9A]">^</h1> : null}
                        </div> */}
                        <div className="flex flex-col">
                            <NavLink to="/" className="mx-1">Home</NavLink>
                            { pathname === '/' ? <h1 className="text-center text-[#00DF9A]">^</h1>: null }
                        </div>
                        {
                            isUserLoggedIn === true ? <div className="flex flex-col">
                                <NavLink to="/dashboard" className="mx-1">Dashboard</NavLink>
                                { pathname === '/dashboard' ? <h1 className="text-center text-[#00DF9A]">^</h1> : null}
                            </div> : null 
                        }
                        { isUserLoggedIn === true ? 
                            <div className="flex flex-col">
                                <NavLink to="/" className="mx-1" onClick={HandleLogoutAction}>Logout</NavLink>
                            </div> : null
                        }
                        { 
                            AppMode === 'development' && 
                            isUserLoggedIn === false ? 
                            <div className="flex flex-col">
                                <NavLink to="/signin" className="mx-1">Signin</NavLink>
                            </div> : null
                        }
                        { 
                            AppMode === 'development' && 
                            isUserLoggedIn === false ? 
                            <div className="flex flex-col">
                                <NavLink to="/signup" className="mx-1">Signup</NavLink>
                            </div> : null
                        }
                        
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar;