import * as React from 'react';
import { useState } from 'react';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { HowToStart } from '../../components/hostsetup/layout/HowToStart';
import { ControlHosting } from '../../components/hostsetup/layout/ControlHosting';
import { AdvertiseMillions } from '../../components/hostsetup/layout/AdvertiseMillions';
import { HostingSupport } from '../../components/hostsetup/layout/hos';

import { NewFooter } from '../../components/layout/NewFooter';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

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
      <ControlHosting />
      <AdvertiseMillions />
      <HostingSupport />
      <NewFooter />
    </>
  );
};

export default setup;
