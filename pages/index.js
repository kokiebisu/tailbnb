// Component
import Header from '../components/Header';

import img1 from '../public/experience1.jpg';

const Home = () => {
	return (
		<>
			<Header />
			<div className='max-w-layout mx-auto my-32'>
				<h3 className='text-2xl font-medium py-3 mt-5'>Explore Airbnb</h3>
				<div className='flex flex-wrap items-center justify-start w-full'>
					<div className='lg:w-1/3 '>
						<div className='mr-4 flex flex-wrap items-center justify-start shadow-xl rounded-xl bg-white'>
							<img
								src={img1}
								className='rounded-xl rounded-r-none'
								style={{ height: 80, width: 'auto' }}
								alt=''
							/>
							<p class='pl-4'>Stays</p>
						</div>
					</div>
					<div className='lg:w-1/3 '>
						<div className='mr-4 flex flex-wrap items-center justify-start shadow-xl rounded-xl bg-white'>
							<img
								src={img1}
								className='rounded-xl rounded-r-none'
								style={{ height: 80, width: 'auto' }}
								alt=''
							/>
							<p class='pl-4'>Stays</p>
						</div>
					</div>{' '}
					<div className='lg:w-1/3 '>
						<div className='mr-4 flex flex-wrap items-center justify-start shadow-xl rounded-xl bg-white'>
							<img
								src={img1}
								className='rounded-xl rounded-r-none'
								style={{ height: 80, width: 'auto' }}
								alt=''
							/>
							<p class='pl-4'>Stays</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
