import img1 from '../public/adventures1.jpg';
import img2 from '../public/adventures2.jpg';
import img3 from '../public/adventures3.jpg';

export default () => {
  return (
    <div className='lg:w-1/4'>
      <img className='rounded-lg' src={img1} alt='adventure1' />
      <p className='uppercase text-sm my-2 font-bold'>Norway</p>
      <p>2 Nights PACKAGE All Inclusive</p>
      <p>
        FROM $841/person<span> · </span>3 days
      </p>
    </div>
  );
};
