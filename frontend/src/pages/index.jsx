import * as React from 'react';
import { useState, useEffect } from 'react';

// Component
import { Header } from '../components/layout/Header';
import { FrontLines } from '../components/functions/FrontLines';
import { Explore } from '../components/containers/Explore';
import { NewFooter } from '../components/layout/NewFooter';
import { MenuModal } from '../components/modals/MenuModal';
import { Notice } from '../components/functions/Notice';
import { BottomNav } from '../components/layout/BottomNav';

// // Next
// import { NextPage } from 'next';

const Home = () => {
  const [menuModal, setMenuModal] = useState(false);
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = (e) => {
    const bottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
      document.documentElement.clientHeight;
    if (bottom) {
      setBottom(false);
    } else {
      setBottom(true);
    }
  };

  return (
    <>
      <div>
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
        {bottom ? <BottomNav /> : null}
      </div>
    </>
  );
};

export default Home;
