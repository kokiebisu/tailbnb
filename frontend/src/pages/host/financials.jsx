import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { How } from '../../components/host/layout/How';
import { HostHeader } from '../../components/host/layout/HostHeader';
import { SeamlessPayments } from '../../components/hostfinancials/layout/SeamlessPayments';
import { GreatPrice } from '../../components/hostfinancials/layout/GreatPrice';
import { Questions } from '../../components/host/layout/Questions';
import { HostReady } from '../../components/host/layout/HostReady';

// Functions
import { FindOutCard } from '../../components/host/functions/FindOutCard';

// Images
const readyFinancial = require('../../../public/img/high/ready-earn-setup.jpg');

const financials = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const questions = [
    { question: 'How much does it cost to list my space?' },
    { question: "How do I figure out how much I'll get paid?" },
    { question: 'How can Airbnb help me with setting prices?' },
    { question: 'When can I expect to get paid?' },
    { question: "How should I choose my listing's price?" },
    { question: 'How do taxes work for hosts?' }
  ];
  return (
    <>
      <HostHeader
        color='#008489'
        section='financials'
        switchMenuModal={changeMenuModal}
      />
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <How
        page='Financials'
        title='How you make money on Airbnb'
        description='With Airbnb, enjoy a painless payment system, low fees, and freedom over what you charge.'
      />
      <div className='my-16'>
        <FindOutCard />
      </div>
      <SeamlessPayments />
      <GreatPrice />
      <Questions title='Your questions answered' questions={questions} />
      <HostReady title='Ready to earn?' img={readyFinancial} />
    </>
  );
};

export default financials;
