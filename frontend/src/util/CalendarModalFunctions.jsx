export const getStartingDay = (specifiedMonth, specifedYear) => {
  return new Date(specifedYear, specifiedMonth).getDay();
};

export const getEndingDate = (specifiedMonth, specifiedYear) => {
  return new Date(specifiedYear, specifiedMonth + 1, 0);
};

export const getDaysInMonth = (specifiedMonth, specifiedYear) => {
  return 32 - new Date(specifedYear, specifiedMonth, 32).getDate();
};

export const generateUnexistingDays = (firstday) => {
  var result = [];
  const numberOfDays = firstday;
  for (var i = 0; i < numberOfDays; i++) {
    result.push(
      <div className='border border-white flex justify-center'>
        <div className='text-white py-1'>
          <p className='text-white'>N</p>
        </div>
      </div>
    );
  }
  return result;
};

export const generateUnavailableDays = (firstday, today) => {
  var result = [];
  const numberOfDays = today - firstday;
  for (var i = firstday; i <= numberOfDays; i++) {
    result.push(
      <div className='flex justify-center'>
        <div className='py-1'>
          <p className='text-gray-400'>{i}</p>
        </div>
      </div>
    );
  }
  return result;
};

export const generateAvailableDays = (today, lastday) => {
  var result = [];
  for (var i = today; i <= lastday; i++) {
    result.push(
      <div className='flex justify-center'>
        <div className='text-white py-1'>
          <p className='text-gray-650'>{i}</p>
        </div>
      </div>
    );
  }
  return result;
};
