import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home,About,Dashboard,Miscellaneous,Projects,Signin,Signup,NotFound, BlogDetails} from './Pages'
import { Navbar,PrivateOutlet,PrivateOutletRestriction } from './Components'


const App = ()=> {
    return (<>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/miscellaneous' element={<Miscellaneous/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/blog/:id' element={<BlogDetails/>}/>

          {/* Private Routes */}
          <Route path='/*' element={<PrivateOutlet/>} >
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>

          {/* Restricted Route for LoggedIn user */}
          <Route path='/signin' element={<PrivateOutletRestriction><Signin/></PrivateOutletRestriction>}/>
          <Route path='/signup' element={<PrivateOutletRestriction><Signup/></PrivateOutletRestriction>}/>

          {/* Not Found Route */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </>)
}

export default App
