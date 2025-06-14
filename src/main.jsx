import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
  // defaultOptions: {
  //   watchQuery: {
  //     fetchPolicy: 'no-cache',
  //     // errorPolicy: 'ignore',
  //   },
  //   query: {
  //     fetchPolicy: 'no-cache',
  //     // errorPolicy: 'all',
  //   },
  //   mutate: {
  //     fetchPolicy: 'no-cache'
  //   }
  // }
})

// console.log(()=> {})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)