/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context';
import {_getToken} from './util';
import Navigation from './Navigation';

const httpLink = new HttpLink({ uri: 'http://192.168.88.170:4000/graphql' });
// Uncomment avobe code to localhost connection.
// const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const authLink = setContext(async (req, { headers }) => {
  const token = await _getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
  }
  };
});

const link = authLink.concat(httpLink);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>

    );
  }
}