export default ({ title, children }) => {
  return (
    <div className='pl-5 sm:px-5 md:px-10 xl:px-0 xl:px-0 lg:max-w-5.5xl mx-auto py-5 overflow-x-hidden overflow-y-hidden w-full'>
      <h3 className='text-gray-850 text-2xl font-semibold py-3 '>{title}</h3>
      {children}
    </div>
  );
};
