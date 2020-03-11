import * as React from 'react';

interface Prop {
  title: string;
  phrase?: string | undefined;
  children: React.ReactNode;
}

export const SectionOverflow: React.FC<Prop> = ({
  title,
  phrase,
  children
}) => {
  function renderPhrase(phrase: string | undefined) {
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
            className='scrollable text-gray-850 text-2xl py-3 w-5/6'>
            {title}
          </h3>
        </>
      );
    }
  }
  return (
    <div className='px-6 md:px-8 lg:px-10 xl:px-20 xl:max-w-layout mx-auto py-5 overflow-x-hidden overflow-y-hidden'>
      {renderPhrase(phrase)}
      {children}
    </div>
  );
};
