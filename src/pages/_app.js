import React from 'react';
import './styles.css';
import '@babel/polyfill';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
