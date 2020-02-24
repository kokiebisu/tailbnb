import React from 'react';

export default ({ title, answer }) => {
  const renderAnswer = (answer) => {
    const wordArray = answer.split(' ');
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(wordArray[i]);
    }
    newArray.push('...');
    const something = newArray.join(' ');
    return something;
  };
  const newAnswer = renderAnswer(answer);
  return (
    <div className='mb-3'>
      <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
        {title}
      </h3>
      <p
        style={{ fontFamily: 'airbnb-book' }}
        className='text-gray-750 text-sm'>
        {newAnswer}
      </p>
      <button className='flex '>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='text-green-850 text-sm'>
          Read more
        </p>
        <div className='pl-3 flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3'
            style={{ fill: '#008489', paddingTop: 1, paddingRight: 3 }}
            viewBox='0 0 451.846 451.847'>
            <g>
              <path
                d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'
              />
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
};
