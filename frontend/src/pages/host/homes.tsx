import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { HostHeader } from '../../components/layout/HostHeader';
import { WhyHost } from '../../components/hosthomes/layout/WhyHost';
import { HostingSteps } from '../../components/hosthomes/layout/HostingSteps';
import { Covered } from '../../components/hosthomes/layout/Covered';
import { SimplePayments } from '../../components/hosthomes/layout/SimplePayments';
import { Worldwide } from '../../components/hosthomes/layout/Worldwide';
import { HostAbout } from '../../components/hosthomes/layout/HostAbout';
import { HomesQuestions } from '../../components/hosthomes/layout/HomesQuestions';
import { MoreHosting } from '../../components/hosthomes/layout/MoreHosting';
import { HostReady } from '../../components/host/functions/HostReady';
import { NewFooter } from '../../components/layout/NewFooter';

// Functions
import { HostHomesCard } from '../../components/host/functions/HostHomesCard';

// Images
const background = require('../../../public/img/high/hosthome.jpg');
const overview = require('../../../public/img/high/ready-earn-overview.jpg');

const homes: React.FC<{}> = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <HostHeader
        color='#ffffff'
        section='overview'
        switchMenuModal={changeMenuModal}
      />
      <div className='w-full max-w-layout mx-auto relative'>
        <div className='w-full h-60 md:h-72 lg:h-144 relative flex justify-center'>
          <img
            src={background}
            style={{
              maxHeight: '60rem'
            }}
            className='object-cover w-full h-full'
          />
          <div className='lg:hidden px-6 md:px-0 md:max-w-2.5xl w-full absolute bottom-0 py-6 leading-none tracking-tighter'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-4xl text-white'>
              Earn money as an Airbnb host
            </h3>
          </div>
        </div>
        {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
        <HostHomesCard />
        <WhyHost />
        <HostingSteps />
        <Covered />
        <SimplePayments />
        <Worldwide />
        <HostAbout />
        <HomesQuestions />
        <MoreHosting />
        <HostReady title='Ready to earn?'>
          <img className='h-full w-full object-cover' src={overview} />
        </HostReady>
        <NewFooter />
      </div>
    </>
  );
};

export default homes;
