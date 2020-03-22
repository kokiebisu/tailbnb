import React, { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Images
const featured1 = require('../../../public/img/high/featured1.jpg');

// Util
import { renderSkeletonThreeColumn } from '../../util/RenderSkeleton';

// Components
import { ThreeColumnCard } from '../functions/ThreeColumnCard';

// Wrapper
import { SectionOverflow } from '../wrapper/SectionOverflow';
import cuid from 'cuid';

export const ThreeColumn = ({ sectionTitle, sectionDescription, contents }) => {
  const [loading, setLoading] = useState(true);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const setSleep = async (seconds) => {
    await sleep(seconds);
    setLoading(false);
  };

  setSleep(3000);

  return (
    <>
      <SectionOverflow title={sectionTitle} phrase={sectionDescription}>
        <div className='overflow-y-hidden'>
          <div className='w-full h-full overflow-y-hidden'>
            <div className='h-full scroller'>
              {loading ? (
                <div className='grid grid-cols-3 gap-4 py-2 rounded-xl min-w-192 md:w-full mb-24'>
                  {renderSkeletonThreeColumn(3, true)}
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </SectionOverflow>
    </>
  );
};
