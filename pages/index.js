import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';

function HomePage() {
  let { t } = useTranslation();

  return (
    <Layout>
      <h3 className="mt-3">{t('home:title')}</h3>
      <p>{t('home:description')}</p>
    </Layout>
  );
}

export default HomePage;
