import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

const Category = ({ articles }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('category')}</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps({ params, locale }) {
  const res = await axios.get(`http://localhost:1337/categories/${params.id}/articles?_locale=${locale}`);
  const articles = await res.data;

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Category;
