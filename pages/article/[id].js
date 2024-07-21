import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

const Article = ({ article }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export async function getServerSideProps({ params, locale }) {
  const res = await axios.get(`http://localhost:1337/articles/${params.id}?_locale=${locale}`);
  const article = await res.data;

  return {
    props: {
      article,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Article;
