import React from 'react';

export default () => {
  return (
    <div className='z-100 bg-red-500 md:block fixed right-0 top-0'>
      <div>
        <h3>Recommend help</h3>
      </div>
      <div className='border-b border-t border-gray-300'>
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
