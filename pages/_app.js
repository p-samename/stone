import { Layout } from '@components/index';
import { SessionProvider } from 'next-auth/react';
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
        <PersistGate persistor={persistor}>
          <SessionProvider session={pageProps.session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
export default Stone;
