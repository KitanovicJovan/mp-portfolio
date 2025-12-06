import { SectionWrapper } from '../../components/Wrappers/SectionWrapper';
import DisplayOfServices from './DisplayOfServices/DisplayOfServices';
import Hero from './Hero/Hero';
import KeyExpertise from './KeyExpertise/KeyExpertise';
import Summary from './Summary/Summary';

const Home = () => {
  return (
    <>
      <SectionWrapper id="hero" className="bg-red-600 min-h-screen">
        {' '}
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="summary" className="bg-red-500">
        <Summary />
      </SectionWrapper>

      <SectionWrapper id="keyExpiriance" className="bg-red-400">
        <KeyExpertise />
      </SectionWrapper>

      <SectionWrapper id="displayOfServices" className="bg-red-300">
        <DisplayOfServices />
      </SectionWrapper>
    </>
  );
};

export default Home;
