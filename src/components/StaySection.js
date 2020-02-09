import React from 'react';

export default ({ title, phrase, children }) => {
  const renderContent = () => {
    if (phrase) {
      return (
        <>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-2xl text-gray-850 pt-3'>
            {title}
          </h3>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='text-md mb-5 text-gray-850 pb-3'>
            {phrase}
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-gray-850 text-2xl py-3 '>
            {title}
          </h3>
        </>
      );
    }
  };
  return (
    <div className='px-5 md:max-w-90% md:px-0 mx-auto py-5'>
      {renderContent()}
      {children}
    </div>
  );
};
