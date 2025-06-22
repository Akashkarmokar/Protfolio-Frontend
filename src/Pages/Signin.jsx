import { useState } from 'react'
import { callApi, makeToast } from '../Helpers';
import { useAuth } from '../Hooks'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client';


const Signin = ()=>{
    
    const SignIn = gql`
        mutation SignIn {
            SignIn {
                link
            }
        }
    `;
    const [ userSignIn, { loading: signInLoading, error: signInError, data: signInData } ] = useMutation(SignIn)

    const signInHandler = (e)=> {
        try {
            const DoSignIn = async () => {
                const resposne = await userSignIn();
                if (resposne.data.SignIn.link) {
                    window.location.href = resposne.data.SignIn.link;
                }
            }
            DoSignIn();
        }catch (error) {
            makeToast("Something went wrong during sign in")
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="flex justify-center items-center h-screen">
                    <div className='flex flex-col'>
                        <label htmlFor="" className='px-2'>Email</label>
                        <input type="text" name="email" id="" className='my-2 rounded-md text-black'/>
                        <label htmlFor="" className='px-2'>Password</label>
                        <input type="password" name="password" id=""  className='my-2 rounded-md text-black'/>
                        <button onClick={signInHandler} className='my-1 px-2 py-1 border  border-[#ffffff] text-[#00df9a] rounded-full'>SignIn</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;