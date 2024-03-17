import { useState } from 'react'
import { callApi, makeToast } from '../Helpers';
import { useAuth } from '../Hooks'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

const Signin = ()=>{
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword]  = useState('')
    const { setUserLoggedIn } = useAuth()

    const navigate = useNavigate()

    const signInHandler = async () => {
        const checkUserEmail = (userTypeEmail) =>{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(userTypeEmail);
        }

        const checkUserPassword = (userTypedPassword) => {
            return userTypedPassword.length >= 3 
        }
        const isEmailValid = checkUserEmail(userEmail);
        const isPasswordValid = checkUserPassword(userPassword);

        if(!isEmailValid){ 
            makeToast("Email is not valid")
        }
        if(!isPasswordValid) {
            makeToast("Password is not valid")
        }
        
        const Payload = {
            email: userEmail,
            password: userPassword

        }
        try{
            const data = await callApi('post','auth/sign-in',Payload)
            if(!data) {
                makeToast("Check your email and password again.")   
            } else {
                const { access_token } = data
                Cookies.set("token", access_token)
                setUserLoggedIn(true)
                makeToast("Logged in successfully")
                navigate('/dashboard')
            }
        }catch(err){
            makeToast("Signin unsuccesfull")
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="flex justify-center items-center h-screen">
                    <div className='flex flex-col'>
                        <label htmlFor="" className='px-2'>Email</label>
                        <input type="text" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} name="email" id="" className='my-2 rounded-md text-black'/>
                        <label htmlFor="" className='px-2'>Password</label>
                        <input type="password" name="password" id="" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} className='my-2 rounded-md text-black'/>
                        <button onClick={signInHandler} className='my-1 px-2 py-1 border  border-[#ffffff] text-[#00df9a] rounded-full'>SignIn</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;