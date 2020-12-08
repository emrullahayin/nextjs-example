import Layout from '../components/layout';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

function About() {
  let { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('about:title')}</title>
      </Head>
      <p className="fs-5">{t('about:description')}</p>
    </Layout>
  );
}

export default About;
