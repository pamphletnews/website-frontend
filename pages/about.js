import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('about_us')}</h1>
      {/* Add about us content */}
    </div>
  );
};

export default About;
