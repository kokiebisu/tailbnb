import * as React from 'react';
import { useState } from 'react';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

const setup = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <HostHeader section='setup' switchMenuModal={changeMenuModal} />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
    </>
  );
};

export default setup;
