export default ({ title, phrase, children }) => {
  return (
    <div className='px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto pt-14 pb-20'>
      <h3 className='text-2xl text-gray-850 font-medium py-3 mt-5'>{title}</h3>
      <p className='mb-6 text-gray-750'>{phrase}</p>
      {children}
    </div>
  );
};
