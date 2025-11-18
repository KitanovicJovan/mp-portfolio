import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 pt-20">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-2xl w-full text-center border border-primary-100">
        <h1 className="text-3xl sm:text-4xl-custom font-heading font-extrabold text-primary-700 mb-6 leading-tight">
          {t('pages.contact_title')}
        </h1>

        <p className="text-lg-custom text-primary-900 font-semibold mb-4 px-2">
          {t('pages.contact_text')}
        </p>

        <p className="text-base-custom text-gray-600 mt-6">
          Prikazujemo listu servisa uskoro.
        </p>
      </div>
    </div>
  );
};

export default Contact;
