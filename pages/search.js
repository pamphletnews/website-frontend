import { useTranslation } from 'next-i18next';

const Search = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('search')}</h1>
      {/* Add search functionality */}
    </div>
  );
};

export default Search;
