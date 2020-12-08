import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';

function About() {
  let { t } = useTranslation();

  return (
    <Layout>
      <h3 className="mt-3">{t('about:title')}</h3>
      <p>{t('about:description')}</p>
    </Layout>
  );
}

export default About;
