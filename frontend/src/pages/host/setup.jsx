import * as React from 'react';
import { useState } from 'react';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { NewFooter } from '../../components/layout/NewFooter';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';
import { HowToStart } from '../../components/hostsetup/layout/HowToStart';

const setup = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <HostHeader
        color='#008489'
        section='setup'
        switchMenuModal={changeMenuModal}
      />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <HowToStart />
      <NewFooter />
    </>
  );
};

export default setup;
