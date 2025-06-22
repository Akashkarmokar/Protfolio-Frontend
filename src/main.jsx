import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink, HttpLink, from} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
// const client = new ApolloClient({
//   uri: "http://localhost:3000/graphql",
//   cache: new InMemoryCache(),
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Credentials': true,
//   }
//   // defaultOptions: {
//   //   watchQuery: {
//   //     fetchPolicy: 'no-cache',
//   //     // errorPolicy: 'ignore',
//   //   },
//   //   query: {
//   //     fetchPolicy: 'no-cache',
//   //     // errorPolicy: 'all',
//   //   },
//   //   mutate: {
//   //     fetchPolicy: 'no-cache'
//   //   }
//   // }
// })

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('_token'); // or localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// console.log(()=> {})
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)