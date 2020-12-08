import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

function HomePage(stars) {
  let { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('home:title')}</title>
      </Head>
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div className="card">
            <Image
              src="/img/2536709_1200x627.jpg"
              alt="Picture of the author"
              width={500}
              height="auto"
            />
            <div className="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p className="card-text">{t('home:description')}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
