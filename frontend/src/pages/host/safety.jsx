import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { How } from '../../components/host/containers/How';
import { GreatGuests } from '../../components/hostsafety/containers/GreatGuests';

const safety = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <HostHeader
        color='#008489'
        section='safety'
        switchMenuModal={changeMenuModal}
      />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <How
        page='safety'
        title='How Airbnb protects hosts'
        description="We've taken extensive measures to help keep you, your home, and your guests safe."
      />
      <GreatGuests />
    </>
  );
};

export default safety;
