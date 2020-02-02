export default () => {
  return (
    <div class='hidden md:block md:w-100 pt-8 pb-6 mt-10 bg-white rounded shadow-2xl'>
      <div class='mx-8'>
        <h3 class='font-sans text-3xl font-bold text-gray-750 leading-tight'>
          Book unique places to <br />
          stay and things to do.
        </h3>
        <form>
          <div className=''>
            <label
              className='block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase tracking-wider'
              htmlFor='where'>
              Where
            </label>
            <input
              className='w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide'
              type='text'
              id='where'
              placeholder='Anywhere'
            />
          </div>
          <div className='flex flex-wrap items-stretch justify-start'>
            <div class='w-1/2'>
              <label
                className='block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase'
                htmlFor='checkin'>
                Check-In
              </label>
              <input
                className='pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide'
                type='text'
                id='checkin'
                placeholder='dd-mm-yyyy'
              />
            </div>
            <div class='w-1/2'>
              <label
                className='block font-bold mt-5 mb-2 text-xs uppercase text-gray-700'
                htmlFor='checkout'>
                Check-Out
              </label>
              <input
                className='pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'
                type='text'
                id='checkout'
                placeholder='dd-mm-yyyy'
              />
            </div>
          </div>
          <div class=''>
            <label
              class='block font-bold mt-5 mb-2 text-xs uppercase text-gray-700'
              htmlFor='guests'>
              Guests
            </label>
            <div class='inline-block relative w-full'>
              <select
                className='appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'
                id='guests'>
                <option value='1'>2 Guests</option>
                <option value='2'>3 Guests</option>
                <option value='3'>4 Guests</option>
              </select>
              <div class='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                <svg
                  class='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
        </form>
        <div class='inline flex items-center justify-end flex-wrap mt-6'>
          <button class='py-3 px-6 rounded bg-red-500 text-white font-bold'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
