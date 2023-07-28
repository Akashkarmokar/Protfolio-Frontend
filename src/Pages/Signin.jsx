import { useState } from 'react'
import { makeToast } from '../Helpers';
const Signin = ()=>{
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword]  = useState('')

    const signInHandler = async () => {
        const checkUserEmail = (userTypeEmail) =>{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(userTypeEmail);
        }

        const checkUserPassword = (userTypedPassword) => {
            return userTypedPassword.length >= 8 
        }
        const isEmailValid = checkUserEmail(userEmail);
        const isPasswordValid = checkUserPassword(userPassword);

        if(!isEmailValid){ 
            makeToast("Email is not valid")
        }
        if(!isPasswordValid) {
            makeToast("Password is not valid")
        }
        

    }

    return (
        <>
            <div className="main-container">
                <div className="flex justify-center items-center h-screen">
                    <div className='flex flex-col'>
                        <label htmlFor="" className='px-2'>Email</label>
                        <input type="text" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} name="" id="" className='my-2 rounded-md'/>
                        <label htmlFor="" className='px-2'>Password</label>
                        <input type="password" name="" id="" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} className='my-2 rounded-md'/>
                        <button onClick={signInHandler} className='my-1 px-2 py-1 border  border-[#ffffff] text-[#00df9a] rounded-full'>SignIn</button>
                        { userEmail }
                        <br />
                        { userPassword }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;