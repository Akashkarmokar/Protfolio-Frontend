import './index.css'
import {Routes,Route} from 'react-router-dom'
import { About,Dashboard,Signin,Signup,NotFound, Experiences, BlogDetails, AuthCallback} from './Pages'
import { Navbar,PrivateOutlet,PrivateOutletRestriction } from './Components'
import { AuthContext } from './Context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { callApi } from './Helpers'



const App = ()=> {

    // const [ isLooggedIn, setIsLooggedIn ] = useState(true)
    // const [ userDetails, setUserDetails ] = useState(null)
    
    // useEffect(()=> {
    //   const token = Cookies.get('token')
      
    //   if (token){
    //     const CheckToken = async ()=> {
    //       const RequestBody = {
    //         token: token
    //       }
    //       const data = await callApi('post','auth/check-token',RequestBody)
    //       if(data==true) {
    //         const UserDetails = jwtDecode(token)
    //         setIsLooggedIn(true);
    //         setUserDetails(UserDetails)
    //       }
          
    //     }
        
    //     CheckToken();
    //   }
    // },[isLooggedIn])
    // const AuthDetails = {
    //   isUserLoggedIn : isLooggedIn,
    //   setUserLoggedIn: setIsLooggedIn,
    //   userDetails: userDetails,
    //   setUserDetails: setUserDetails
    // }

    const [ userInfo, setUserInfo ] = useState({
      role: "USER"
    })

    useEffect(()=> {
      /**
       * Send Cookie To Server and get authentication response from authorization api. Let's 
       * say this is "ADMIN" or "USER"
       */
      const api_return_data = {
        role: "ADMIN"
      };

      setUserInfo((preValue) => ({...preValue, ...api_return_data}));
      
    }, [userInfo])

    const UserInfoHandler = ()=> {
      const resetUserInfo = {
        role: "USER"
      }
      setUserInfo((preValue) => ({...preValue, ...resetUserInfo} ))
      Cookies.remove('_token')
    }

    return (
        <AuthContext.Provider value = { { userInfo, UserInfoHandler} }>
          <div className='main-container pb-10'>
            <Navbar/>
            <Routes>
              {/* <Route path='/' element={<Home/>} /> */}
              <Route path='/' element={<About/>} />
              <Route path='/experiences' element={<Experiences/>} />
              <Route path='/blog/:blog_id' element={<BlogDetails/>} />
              <Route path='/auth' element={<AuthCallback/>} />
              {/* <Route path='/miscellaneous' element={<Miscellaneous/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/blog/:id' element={<BlogDetails/>}/> */}

              {/* Private Routes */}
              <Route path='/*' element={<PrivateOutlet/>} >
                <Route path='dashboard' element={<Dashboard/>}/>
              </Route>

              {/* Restricted Route for LoggedIn user */}
              <Route path='/signin' element={<PrivateOutletRestriction><Signin/></PrivateOutletRestriction>}/>
              {<Route path='/signup' element={<PrivateOutletRestriction><Signup/></PrivateOutletRestriction>}/>}

              {/* Not Found Route */}
              <Route path='*' element={<NotFound/>} />
            </Routes>
            <ToastContainer/>
          </div>
        </AuthContext.Provider>
      
    )
}

export default App
