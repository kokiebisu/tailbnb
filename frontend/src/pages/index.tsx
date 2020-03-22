import * as React from 'react';
import { useState } from 'react';

// Component
import { Header } from '../components/layout/Header';
import { Explore } from '../components/containers/Explore';
import { Plus } from '../components/containers/Plus';
import Today from '../components/containers/Today';
import Tomorrow from '../components/containers/Tomorrow';
import NextWeek from '../components/containers/NextWeek';
import Stay from '../components/containers/Stay';
import TopRated from '../components/containers/TopRated';
import { Footer } from '../components/layout/Footer';
import { MenuModal } from '../components/modals/MenuModal';
import { MovePage } from '../components/layout/MovePage';

// Next
import { NextPage } from 'next';

const Home: NextPage<{}> = () => {
  const [menuModal, setMenuModal] = useState(false);

  const switchMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <Header switchMenuModal={switchMenuModal} />
      {menuModal ? (
        <>
          <MenuModal switchMenuModal={switchMenuModal} />
        </>
      ) : null}
      <Explore />
      <Plus />
      <Today location='Vancouver' />
      <Tomorrow location='Vancouver' />
      <NextWeek location='Vancouver' />
      <TopRated />
      <Stay />
      <div className='py-32'>
        <MovePage
          first={true}
          last={false}
          previousPage={null}
          page={1}
          nextPage='two'
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
