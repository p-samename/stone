import Layout from '@components/Layout';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout
    ? Component.getLayout || ((page) => page) // 페이지 별 특정 layout
    : function getLayout(page) {
        return <Layout>{page}</Layout>; // default layout
      };

  return getLayout(<Component {...pageProps} />);
}
