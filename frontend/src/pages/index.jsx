import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
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

// Animation
import appearFromBottom from '../animations/appearFromBottom';
import fadeout from '../animations/fadeout';

const Home = () => {
  const [menuModal, setMenuModal] = useState(false);

  let banner = useRef(null);

  useEffect(() => {
    appearFromBottom(banner);
  }, []);

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
        <div
          ref={(el) => (banner = el)}
          style={{ bottom: 12 }}
          className='hidden md:block z-100 bottom-0 sticky'>
          <div className='px-5 mx-auto'>
            <Cookies
              turnOffBanner={() => {
                fadeout(banner);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
