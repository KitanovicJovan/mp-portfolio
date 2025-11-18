import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Icon = ({ name, className }: { name: string; className: string }) => (
  <span className={className} aria-label={name}>
    [{name}]
  </span>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-primary-900 text-primary-100 p-8 sm:p-12 border-t border-primary-700">
      {/* GLAVNI KONTEJNER: Koristi md:items-center za VERT. centriranje sekcija */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0 md:gap-x-12">
        {/* SEKCIJA 1: Kontakt Informacije (Leva) */}
        {/* KLJUČNA IZMENA: items-center za mobilni, i md:items-center za desktop
           (umesto md:items-start) za HORIZONTALNO centriranje sadržaja unutar ovog diva. */}
        <div className="flex flex-col items-center md:items-center space-y-2 w-full md:flex-1">
          <div className="font-heading font-extrabold text-2xl text-secondary mb-2 md:text-center">
            {t('app.name')}
          </div>

          <p className="text-sm-custom text-primary-200">
            {t('footer.address_line1')}
          </p>
          <p className="text-sm-custom text-primary-200">
            {t('footer.address_line2')}
          </p>

          <a
            href={`mailto:${t('footer.email')}`}
            className="text-sm-custom text-primary-500 hover:text-primary-400 transition"
          >
            {t('footer.email')}
          </a>
        </div>

        {/* SEKCIJA 2: Društvene Mreže (Srednja) - Već centrirana */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <p className="text-base-custom font-semibold mb-4 text-white">
            {t('footer.social_title')}
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-secondary hover:text-primary-500 transition duration-300"
            >
              <Icon name="in" className="text-2xl" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-secondary hover:text-primary-500 transition duration-300"
            >
              <Icon name="git" className="text-2xl" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-secondary hover:text-primary-500 transition duration-300"
            >
              <Icon name="tw" className="text-2xl" />
            </a>
          </div>
        </div>

        {/* SEKCIJA 3: Navigacija (Desna) */}
        {/* KLJUČNA IZMENA: items-center za mobilni, i md:items-center za desktop
           (umesto md:items-end) za HORIZONTALNO centriranje sadržaja unutar ovog diva. */}
        <div className="flex flex-col items-center md:items-center space-y-2 w-full md:flex-1">
          <p className="text-base-custom font-semibold mb-2 text-white md:text-center">
            {t('footer.nav_title')}
          </p>
          <Link
            to="/"
            className="text-sm-custom text-primary-200 hover:text-secondary transition"
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/about"
            className="text-sm-custom text-primary-200 hover:text-secondary transition"
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/services"
            className="text-sm-custom text-primary-200 hover:text-secondary transition"
          >
            {t('nav.services')}
          </Link>
          <Link
            to="/contact"
            className="text-sm-custom text-primary-200 hover:text-secondary transition"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-primary-700 text-center">
        <p className="text-xs-custom text-primary-400">
          &copy; {new Date().getFullYear()} {t('app.name')}. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
