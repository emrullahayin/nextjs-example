import Layout from '../components/layout';
import { useRouter } from 'next/router';

function About() {
  let router = useRouter();
  let title = router.locale === 'tr' ? 'Hakkında' : 'About';

  return (
    <Layout>
      <hr />
      <h1>{title}</h1>
      <hr />
    </Layout>
  );
}

export default About;
