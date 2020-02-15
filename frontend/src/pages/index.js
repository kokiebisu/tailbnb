import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';

// Wrapper
import Section from '../components/wrapper/Section';
import SectionOverflow from '../components/wrapper/SectionOverflow';

// Component
import Header from '../components/layout/Header';
import Explore from '../components/containers/Explore';
import Plus from '../components/containers/Plus';
import Adventures from '../components/containers/Adventures';
import Stay from '../components/containers/Stay';
import TopRated from '../components/containers/TopRated';
import Popular from '../components/containers/Popular';
import Featured from '../components/containers/Featured';
import Footer from '../components/layout/Footer';

const QUERY = gql`
  query {
    stays {
      id
      hostType
      location
      title
      cost
      ratings
      img
      imglow
    }
    adventures {
      id
      title
      period
      cost
      country
      img
      imglow
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(QUERY, {
    fetchPolicy: 'no-cache',
    ssr: true
  });

  return (
    <>
      <Header />
      <SectionOverflow title='Explore Airbnb'>
        <Explore />
      </SectionOverflow>
      <Section
        title='Airbnb Plus places to stay'
        phrase='A selection of places to stay verified for quality and design'>
        <Plus />
      </Section>
      <Section
        title='Introducing Airbnb Adventures'
        phrase='Multi-day trips led by local experts—activities, meals, and stays
        included'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          <Adventures data={data} />
        )}
      </Section>
      <Section title='Places to stay around the world'>
        {loading ? (
          <div className='flex justify-center items-center w-full py-20'>
            <PulseLoader size={10} color={'#008489'} />
          </div>
        ) : (
          <Stay data={data} />
        )}
      </Section>
      <Section
        title='Top-rated experiences'
        phrase='Book activities led by local hosts on your next trip.'>
        <TopRated />
      </Section>
      <Section title='Popular destinations in the United States'>
        <Popular />
      </Section>
      <SectionOverflow
        title='Featured Airbnb Plus destinations'
        phrase='Browse beautiful places to stay with all the comforts of home, plus more'>
        <Featured />
      </SectionOverflow>
      <Footer />
    </>
  );
};

export default Home;
