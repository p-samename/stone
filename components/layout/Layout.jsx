import Head from 'next/head';
import { Footer, Navbar } from '@components/index';
//layout components

export const Layout = ({ children, additionalClass }) => {
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
};
