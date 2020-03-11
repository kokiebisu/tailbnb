import * as React from 'react';
import { useState } from 'react';

// Component
import { Header } from '../components/layout/Header';
import { Explore } from '../components/containers/Explore';
import { Plus } from '../components/containers/Plus';
import Today from '../components/containers/Today';
import Tomorrow from '../components/containers/Tomorrow';
import NextWeek from '../components/containers/NextWeek';
import Adventures from '../components/containers/Adventures';
import Stay from '../components/containers/Stay';
import { TopRated } from '../components/containers/TopRated';
import { Popular } from '../components/containers/Popular';
import { Featured } from '../components/containers/Featured';
import { Footer } from '../components/layout/Footer';
import { MenuModal } from '../components/modals/MenuModal';

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
      <Today />
      <Tomorrow />
      <NextWeek />
      <Adventures />
      <Stay />
      <TopRated />
      <Popular />
      <Featured />
      <Footer />
    </>
  );
};

export default Home;
