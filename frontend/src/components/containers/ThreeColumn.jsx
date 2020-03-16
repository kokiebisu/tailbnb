import React, { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Images
const featured1 = require('../../../public/img/high/featured1.jpg');

// Components
import { ThreeColumnCard } from '../functions/ThreeColumnCard';

// Wrapper
import { SectionOverflow } from '../wrapper/SectionOverflow';
import cuid from 'cuid';

export const ThreeColumn = ({ sectionTitle, sectionDescription, contents }) => {
  return (
    <>
      <SectionOverflow title={sectionTitle} phrase={sectionDescription}>
        <div className='overflow-y-hidden'>
          <div className='w-full h-full overflow-y-hidden'>
            <div className='h-full scroller'>
              <div className='grid grid-cols-3 gap-4 scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl min-w-192 md:w-full'>
                {contents.map((content) => {
                  return (
                    <React.Fragment key={cuid()}>
                      <div className=''>
                        <ThreeColumnCard {...content} />
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionOverflow>
    </>
  );
};
