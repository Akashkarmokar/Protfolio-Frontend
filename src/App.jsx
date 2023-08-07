import './index.css'
import {Routes,Route} from 'react-router-dom'
import { Home,About,Dashboard,Miscellaneous,Projects,Signin,Signup,NotFound, BlogDetails} from './Pages'
import { Navbar,PrivateOutlet,PrivateOutletRestriction } from './Components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { makeToast } from './Helpers'

const errorLink = onError((graphQLErrors, networkError)=>{
  if (graphQLErrors){
    graphQLErrors.forEach((message,location,path) => {
      makeToast(message)
    });
  }
});


const link = from([
  errorLink,
  new HttpLink({uri: `http://localhost:3000/`})
])


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const App = ()=> {

    return (
      <ApolloProvider client={client}>
        <>
          <div>
            <Navbar/>
            <Routes>
              {/* <Route path='/' element={<Home/>} /> */}
              <Route path='/' element={<About/>} />
              {/* <Route path='/miscellaneous' element={<Miscellaneous/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/blog/:id' element={<BlogDetails/>}/> */}

              {/* Private Routes */}
              {/* <Route path='/*' element={<PrivateOutlet/>} >
                <Route path='dashboard' element={<Dashboard/>}/>
              </Route> */}

              {/* Restricted Route for LoggedIn user */}
              {/* <Route path='/signin' element={<PrivateOutletRestriction><Signin/></PrivateOutletRestriction>}/>
              <Route path='/signup' element={<PrivateOutletRestriction><Signup/></PrivateOutletRestriction>}/> */}

              {/* Not Found Route */}
              <Route path='*' element={<NotFound/>} />
            </Routes>
            <ToastContainer/>
          </div>
        </>
      </ApolloProvider>
    )
}

export default App
