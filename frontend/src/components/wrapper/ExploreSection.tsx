import * as React from 'react';

interface Prop {
  title: string;
  phrase?: string | undefined;
  children: React.ReactNode;
}

export const ExploreSection: React.FC<Prop> = ({ title, phrase, children }) => {
  const renderContent = (phrase: string | undefined) => {
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
    <div className='md:px-0 max-w-90% xl:px-0 mx-auto py-5'>
      {renderContent(phrase)}
      {children}
    </div>
  );
};
