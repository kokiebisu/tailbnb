import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

export default () => {
  const router = useRouter();
  return (
    <>
      <h1>Hello {router.query.id}</h1>
    </>
  );
};
