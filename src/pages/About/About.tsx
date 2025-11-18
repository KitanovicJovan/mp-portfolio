import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 pt-20">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-2xl w-full text-center border border-primary-100">
        <h1 className="text-3xl sm:text-4xl-custom font-heading font-extrabold text-primary-700 mb-6 leading-tight">
          {t('pages.about_title')}
        </h1>

        <p className="text-lg-custom text-primary-900 font-semibold mb-4 px-2">
          {t('pages.about_text')}
        </p>

        <p className="text-base-custom text-secondary font-medium mt-6">
          Naša misija: Kreiranje čistih i modernih React aplikacija.
        </p>
      </div>
    </div>
  );
};

export default About;
