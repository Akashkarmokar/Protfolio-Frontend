import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks";

const Navbar = ()=>{
    const { pathname } = useLocation();
    const { isLoggedIn } = useAuth()
    return (
        <>
            <div className="main-container my-2">
                <div className="flex justify-between">
                    <div className="ml-5">
                        <h1 className="text-2xl">[ Ak ]</h1>
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
                            isLoggedIn === true ? <div className="flex flex-col">
                                <NavLink to="/dashboard" className="mx-1">Dashboard</NavLink>
                                { pathname === '/dashboard' ? <h1 className="text-center text-[#00DF9A]">^</h1> : null}
                            </div> : null 
                        }
                        { isLoggedIn === true ? 
                            <div className="flex flex-col">
                                <NavLink to="/" className="mx-1">Sign out</NavLink>
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