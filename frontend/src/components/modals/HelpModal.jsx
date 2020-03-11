import * as React from 'react';
import { useState } from 'react';

// Components
import { HelpCard } from '../functions/HelpCard';
import { HelpAdditional } from '../functions/HelpAdditional';

// interface Prop {
//   setHelpModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
// }

export const HelpModal = ({ setHelpModal }) => {
  const [word, setWord] = useState('');

  const handleChange = (e) => {
    return setWord(e.target.value);
  };

  const questions = [
    {
      title: 'How do I create an account?',
      abbranswer:
        "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up. You can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free. <br>After you sign up, be sure to complete your account before booking a reservation. "
    },
    {
      title: 'How do I reset or change my password?',
      abbranswer:
        "If you've forgotten your password, or you're having trouble logging in to your Airbnb account, go to the..."
    },
    {
      title:
        'What should I do if someone asks me to pay outside of the Airbnb website?',
      abbranswer:
        "Don't send them money, and let us know. We'll never ask you to pay anything outside of our side,..."
    },
    {
      title: 'Why should I pay and communicate through Airbnb directly?',
      abbranswer:
        "Paying and communicating through Airbnb helps ensure that you're protected under our Terms of..."
    },
    {
      title: 'What is the Airbnb cancellation policy for stays?',
      abbranswer:
        'On Airbnb, hosts set the cancellation policies that guests can book with. The terms vary depending on...'
    }
  ];

  return (
    <div className='bg-white z-100 md:block fixed top-0 right-0 h-screen w-104 shadow-xl'>
      <div className='relative h-16 border-b border-gray-300'>
        <div className='absolute bg-white fixed top-0 w-full flex justify-center items-center'>
          <div style={{ top: 20 }} className='absolute top-0'>
            <h3
              style={{ fontFamily: 'airbnb-medium' }}
              className='text-gray-750'>
              Recommended help
            </h3>
          </div>
          <button
            onClick={() => setHelpModal(false)}
            className='absolute top-0 right-0 '>
            <div className='pt-6 pr-5'>
              <svg
                className='h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512.001 512.001'>
                <g>
                  <g>
                    <path
                      d='M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
L284.286,256.002z'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className='relative h-160'>
        <div className='top-0 absolute h-full px-8 overflow-hidden overflow-y-scroll'>
          <div className='mt-5'>
            <p
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 mb-2'>
              Search by keyword
            </p>
          </div>
          <div id='helpsearch' className='flex border border-gray-300 rounded'>
            <div className='w-1/12 relative'>
              <svg
                className='absolute top-0 pl-2 pt-2 h-6 w-6'
                style={{ fill: '#767676' }}
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path d='m10.7227 19.9083c-4.919-.706-8.336-5.266-7.63-10.185.704-4.919 5.264-8.336 10.184-7.631 4.919.706 8.336 5.265 7.632 10.185-.706 4.92-5.266 8.336-10.186 7.631m11.65 2.76-3.729-4.196c1.706-1.514 2.905-3.618 3.254-6.053.783-5.467-3.013-10.533-8.479-11.317-5.467-.784-10.534 3.013-11.316 8.48-.784 5.466 3.012 10.532 8.478 11.315 2.675.384 5.254-.329 7.283-1.798l3.762 4.233c.184.207.5.225.706.042.206-.184.225-.5.041-.706'></path>
              </svg>
            </div>
            <div className='w-11/12'>
              <input
                value={word}
                onChange={handleChange}
                style={{ fontFamily: 'airbnb-medium' }}
                type='text'
                className='w-full h-8 text-sm text-gray-750 focus:outline-none placeholder-gray-800'
                placeholder='E.g. reservation status'
              />
            </div>
          </div>
          <div className='mt-8'>
            <div className='mb-5'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='uppercase text-gray-750 text-xs'>
                Recommended Articles
              </p>
            </div>
            <div>
              <HelpCard
                title={questions[0].title}
                answer={questions[0].abbranswer}
              />
              <HelpCard
                title={questions[1].title}
                answer={questions[1].abbranswer}
              />
              <HelpCard
                title={questions[2].title}
                answer={questions[2].abbranswer}
              />
              <HelpCard
                title={questions[3].title}
                answer={questions[3].abbranswer}
              />
              <HelpCard
                title={questions[4].title}
                answer={questions[4].abbranswer}
              />
            </div>
            <div className='mt-6'>
              <p
                style={{ fontFamily: 'airbnb-bold' }}
                className='uppercase text-gray-750 text-xs'>
                Explore More Articles By Topic
              </p>
            </div>
            <div className='mb-6'>
              <HelpAdditional title='Reservation requests' last={false} />
              <HelpAdditional title='Contacting hosts' last={false} />
              <HelpAdditional title='Prices & fees' last={true} />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute h-24 fixed bottom-0'>
        <div className='w-full bg-white fixed bottom-0 h-24 flex flex-col items-center border-t border-gray-300'>
          <div style={{ left: 50, top: 10 }} className='w-80 absolute top-0'>
            <button
              style={{ fontFamily: 'airbnb-bold' }}
              className='w-9/12 bg-green-850 py-3 text-white rounded'>
              <p>Visit the Help Centre</p>
            </button>
          </div>
          <div
            style={{ left: 160, bottom: 5 }}
            className='w-80 absolute left-0 bottom-0 my-1'>
            <div className=''>
              <a
                style={{ fontFamily: 'airbnb-book' }}
                className='underline text-green-850 text-sm'
                href='#'>
                Give Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='w-full flex justify-center items-center'>


</div>
<div className='bg-red-500 border-b border-t border-gray-300 p-8 relative h-full overflow-auto'>
<div className=''>

  
</div>
<div className='mt-8 mb-4'>
  <h3
    style={{ fontFamily: 'airbnb-bold' }}
    className='uppercase text-xs text-gray-750'>
    Recommended Articles
  </h3>
</div>
<div>

  <HelpCard title={questions[0].title} answer={questions[0].answer} />
</div>

</div>
<div className='flex flex-col justify-end items-center my-2'>


</div> */
}
