export default ({ title, phrase, children }) => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>{title}</h3>
      <p className='mb-6 text-gray-750'>{phrase}</p>
      {children}
    </div>
  );
};
