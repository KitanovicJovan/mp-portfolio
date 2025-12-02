import { SectionWrapper } from '../../components/Wrappers/SectionWrapper';
import AboutMe from './AboutMe/AboutMe';
import UniqueApproach from './UniqueApproach/UniqueApproach';
import Experiance from './Experiance/Experiance';

const About = () => {
  return (
    <>
      <SectionWrapper id="hero" className="bg-orange-600">
        <AboutMe />
      </SectionWrapper>

      <SectionWrapper id="summary" className="bg-orange-500">
        <UniqueApproach />
      </SectionWrapper>

      <SectionWrapper id="keyExpiriance" className="bg-orange-400">
        <Experiance />
      </SectionWrapper>
    </>
  );
};

export default About;
