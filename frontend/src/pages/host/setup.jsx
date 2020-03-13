import * as React from 'react';
import { useState } from 'react';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { How } from '../../components/host/layout/How';
import { ControlHosting } from '../../components/hostsetup/layout/ControlHosting';
import { AdvertiseMillions } from '../../components/hostsetup/layout/AdvertiseMillions';
import { HostingSupport } from '../../components/hostsetup/layout/HostingSupport';
import { PeopleHost } from '../../components/hostsetup/layout/PeopleHost';
import { QuestionsAnswered } from '../../components/host/layout/QuestionsAnswered';
import { HostReady } from '../../components/host/functions/HostReady';
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
      <How
        page='setup'
        title='How to start hosting'
        description='Listing a home on Airbnb has never been easier or more customizable. You’re just a few steps away from earning money and reaching millions of global travellers.'
      />
      <ControlHosting />
      <AdvertiseMillions />
      <HostingSupport />
      <PeopleHost />
      <QuestionsAnswered />
      <HostReady page='setup' />
      <NewFooter />
    </>
  );
};

export default setup;
