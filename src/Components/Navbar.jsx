import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks";
import Cookies from "js-cookie";
import { makeToast } from "../Helpers";

const Navbar = ()=>{
    const { pathname } = useLocation();
    const { userInfo, UserInfoHandler } = useAuth();
    const { role } = userInfo;

    const AppMode = import.meta.env.VITE_REACT_APP_MODE 

    const HandleLogoutAction = ()=> {
        // Cookies.remove('_token')
        UserInfoHandler();
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
                        <div className="flex flex-col">
                            <NavLink to="/experiences" className="mx-1">Experiences</NavLink>
                            { 
                                (
                                    pathname === '/experiences' 
                                        || 
                                    (
                                        pathname.split("/").length > 2 && pathname.split("/")[1]
                                    ) === "experiences"
                                )
                                ? <h1 className="text-center text-[#00DF9A]">^</h1>
                                : null 
                            }
                        </div>
                        <div className="flex flex-col">
                            <NavLink to="/contact" className="mx-1">Contact</NavLink>
                            {
                                (
                                    pathname === '/contact'
                                    ||
                                    (
                                        pathname.split("/")[1]
                                    ) === "contact"
                                )
                                    ? <h1 className="text-center text-[#00DF9A]">^</h1>
                                    : null
                            }
                        </div>
                        {
                            role === "ADMIN"
                            ?
                            <div className="flex flex-col">
                                <NavLink to="/dashboard" className="mx-1">Dashboard</NavLink>
                                { pathname === '/dashboard' ? <h1 className="text-center text-[#00DF9A]">^</h1> : null}
                            </div>
                            :
                            null  
                        }
                        {   
                            role === "ADMIN" 
                            ? 
                            <div className="flex flex-col">
                                <NavLink to="/" className="mx-1" onClick={HandleLogoutAction}>Logout</NavLink>
                            </div> : 
                            null
                        }
                        {/* { 
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
                        } */}
                        
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar;