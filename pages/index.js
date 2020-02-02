// Wrapper
import Section from '../components/Section';
import SectionWithPhrase from '../components/SectionWithPhrase';
import SectionOverflow from '../components/SectionOverflow';

// Component
import Header from '../components/Header';
import Explore from '../components/Explore';
import Plus from '../components/Plus';
import Adventures from '../components/Adventures';
import Stay from '../components/Stay';
import TopRated from '../components/TopRated';
import Popular from '../components/Popular';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <SectionOverflow title='Explore Airbnb'>
        <Explore />
      </SectionOverflow>
      <Section
        title='Airbnb Plus places to stay'
        phrase='A selection of places to stay verified for quality and design'>
        <Plus />
      </Section>
      <Section
        title='Introducing Airbnb Adventures'
        phrase='Multi-day trips led by local experts—activities, meals, and stays
        included'>
        <Adventures />
      </Section>
      <Section title='Places to stay around the world'>
        <Stay />
      </Section>
      <Section
        title='Top-rated experiences'
        phrase='Book activities led by local hosts on your next trip.'>
        <TopRated />
      </Section>
      <Section title='Popular destinations in the United States'>
        <Popular />
      </Section>
      <Section
        title='Featured Airbnb Plus destinations'
        phrase='Browse beautiful places to stay with all the comforts of home, plus more'>
        <Featured />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
