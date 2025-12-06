import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IconProps {
  className: string;
}

const MenuIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'sr' | 'en') => {
    i18n.changeLanguage(lng);
  };
  const currentLanguage = i18n.language;

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { to: '/', text: t('nav.home'), isContact: false },
    { to: '/about', text: t('nav.about'), isContact: false },
    { to: '/services', text: t('nav.services'), isContact: false },
    { to: '/contact', text: 'Kontakt', isContact: true },
  ];

  const contactButtonClasses =
    'bg-secondary text-primary-900 px-4 py-0.5 rounded-md font-semibold hover:bg-secondary-700 transition duration-300 transform hover:scale-105 shadow-md ml-4 text-sm';

  const defaultLinkClasses = (isActive: boolean) =>
    `font-body text-base font-medium transition duration-200 py-2 relative
      ${isActive ? 'text-secondary' : 'text-primary-100 hover:text-secondary'}
      hover:border-b-2 hover:border-secondary
      ${isActive ? 'border-b-2 border-secondary' : 'border-b-2 border-transparent'}
    `;

  const mobileLinkClasses = (isActive: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium transition duration-200
      ${
        isActive
          ? 'bg-primary-700 text-secondary'
          : 'text-primary-100 hover:bg-primary-700 hover:text-secondary'
      }
    `;

  return (
    <header className="fixed top-0 left-0 w-full bg-primary-900 text-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="font-heading font-bold text-2xl text-secondary hover:text-secondary-700 transition duration-300"
          >
            {t('app.name')}
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.to);

            const className = link.isContact
              ? contactButtonClasses
              : defaultLinkClasses(isActive);

            const dataTextProp = link.isContact
              ? {}
              : { 'data-text': link.text };

            return (
              <Link
                key={link.to}
                to={link.to}
                className={className}
                {...dataTextProp}
              >
                {link.text}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage('sr')}
              className={`px-2 py-0.5 rounded-md font-semibold text-sm transition duration-200 
                ${
                  currentLanguage === 'sr'
                    ? 'bg-secondary text-primary-900 shadow-md'
                    : 'bg-primary-700 text-primary-100 hover:bg-primary-600'
                }
              `}
            >
              SR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-0.5 rounded-md font-semibold text-sm transition duration-200
                ${
                  currentLanguage === 'en'
                    ? 'bg-secondary text-primary-900 shadow-md'
                    : 'bg-primary-700 text-primary-100 hover:bg-primary-600'
                }
              `}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-md text-primary-100 hover:text-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Otvori/Zatvori glavni meni</span>
            {isMenuOpen ? (
              <CloseIcon className="h-6 w-6 block" />
            ) : (
              <MenuIcon className="h-6 w-6 block" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-primary-900 shadow-2xl transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 py-4'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.to);

            const className = mobileLinkClasses(isActive);

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={className}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
export default Header;
