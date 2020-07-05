import * as React from 'react';
import { useState } from 'react';

interface Prop {
  description: string;
  space: string;
  access: string;
  note: string;
  changeLength: () => void;
}

export const StayDescription: React.FC<Prop> = ({
  description,
  space,
  access,
  note,
  changeLength
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const renderDescription = (description: string) => {
    const wordArray = description.split(' ');
    const newArray = [];
    for (let i = 0; i < 45; i++) {
      newArray.push(wordArray[i]);
    }
    return newArray;
  };

  const newArray = renderDescription(description);

  return (
    <>
      {display ? (
        <div>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            {description}
          </p>

          <div className='py-4'>
            <h3 style={{ fontFamily: 'airbnb-medium' }} className='mb-3'>
              The space
            </h3>
            <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
              {space}
            </p>
          </div>

          <div className='py-4'>
            <h3 style={{ fontFamily: 'airbnb-medium' }} className='mb-3'>
              Guest access
            </h3>
            <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
              {access}
            </p>
          </div>

          <div className='py-4'>
            <h3 style={{ fontFamily: 'airbnb-medium' }} className='mb-3'>
              Other things to note
            </h3>
            <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
              {note}
            </p>
          </div>
        </div>
      ) : (
        <>
          <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
            {`${newArray.join(' ')}...`}
            <button
              onClick={() => {
                setDisplay(true);
                changeLength();
              }}
              style={{ fontFamily: 'airbnb-book' }}
              className='hover:border-green-850 border-b text-green-850 border-transparent'>
              Read More
            </button>
          </p>
        </>
      )}
    </>
  );
};
