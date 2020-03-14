import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { HostServicesBanner } from '../../components/hostservices/layout/HostServicesBanner';
import { FindTeam } from '../../components/hostservices/layout/FindTeam';
import { GetStarted } from '../../components/hostservices/layout/GetStarted';
import { PeaceOfMind } from '../../components/hostservices/layout/PeaceOfMind';
import { Questions } from '../../components/host/layout/Questions';
import { ReadyConnect } from '../../components/hostservices/layout/ReadyConnect';
import { NewFooter } from '../../components/layout/NewFooter';

// Functions
import { FindOutCard } from '../../components/host/functions/FindOutCard';

const services = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <HostHeader
        color='#008489'
        section='hosting services'
        switchMenuModal={changeMenuModal}
      />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <HostServicesBanner />
      <FindTeam />
      <GetStarted />
      <FindOutCard />
      <PeaceOfMind />
      <Questions />
      <ReadyConnect />
      <NewFooter />
    </>
  );
};

export default services;
