import * as React from 'react';
import { useState } from 'react';

// Modals
import { HostMenuModal } from '../../components/modals/HostMenuModal';

// Layout
import { ExperiencesHeader } from '../../components/hostexperiences/layout/ExperiencesHeader';
import { ExperienceBanner } from '../../components/hostexperiences/layout/ExperiencesBanner';
import { WhatsAnExperience } from '../../components/hostexperiences/layout/WhatsAnExperience';
import { ShowWhatYouKnow } from '../../components/hostexperiences/layout/ShowWhatYouKnow';
import { ExperienceCategory } from '../../components/hostexperiences/layout/ExperienceCategory';
import { JoinCommunity } from '../../components/hostexperiences/layout/JoinCommunity';
import { GotYourBack } from '../../components/hostexperiences/layout/GotYourBack';
import { HowToGetStarted } from '../../components/hostexperiences/layout/HowToGetStarted';
import { ExperiencesQuestions } from '../../components/hostexperiences/layout/ExperiencesQuestions';
import { NewFooter } from '../../components/layout/NewFooter';

// Next
import { NextPage } from 'next';

const experiences: NextPage<{}> = () => {
  const [menuModal, setMenuModal] = useState(false);

  const changeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <div className='relative top-0 bg-white w-screen z-50'>
        <ExperiencesHeader switchMenuModal={changeMenuModal} />
      </div>
      {menuModal ? <HostMenuModal switchMenuModal={changeMenuModal} /> : null}
      <div
        id='experiences__video'
        className='h-screen lg:w-screen fixed top-0 left-0'>
        <video
          playsinline
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
          src='https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4'></video>
      </div>
      <div className='relative z-50'>
        <ExperienceBanner />
        <WhatsAnExperience />
        <ShowWhatYouKnow />
        <ExperienceCategory />
        <JoinCommunity />
        <GotYourBack />
        <HowToGetStarted />
        <ExperiencesQuestions />
        <NewFooter />
      </div>
    </>
  );
};

export default experiences;
