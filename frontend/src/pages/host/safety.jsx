import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { How } from '../../components/host/layout/How';
import { GreatGuests } from '../../components/hostsafety/layout/GreatGuests';
import { HostConfidence } from '../../components/hostsafety/layout/HostConfidence';
import { HereAlways } from '../../components/hostsafety/layout/HereAlways';
import { TravellerTrips } from '../../components/hostsafety/layout/TravellerTrips';
import { QuestionsAnswered } from '../../components/host/layout/QuestionsAnswered';
import { HostReady } from '../../components/host/functions/HostReady';
import { NewFooter } from '../../components/layout/NewFooter';

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
      <HostConfidence />
      <HereAlways />
      <TravellerTrips />
      <QuestionsAnswered />
      <HostReady page='safety' />
      <NewFooter />
    </>
  );
};

export default safety;
