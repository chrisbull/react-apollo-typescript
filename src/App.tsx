import React from 'react'
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloProvider } from 'react-apollo'

import { AUTH_TOKEN } from './constant'
import RootContainer from './components/RootContainer'

import 'tachyons'
import './index.css'
import './App.css'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const middlewareLink = new ApolloLink((operation, forward: any) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  })
  return forward(operation)
})

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkAuth,
)

// apollo client setup
const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const token = localStorage.getItem(AUTH_TOKEN)

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootContainer token={token} />
      </ApolloProvider>
    )
  }
}
