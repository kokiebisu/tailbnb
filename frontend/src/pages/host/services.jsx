import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { HostServicesHeader } from '../../components/hostservices/layout/HostServicesHeader';
import { HostServicesBanner } from '../../components/hostservices/layout/HostServicesBanner';
import { FindTeam } from '../../components/hostservices/layout/FindTeam';
import { GetStarted } from '../../components/hostservices/layout/GetStarted';
import { PeaceOfMind } from '../../components/hostservices/layout/PeaceOfMind';
import { QuestionsAnswered } from '../../components/hostservices/layout/QuestionsAnswered';
import { ReadyConnect } from '../../components/hostservices/layout/ReadyConnect';
import { NewFooter } from '../../components/layout/NewFooter';

// Functions
import { FindOutCard } from '../../components/hostservices/functions/FindOutCard';

const services = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <HostServicesHeader switchMenuModal={changeMenuModal} />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <HostServicesBanner />
      <FindTeam />
      <GetStarted />
      <FindOutCard />
      <PeaceOfMind />
      <QuestionsAnswered />
      <ReadyConnect />
      <NewFooter />
    </>
  );
};

export default services;
