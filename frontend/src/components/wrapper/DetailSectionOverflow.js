import React from 'react';

export default ({ title, phrase, children }) => {
  function renderPhrase() {
    if (phrase) {
      return (
        <>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='scrollable text-gray-850 text-2xl pt-3 w-5/6'>
            {title}
          </h3>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='scrollable text-md mb-5 text-gray-850 pb-3'>
            {phrase}
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-2xl my-4 text-gray-850'>
            {title}
          </h3>
        </>
      );
    }
  }
  return (
    <div className='border-b border-gray-300 pt-4 pb-14 w-full mx-auto overflow-x-hidden overflow-y-hidden'>
      <div className='pb-8'>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='text-2xl my-4 text-gray-850'>
          {title}
        </h3>

        {children}
      </div>
    </div>
  );
};
