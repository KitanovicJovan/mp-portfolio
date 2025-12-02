import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <h1 className="">{t('hero.title')}</h1>

      <p className="">{t('hero.subtitle')}</p>
    </div>
  );
};

export default Hero;
