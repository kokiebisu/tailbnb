import * as React from 'react';
import { useState } from 'react';

// Layout
import { HostHeader } from '../../components/host/layout/HostHeader';
import { How } from '../../components/host/layout/How';
import { ControlHosting } from '../../components/hostsetup/layout/ControlHosting';
import { AdvertiseMillions } from '../../components/hostsetup/layout/AdvertiseMillions';
import { HostingSupport } from '../../components/hostsetup/layout/HostingSupport';
import { OnePhrase } from '../../components/host/layout/OnePhrase';
import { HostReady } from '../../components/host/layout/HostReady';
import { NewFooter } from '../../components/layout/NewFooter';
import { Questions } from '../../components/host/layout/Questions';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Images
const howSetup = require('../../../public/img/high/how-setup.jpg');
const readySetup = require('../../../public/img/high/ready-earn-setup.jpg');

const setup = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const questions = [
    { question: 'How much does it cost to list my space?' },
    { question: "How should I choose my listing's price?" },
    { question: 'How can Airbnb help me with setting prices?' },
    { question: 'What is required of guests before booking?' },
    { question: "What should I do if I'm uncomfortable hosting someone?" },
    { question: 'WHat protection do I have against property damage?' }
  ];

  return (
    <>
      <HostHeader
        color='#008489'
        section='setup'
        switchMenuModal={changeMenuModal}
      />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <How
        page='setup'
        title='How to start hosting'
        description='Listing a home on Airbnb has never been easier or more customizable. You’re just a few steps away from earning money and reaching millions of global travellers.'
        img={howSetup}
      />
      <ControlHosting />
      <AdvertiseMillions />
      <HostingSupport />
      <OnePhrase
        title="Over 2 million people host on Airbnb and no host's style is the
            same."
        link="Learn what's expected of hosts"
      />
      <Questions title='Your questions answered' questions={questions} />
      <HostReady title='Ready to earn?' img={readySetup} />
      <NewFooter />
    </>
  );
};

export default setup;
