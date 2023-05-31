import Head from 'next/head';
//layout components
import { Footer, Navbar } from '@components/index';

export default function Layout({ children, additionalClass }) {
  return (
    <>
      <div className={`${additionalClass}`}>
        <Head>
          <title>stone</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
