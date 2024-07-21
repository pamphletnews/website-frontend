import { useTranslation } from 'next-i18next';

const Subscribe = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('subscribe')}</h1>
      {/* Add subscribe form */}
    </div>
  );
};

export default Subscribe;
