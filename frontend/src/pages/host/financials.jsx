import * as React from 'react';
import { useState } from 'react';

// Layout
import { How } from '../../components/host/layout/How';
import { HostHeader } from '../../components/layout/HostHeader';
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Functions
import { FindOutCard } from '../../components/host/functions/FindOutCard';
import { SeamlessPayments } from '../../components/hostfinancials/layout/SeamlessPayments';

const financials = () => {
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
        page='Financials'
        title='How you make money on Airbnb'
        description='With Airbnb, enjoy a painless payment system, low fees, and freedom over what you charge.'
      />
      <FindOutCard />
      <SeamlessPayments />
    </>
  );
};

export default financials;
