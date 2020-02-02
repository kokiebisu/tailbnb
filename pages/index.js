// Wrapper
import Section from '../components/Section';
import SectionWithPhrase from '../components/SectionWithPhrase';

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
      <Section title='Explore Airbnb'>
        <Explore />
      </Section>
      <SectionWithPhrase title='what' phrase='hello'>
        <Plus />
      </SectionWithPhrase>
      <SectionWithPhrase
        title='Introducing Airbnb Adventures'
        phrase='Multi-day trips led by local experts—activities, meals, and stays
        included'>
        <Adventures />
      </SectionWithPhrase>
      <Section title='Places to stay around the world'>
        <Stay />
      </Section>
      <SectionWithPhrase
        title='Top-rated experiences'
        phrase='Book activities led by local hosts on your next trip.'>
        <TopRated />
      </SectionWithPhrase>
      <Section title='Popular destinations in the United States'>
        <Popular />
      </Section>
      <SectionWithPhrase
        title='Featured Airbnb Plus destinations'
        phrase='Browse beautiful places to stay with all the comforts of home, plus more'>
        <Featured />
      </SectionWithPhrase>
      <Section title=''>
        <Footer />
      </Section>
    </>
  );
};

export default Home;
