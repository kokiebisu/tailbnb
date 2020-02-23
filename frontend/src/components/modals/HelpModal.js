import React from 'react';

export default () => {
  return (
    <div className='bg-white z-100 md:block fixed right-0 top-0 h-screen w-104 shadow-xl'>
      <div className='w-full flex justify-center items-center'>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='py-5 text-gray-850'>
          Recommended help
        </h3>
      </div>
      <div className='bg-red-500 border-b border-t border-gray-300'>
        <div>
          <p>Search by keyword</p>
          <input type='text' />
        </div>
        <div>
          <h3>Recommend Articles</h3>
        </div>
        <div>
          <h1>Help Card here</h1>
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
