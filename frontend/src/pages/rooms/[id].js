import { useRouter } from 'next/router';
import React from 'react';
import ExploreHeader from '../../components/layout/ExploreHeader';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const staydata = gql`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      id
      title
    }
  }
`;

export default () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(staydata, {
    variables: {
      id: router.query.id
    }
  });

  if (loading) return 'loading...';
  if (error) return 'error...';
  return (
    <>
      <ExploreHeader />
      <div className='w-screen bg-blue'></div>
      <h1>{data.stay.title}</h1>
    </>
  );
};
