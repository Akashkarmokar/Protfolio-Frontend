import './index.css'
import {Routes,Route} from 'react-router-dom'
import { About,Dashboard,Signin,Signup,NotFound} from './Pages'
import { Navbar,PrivateOutlet,PrivateOutletRestriction } from './Components'
import { AuthContext } from './Context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { callApi } from './Helpers'



const App = ()=> {

    const [ isLooggedIn, setIsLooggedIn ] = useState(true)
    const [ userDetails, setUserDetails ] = useState(null)
    
    useEffect(()=> {
      const token = Cookies.get('token')
      
      if (token){
        const CheckToken = async ()=> {
          const RequestBody = {
            token: token
          }
          const data = await callApi('post','auth/check-token',RequestBody)
          if(data==true) {
            const UserDetails = jwtDecode(token)
            setIsLooggedIn(true);
            setUserDetails(UserDetails)
          }
          
        }
        
        CheckToken();
      }
    },[isLooggedIn])
    const AuthDetails = {
      isUserLoggedIn : isLooggedIn,
      setUserLoggedIn: setIsLooggedIn,
      userDetails: userDetails,
      setUserDetails: setUserDetails
    }
    return (
        <AuthContext.Provider value = {AuthDetails}>
          <div className=''>
            <Navbar/>
            <Routes>
              {/* <Route path='/' element={<Home/>} /> */}
              <Route path='/' element={<About/>} />
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
