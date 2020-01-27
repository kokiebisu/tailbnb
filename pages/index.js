import img from '../public/header.jpg'

const Home = () => {
    return (
        <>
            <header style={{backgroundImage: `url(${img})`}} className="w-full h-64 bg-cover bg-no-repeat bg-right-top">This is working!</header>
        </>
    )
}

export default Home;