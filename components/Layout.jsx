import Head from 'next/head';
import Navbar from '@/components/Navbar';
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
        <footer>
          <div>test footer</div>
        </footer>
      </div>
    </>
  );
}
