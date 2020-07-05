import * as React from 'react';

// Functions
import { ToolCard } from '../functions/ToolCard';
import { Tag } from '../functions/Tag';
import { GuidanceCard } from '../functions/GuidanceCard';

const taskGif =
  'https://a0.muscache.com/airbnb/static/packages/icon-uc-alarm.e0a2b02f.gif';
const schedulingGif =
  'https://a0.muscache.com/airbnb/static/packages/icon-uc-calendar.ace59291.gif';
const paymentsGif =
  'https://a0.muscache.com/airbnb/static/packages/icon-uc-money-saved.0d988c4e.gif';
const insightGif =
  'https://a0.muscache.com/airbnb/static/packages/icon-uc-graph.3f8bd411.gif';

// Guidance Card
const guidance1 = require('../../../../public/img/high/guidance.jpg');

export const GotYourBack: React.FC<{}> = () => {
  return (
    <div className='relative w-screen py-8 md:pt-32 md:pb-16 bg-gray-50'>
      <div className='px-6 md:max-w-1.5xl lg:max-w-5xl mx-auto py-16 md:mb-32'>
        <div className='md:grid grid-cols-2'>
          <div className='mb-4 md:mb-0'>
            <div className='md:w-80p lg:w-70p'>
              <h3
                style={{ fontFamily: 'airbnb-bold' }}
                className='text-3xl text-gray-750 leading-9'>
                We've got your back, every step of the way
              </h3>
            </div>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 text-lg'>
              Resources like articles and insights dedicated to your hosting
              needs, 24/7 customer support for you and your guests, exposure for
              your experience, and much more.
            </p>
          </div>
        </div>
      </div>
      <div className='md:max-w-1.5xl lg:max-w-5xl mx-auto mb-1 lg:mb-8'>
        <div className='py-16 bg-gray-150 rounded px-6'>
          <div className='lg:grid grid-cols-2 gap-5 lg:flex items-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 md:gap-4'>
              <ToolCard gif={taskGif} title='Tasks' color='#f03e41' />
              <ToolCard
                gif={schedulingGif}
                title='Scheduling'
                color='#3c6a93'
              />
              <ToolCard gif={paymentsGif} title='Payments' color='#f18805' />
              <ToolCard gif={insightGif} title='Insights' color='#6ecb68' />
            </div>
            <div className='mt-8 lg:mt-0 flex justify-end'>
              <div className='lg:w-95p'>
                <div>
                  <h3
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-gray-750 text-2xl'>
                    Tools tailored to you
                  </h3>
                </div>
                <div className='mt-1'>
                  <p
                    style={{ fontFamily: 'airbnb-book' }}
                    className='text-gray-750 '>
                    A dashboard to give you insights, feedback on how to
                    improve, visibility to guests from all over the world
                    through search and filters, seamless payments, and much
                    more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:max-w-1.5xl lg:max-w-5xl mx-auto mb-8'>
        <div className='rounded'>
          <div className='lg:grid grid-cols-2 gap-6'>
            <div className='bg-gray-150 pt-16 mb-1 lg:mb-0 pb-8 px-8'>
              <div className=''>
                <Tag />
              </div>
              <div className='mt-12'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-gray-750 text-2xl'>
                  Keep peace of mind
                </h3>
              </div>
              <div className='mt-1'>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750'>
                  For most experiences, you’ll be insured up to $1 million USD.
                  Plus, you'll have access to 24/7 customer support so you can
                  focus on pursuing your passion.
                  <span className='text-green-850'>&nbsp;Learn more</span>
                </p>
              </div>
            </div>
            <div className='bg-gray-150 pt-8 pb-8 px-8'>
              <div className='grid grid-cols-3 gap-4'>
                <GuidanceCard img={guidance1} title='News' color='#cc5500' />
                <GuidanceCard img={guidance1} title='Perks' color='#ea9a1b' />
                <GuidanceCard img={guidance1} title='Events' color='#5a7d7c' />
              </div>
              <div className='bg-gray-150 mt-8'>
                <h3
                  style={{ fontFamily: 'airbnb-bold' }}
                  className='text-2xl text-gray-750'>
                  Guidance to help you grow
                </h3>
              </div>
              <div>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750'>
                  Weekly newsletters, articles, and resources are dedicated to
                  help you succeed on every step of your hosting journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
