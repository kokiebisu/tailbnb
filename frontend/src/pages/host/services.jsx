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
import { NewFooter } from '../../components/layout/NewFooter';

// Functions
import { FindOutCard } from '../../components/host/functions/FindOutCard';
import { HostReady } from '../../components/host/functions/HostReady';

// Images
const readyServices = require('../../../public/img/high/ready-earn-services.jpg');

const services = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const questions = [
    { question: 'Who will my hosting team be?' },
    { question: 'Am I covered if something goes wrong?' },
    { question: 'Am I eligible for hosting services?' },
    { question: 'What do I do with my personal belongings?' },
    {
      question:
        'I run a hosting team. Can I offer hosting services through Airbnb?'
    }
  ];

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
      <div className='my-16'>
        <FindOutCard />
      </div>
      <PeaceOfMind />
      <Questions title='Your questions answered' questions={questions} />
      <HostReady
        title='Ready to connect with a hosting team?'
        img={readyServices}
      />
      <NewFooter />
    </>
  );
};

export default services;
