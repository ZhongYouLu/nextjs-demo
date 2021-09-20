import Head from 'next/head';
import Alert from '@/components/Alert';
import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from '@/styles/Utils.module.scss';

export default function Home(): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Alert type="success">123</Alert>
      </section>
    </Layout>
  );
}
