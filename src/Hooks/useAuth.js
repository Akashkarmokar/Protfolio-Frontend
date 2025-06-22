import { useContext } from "react";
import { AuthContext } from "../Context";

const useAuth = ()=>{
    // const AuthDetails = useContext(AuthContext)
    // console.log(AuthDetails)
    // const isLoggedIn = false;
    // const data = {
    //     userInfo: {
    //         userId: '123456789',
    //         username: 'akash'
    //     }
    // }
    // let finalObject = {
    //     isLoggedIn,
    //     data
    // };
    // if(isLoggedIn === false){
    //     finalObject.data = {}
    // }
    // return finalObject;
    const AuthDetails = useContext(AuthContext)
    return AuthDetails


}

export default useAuth;