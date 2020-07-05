import * as React from 'react';
import Head from 'next/head';
import './styles.css';
import '@babel/polyfill';

interface Props {
  Component: React.FC;
  pageProps: any;
  apollo: any;
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Vacation Rentals, Homes, Experiences & Places</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <link rel='icon' type='image/x-icon' href='/img/high/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
