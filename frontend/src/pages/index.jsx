import * as React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';

// Component
import { Header } from '../components/layout/Header';
import { FrontLines } from '../components/functions/FrontLines';
import { Explore } from '../components/containers/Explore';
import { NewFooter } from '../components/layout/NewFooter';
import { MenuModal } from '../components/modals/MenuModal';
import { Notice } from '../components/functions/Notice';
import { BottomNav } from '../components/layout/BottomNav';
import { Cookies } from '../components/layout/Cookies';

// // Next
// import { NextPage } from 'next';

const Home = () => {
  const [menuModal, setMenuModal] = useState(false);
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', _.debounce(handleScroll, 300));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    const isBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop >
      document.documentElement.clientHeight + 1;
    console.log(isBottom);

    if (!isBottom) {
      setBottom(!false);
      return;
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
        {bottom ? (
          <div className='fixed bottom-0 z-100 w-full md:hidden'>
            <BottomNav bottomSwitch={() => setBottom(!bottom)} />
          </div>
        ) : null}
        <div>
          <Cookies />
        </div>
      </div>
    </>
  );
};

export default Home;
