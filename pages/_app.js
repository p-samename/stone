import { Layout } from '@components/index';
import { SessionProvider } from 'next-auth/react';
import '@styles/home.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Stone({ Component, pageProps }) {
  const getLayout = Component.getLayout
    ? Component.getLayout || ((page) => page) // 페이지 별 특정 layout
    : function getLayout(page) {
        return <Layout>{page}</Layout>; // default layout
      };

  return (
    <>
      <SessionProvider session={pageProps.session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
    </>
  );
}
export default Stone;
