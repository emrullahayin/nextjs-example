import Layout from '../components/layout';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

function HomePage() {
  let { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('home:title')}</title>
      </Head>
      <p>{t('home:description')}</p>
    </Layout>
  );
}

export default HomePage;
