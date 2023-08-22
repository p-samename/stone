import { Layout } from '@components/index';
import { SessionProvider, getSession } from 'next-auth/react';
import '@styles/home.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store/store';

function Stone({ Component, pageProps }) {
  const getLayout = Component.getLayout
    ? Component.getLayout || ((page) => page) // 페이지 별 특정 layout
    : function getLayout(page) {
        return <Layout>{page}</Layout>; // default layout
      };

  return (
    <>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          {getLayout(
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>,
          )}
        </SessionProvider>
      </Provider>
    </>
  );
}
export default Stone;

export async function getServerSideProps(context) {
  // Redux 상태나 세션 정보를 서버 사이드에서 가져올 수 있음
  const session = await getSession(context);
  // 이 곳에서 필요한 데이터를 불러와서 리턴해주면 됨

  return {
    props: {
      session,
    },
  };
}
