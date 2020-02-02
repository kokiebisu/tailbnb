export default ({ title, children }) => {
  return (
    <div className='px-5 md:px-10 xl:px-0 lg:max-w-5.5xl mx-auto pt-10 pb-10'>
      <h3 className='text-gray-850 text-2xl font-medium py-3 mt-5'>{title}</h3>
      {children}
    </div>
  );
};
