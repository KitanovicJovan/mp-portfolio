import { SectionWrapper } from '../../components/Wrappers/SectionWrapper';
import ExpertiseAndExperiance from './ExpertiesAndExperiance/ExpertiesAndExperiance';
import Kinesitherapy from './Kinesitherapy/Kinesitherapy';
import Massage from './Massage/Massage';
import TerapeuticSkills from './TerapeuticSkills/TerapeuticSkills';

const Services = () => {
  return (
    <>
      <SectionWrapper id="hero" className="bg-yellow-600">
        <ExpertiseAndExperiance />
      </SectionWrapper>

      <SectionWrapper id="hero" className="bg-yellow-500">
        <Kinesitherapy />
      </SectionWrapper>

      <SectionWrapper id="hero" className="bg-yellow-400">
        <Massage />
      </SectionWrapper>

      <SectionWrapper id="hero" className="bg-yellow-300">
        <TerapeuticSkills />
      </SectionWrapper>
    </>
  );
};

export default Services;
