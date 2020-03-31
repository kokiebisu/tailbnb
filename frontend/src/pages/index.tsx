import * as React from 'react';
import { useState } from 'react';

// Component
import { Header } from '../components/layout/Header';
import { Explore } from '../components/containers/Explore';
import { NewFooter } from '../components/layout/NewFooter';
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
      <NewFooter />
    </>
  );
};

export default Home;
