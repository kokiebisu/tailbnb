// Component
import Header from '../components/Header';

import img1 from '../public/experience1.jpg';

const Home = () => {
	return (
		<>
			<Header />
			<div className='max-w-layout mx-auto'>
				<h3 className='text-2xl font-medium py-3 mt-5'>Explore Airbnb</h3>
				<div className='flex flex-wrap items-center justify-start w-full'>
					<div className='flex flex-wrap items-center justify-start lg:w-1/3 bg-white rounded-xl shadow-2xl border border-gray-200'>
						<img
							src={img1}
							className='rounded-xl rounded-r-none'
							style={{ height: 80, width: 'auto' }}
							alt=''
						/>
						<p class='pl-4'>Stays</p>
					</div>
					<div className='flex flex-wrap items-center justify-start w-1/3 bg-white rounded-xl '>
						<img
							src={img1}
							className='rounded-xl rounded-r-none'
							style={{ height: 80, width: 'auto' }}
							alt=''
						/>
						<p class='pl-4'>Stays</p>
					</div>
					<div className='flex flex-wrap items-center justify-start w-1/3 bg-white rounded-xl'>
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
		</>
	);
};

export default Home;
