import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { HostHeader } from '../../components/host/layout/HostHeader';
import { How } from '../../components/host/layout/How';
import { GreatGuests } from '../../components/hostsafety/layout/GreatGuests';
import { HostConfidence } from '../../components/hostsafety/layout/HostConfidence';
import { HereAlways } from '../../components/hostsafety/layout/HereAlways';
import { OnePhrase } from '../../components/host/layout/OnePhrase';
import { Questions } from '../../components/host/layout/Questions';
import { HostReady } from '../../components/host/layout/HostReady';
import { NewFooter } from '../../components/layout/NewFooter';

// Images
const howSafety = require('../../../public/img/high/how-safety.jpg');
const readySafety = require('../../../public/img/high/ready-earn-safety.jpg');

// Next
import { NextPage } from 'next';

const safety: NextPage<{}> = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const questions = [
    { question: 'What is required of guests before booking?' },
    { question: 'How do reviews work?' },
    { question: 'What do I do if a guest breaks something in my place' },
    { question: "What should I do if I'm uncomfortable hosting someone" },
    {
      question:
        "What's the difference between Airbnb's Host Guarantee and Host Protection Insurance"
    }
  ];

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
        img={howSafety}
      />
      <GreatGuests />
      <HostConfidence />
      <HereAlways />
      <OnePhrase
        title='Travellers took 49 million trips with Airbnb in 2017. Only 1 in 25,000 resulted in a significant property damage claim.'
        link={null}
      />
      <Questions title='Your questions answered' questions={questions} />
      <HostReady img={readySafety} title='Ready to start hosting?' />
      <NewFooter />
    </>
  );
};

export default safety;
