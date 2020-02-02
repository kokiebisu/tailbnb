export default ({ title, children }) => {
  return (
    <div className='xl:max-w-5.5xl lg:max-w-5xl mx-auto mt-20 mb-20'>
      <h3 className='text-2xl font-semibold py-3 mt-5'>{title}</h3>
      {children}
    </div>
  );
};
