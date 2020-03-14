import * as React from 'react';
import ReactPlayer from 'react-player';

// Layout
import { ExperiencesHeader } from '../../components/hostexperiences/layout/ExperiencesHeader';
import { ExperienceBanner } from '../../components/hostexperiences/layout/ExperiencesBanner';

export default () => {
  return (
    <>
      <div className='relative w-screen z-0 fixed top-0'>
        <ReactPlayer
          width='100%'
          height='100%'
          playing
          url='https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4'
        />
      </div>
      <ExperiencesHeader />
      {/* <div>
        <ExperienceBanner />
      </div> */}
    </>
  );
};
