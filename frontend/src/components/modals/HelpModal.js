import React, { useState, useRef } from 'react';

// Components
import HelpCard from '../presentational/HelpCard';

export default () => {
  const [word, setWord] = useState('');
  const [accountModal, setAccountModal] = useState(false);

  const handleChange = (event) => {
    return setWord(event.target.value);
  };

  const questions = [
    {
      title: 'How do I create an account?',
      answer:
        "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up. You can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free. <br>After you sign up, be sure to complete your account before booking a reservation. "
    }
  ];

  return (
    <div className='bg-white z-100 md:block fixed right-0 top-0 h-screen w-104 shadow-xl'>
      <div className='w-full flex justify-center items-center'>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='py-5 text-gray-750'>
          Recommended help
        </h3>
      </div>
      <div className='border-b border-t border-gray-300 p-8'>
        <div className=''>
          <p
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 mb-2'>
            Search by keyword
          </p>
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
                className='w-full h-8 text-sm text-gray-750 focus:outline-none'
                placeholder='E.g. reservation status'
              />
            </div>
          </div>
        </div>
        <div className='mt-8 mb-4'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='uppercase text-xs text-gray-750'>
            Recommended Articles
          </h3>
        </div>
        <div>
          {/* {questions.map(({ id, title, answer }) => {
            <HelpCard key={id} title={title} answer={answer} />;
          })} */}
          <HelpCard title={questions[0].title} answer={questions[0].answer} />
        </div>
        <div>Explore More Articles By Topic</div>
        <div>
          <h1>Help More Modal Here</h1>
        </div>
      </div>
      <button>Visit the Help Centre</button>
      <a href='#'>Give Feedback</a>
    </div>
  );
};
