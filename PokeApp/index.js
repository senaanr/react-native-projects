/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import Router from './src/Router';
import {name as appName} from './app.json';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphql-pokemon.now.sh/'
    }),
    cache: new InMemoryCache(),
})

const App = () => {
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
}

AppRegistry.registerComponent(appName, () => App);
