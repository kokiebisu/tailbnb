import React from 'react';

export default ({ title, phrase, children }) => {
  const renderContent = (phrase) => {
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
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 text-2xl pt-3 pb-5'>
            {title}
          </h3>
        </>
      );
    }
  };
  return (
    <div className='px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5 w-full'>
      {renderContent(phrase)}
      {children}
    </div>
  );
};
