import Layout from '../components/layout';
import { useRouter } from 'next/router';

function HomePage(props) {
  return (
    <Layout>
      <hr />
      <h1>{props.title}</h1>
      <hr />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  let title = locale === 'tr' ? 'Anasayfa' : 'Home';
  return {
    props: {
      title,
      locale,
    },
  };
}

export default HomePage;
