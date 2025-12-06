import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ArrowRightIcon: React.FC<any> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const ArrowDownIcon: React.FC<any> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CrossIcon: React.FC<any> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
  </svg>
);

const LogoVisual: React.FC<{ text: string; subtext: string }> = ({
  text,
  subtext,
}) => (
  <div className="relative w-full h-auto aspect-square bg-primary-700/50 rounded-[3rem] flex justify-center items-center p-10 transform rotate-[4deg] perspective-3d zoom-in-animation delay-1000 will-change-transform">
    <div className="text-center relative">
      <div className="flex items-center justify-center space-x-0 font-black text-[6rem] sm:text-[8rem] lg:text-[10rem] leading-none text-secondary">
        <span className="transform pulse-subtle-animation">M</span>

        <div className="h-[4.5rem] sm:h-[6rem] lg:h-[7.5rem] w-1.5 bg-secondary mx-4 transform"></div>

        <span className="transform pulse-subtle-animation delay-500">P</span>
      </div>

      <p className="text-2xl mt-4 font-heading font-extrabold text-white uppercase tracking-wider">
        {text}
      </p>
      <p className="text-sm mt-1 font-body text-primary-100/70">{subtext}</p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-full grow overflow-hidden bg-primary-900 text-white flex items-center">
      <div className="absolute inset-0 z-0 opacity-80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw] bg-secondary opacity-2 blur-3xl rounded-full transform rotate-12 pulse-slow-animation will-change-transform"></div>

        <CrossIcon className="absolute top-[12%] left-[10%] w-8 h-8 text-accent-500 transform pulse-fast-animation delay-500 will-change-transform" />
        <CrossIcon className="absolute bottom-[10%] right-[10%] w-10 h-10 text-secondary transform pulse-fast-animation delay-1500 rotate-45 will-change-transform" />
        <CrossIcon className="absolute top-[40%] right-[5%] w-6 h-6 text-primary-500 transform pulse-fast-animation delay-1000 will-change-transform" />

        <div className="absolute top-0 left-0 w-full h-full stetho-line-1"></div>
        <div className="absolute top-0 left-0 w-full h-full stetho-line-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center pt-16 pb-16 mt-6 md:mt-0 flex-col justify-center">
        <div className="md:grid md:grid-cols-12 md:gap-16 items-center w-full">
          <div className="md:col-span-7 lg:col-span-7 text-center md:text-left">
            <p className="text-secondary font-body font-bold text-xl mb-4 tracking-widest uppercase bounce-fade-in delay-200 will-change-transform">
              {t('hero.tagline')}
            </p>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-6 text-white bounce-fade-in delay-400 will-change-transform">
              {t('hero.title')}
            </h1>

            <p className="font-body text-xl sm:text-2xl text-primary-100 opacity-90 mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0 bounce-fade-in delay-600 will-change-transform">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 bounce-fade-in delay-800 will-change-transform">
              <Link
                to="/services"
                className="inline-flex items-center justify-center sm:justify-start px-10 py-4 text-xl font-bold rounded-full bg-secondary text-primary-900 hover:bg-secondary-700 transition duration-300 transform hover:translate-y-[-2px] hover:shadow-secondary focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-opacity-70 w-full sm:w-auto shadow-2xl"
              >
                {t('hero.primary_cta')}
                <ArrowRightIcon className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition duration-300" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center sm:justify-start px-8 py-3 text-lg font-bold rounded-full border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-900 transition duration-300 focus:outline-none focus:ring-4 focus:ring-accent-500 focus:ring-opacity-70 w-full sm:w-auto"
              >
                {t('hero.secondary_cta')}
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5 mt-16 md:mt-0 flex justify-center items-center hidden md:block">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <LogoVisual
                text={t('hero.visual_focus')}
                subtext={t('hero.visual_subtitle')}
              />

              <CrossIcon className="absolute top-[-20px] left-[-30px] w-16 h-16 text-secondary transform pulse-fast-animation rotate-45 will-change-transform" />
              <CrossIcon className="absolute bottom-[-40px] right-[-40px] w-20 h-20 text-accent-500 transform pulse-slow-animation delay-1500 will-change-transform" />
              <CrossIcon className="absolute top-[20%] right-[-5px] w-8 h-8 text-primary-500 transform pulse-animation delay-500 rotate-90 will-change-transform" />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full flex justify-center block md:hidden">
          <a
            href="#next-section"
            aria-label="Scroll down to next section"
            className="flex flex-col items-center"
          >
            <ArrowDownIcon className="w-10 h-10 text-secondary animate-bounce will-change-transform" />
            <ArrowDownIcon className="w-10 h-10 text-secondary animate-bounce delay-100 will-change-transform" />
            <ArrowDownIcon className="w-10 h-10 text-secondary animate-bounce delay-200 will-change-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
