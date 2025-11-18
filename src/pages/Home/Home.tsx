import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 pt-20">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-primary-100">
        <h1 className="text-3xl sm:text-4xl-custom font-heading font-extrabold text-primary-700 mb-6 leading-tight">
          {t('header.title')}
        </h1>

        <div className="space-y-4">
          <p className="text-lg-custom text-primary-900 font-semibold px-2">
            {t('content.description')}
          </p>

          <div className="border-t border-gray-100 pt-4">
            <p className="text-base-custom text-gray-600 mb-2">
              {t('content.description2')}
            </p>
          </div>

          <p className="text-base-custom text-gray-600">
            {t('content.description3')}
          </p>
          <p className="text-sm-custom text-secondary font-medium">
            {t('content.description4')}
            <span className="text-gray-500 italic">
              {' '}
              (Ovaj deo koristi sekundarnu boju)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
