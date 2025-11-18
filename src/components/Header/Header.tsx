import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'sr' | 'en') => {
    i18n.changeLanguage(lng);
  };
  const currentLanguage = i18n.language;

  const isLinkActive = (path: string) => {
    // NAPOMENA: currentPath je hardkodovan na '/', verovatno zbog demo okruženja.
    // U realnoj aplikaciji ovde treba koristiti useLocation hook iz react-router-dom.
    const currentPath = '/';
    return currentPath === path;
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-primary-900 text-white shadow-xl flex justify-between items-center z-50">
      {/* SEKCIJA 1: LOGO - Fleksibilni "Branik" za Guranje Navigacije u Centar */}
      {/* KLJUČNA IZMENA: Dodato md:flex-1. Koristimo justify-start da bi logo ostao skroz levo. */}
      <div className="flex justify-start items-center ml-8 md:flex-1">
        <div className="font-heading font-bold text-2xl text-secondary">
          {t('app.name')}
        </div>
      </div>

      {/* SEKCIJA 2: NAVIGACIJA - Ostaje u Centru */}
      {/* Nema promene u nav elementu, jer se centriranje dešava zahvaljujući Sekciji 1 i 3. */}
      <nav className="hidden md:flex space-x-8 items-center">
        <Link
          to="/"
          data-text={t('nav.home')}
          className={`nav-link text-base-custom transition ${isLinkActive('/') ? 'active' : ''}`}
        >
          {t('nav.home')}
        </Link>

        <Link
          to="/about"
          data-text={t('nav.about')}
          className={`nav-link text-base-custom transition ${isLinkActive('/about') ? 'active' : ''}`}
        >
          {t('nav.about')}
        </Link>

        <Link
          to="/services"
          data-text={t('nav.services')}
          className={`nav-link text-base-custom transition ${isLinkActive('/services') ? 'active' : ''}`}
        >
          {t('nav.services')}
        </Link>
        <Link
          to="/contact"
          data-text={t('nav.contact')}
          className={`nav-link text-base-custom transition ${isLinkActive('/contact') ? 'active' : ''}`}
        >
          {t('nav.contact')}
        </Link>
      </nav>

      {/* SEKCIJA 3: JEZIK - Fleksibilni "Branik" za Guranje Navigacije u Centar */}
      {/* KLJUČNA IZMENA: Dodato md:flex-1. Koristimo justify-end da bi dugmad ostala skroz desno. */}
      <div className="flex justify-end items-center mr-8 space-x-2 md:flex-1">
        <button
          onClick={() => changeLanguage('sr')}
          className={`px-3 py-1 rounded-lg font-semibold text-sm-custom transition duration-200 ${
            currentLanguage === 'sr'
              ? 'bg-secondary text-primary-900 shadow-md'
              : 'bg-primary-700 text-primary-100 hover:bg-primary-600'
          }`}
        >
          SR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded-lg font-semibold text-sm-custom transition duration-200 ${
            currentLanguage === 'en'
              ? 'bg-secondary text-primary-900 shadow-md'
              : 'bg-primary-700 text-primary-100 hover:bg-primary-600'
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
