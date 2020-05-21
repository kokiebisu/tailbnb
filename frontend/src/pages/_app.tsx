import * as React from 'react';
import Head from 'next/head';
import './styles.css';
import '@babel/polyfill';
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

interface Props {
  Component: React.FC;
  pageProps: any;
  apollo: any;
}

const MyApp: React.FC<Props> = ({ Component, pageProps, apollo }) => {
  return (
    <>
      <ApolloProvider client={apollo}>
        <Head>
          <title>Vacation Rentals, Homes, Experiences & Places</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
          />
          <link rel='icon' type='image/x-icon' href='/img/high/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

// https://nextbnb-a7667a1201.herokuapp.com
export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://www.nextbnb.dev/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(MyApp);
