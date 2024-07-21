import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('contact')}</h1>
      {/* Add contact form */}
    </div>
  );
};

export default Contact;
