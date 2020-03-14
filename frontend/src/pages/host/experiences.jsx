import * as React from 'react';
import ReactPlayer from 'react-player';

// Layout
import { ExperiencesHeader } from '../../components/hostexperiences/layout/ExperiencesHeader';
import { ExperienceBanner } from '../../components/hostexperiences/layout/ExperiencesBanner';
import { WhatsAnExperience } from '../../components/hostexperiences/layout/WhatsAnExperience';
import { ShowWhatYouKnow } from '../../components/hostexperiences/layout/ShowWhatYouKnow';
import { ExperienceCategory } from '../../components/hostexperiences/layout/ExperienceCategory';
import { JoinCommunity } from '../../components/hostexperiences/layout/JoinCommunity';

export default () => {
  return (
    <>
      <div className='relative top-0 bg-white w-screen z-50'>
        <ExperiencesHeader />
      </div>

      <div style={{ top: 150 }} className='w-screen fixed top-0 left-0'>
        <ReactPlayer
          width='100%'
          height='100%'
          playing
          loop
          url='https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4'
        />
      </div>
      <div className='relative z-50'>
        <ExperienceBanner />
        <WhatsAnExperience />
        <ShowWhatYouKnow />
        <ExperienceCategory />
        <JoinCommunity />
      </div>
    </>
  );
};
