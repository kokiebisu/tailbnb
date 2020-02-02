export default ({ title, phrase, children }) => {
  return (
    <div className='px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5'>
      <h3 className='text-2xl text-gray-850 font-medium pt-3'>{title}</h3>
      <p className='text-sm md:text-md mb-5 text-gray-850 pb-3'>{phrase}</p>
      {children}
    </div>
  );
};
