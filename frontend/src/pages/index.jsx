import * as React from 'react';
import { useState } from 'react';

// Component
import { Header } from '../components/layout/Header';
import { FrontLines } from '../components/functions/FrontLines';
import { Explore } from '../components/containers/Explore';
import { NewFooter } from '../components/layout/NewFooter';
import { MenuModal } from '../components/modals/MenuModal';
import { Notice } from '../components/functions/Notice';

// // Next
// import { NextPage } from 'next';

const Home = () => {
  const [menuModal, setMenuModal] = useState(false);

  return (
    <>
      <Header switchMenuModal={() => setMenuModal(!menuModal)} />
      {menuModal ? (
        <>
          <MenuModal switchMenuModal={() => setMenuModal(!menuModal)} />
        </>
      ) : null}
      <FrontLines />
      {/* COVID-19 notice */}
      <Notice />
      <Explore />
      <NewFooter />
    </>
  );
};

export default Home;
