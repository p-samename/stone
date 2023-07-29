import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, HeadOption, Layout, Navbar, MainProductSlideContents } from '@components/index';
import { useEffect, useState } from 'react';
// Import Swiper React components

// Import Swiper styles

const TITLE = 'stone';
export default function Main() {
  const [product, setProduct] = useState();

  const getProduct = async () => {
    await axios({
      method: 'get',
      url: '/api/products',
    })
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  if (!product) return;

  return (
    <>
      <Navbar />
      <div className="mainBlock h-[768px] bg-cover bg-center bg-no-repeat" style={{ background: 'url("/images/main.png")' }}>
        <div className="transition-all flex flex-col scale-[2] mb:scale-[1.5] items-center w-max relative top-[50%] left-[50%] translate-x-[-45%]">
          <div className="logo" alt="logo" />
          <p className="w-max mb:w-[200px] text-center text-caption4 text-grey-g8 font-light">‘If the path be beautiful, let us not ask where it leads.’</p>
        </div>
      </div>
      {/* slide */}
      <div className="product1 flex gap-[40px] relative mb:flex-col bg-grey-g6 items-center h-[max] py-48px">
        {/* infoBlock */}
        <div className="flex flex-col w-[280px] pad:ml-[80px] mb:mx-auto h-[100%] justify-center">
          <p className="text-[44px] mb-12px">HAND</p>
          <p className="text-body5 mb-24px">
            이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.
          </p>
          <Button title={'모든 제품 보러가기'} />
        </div>
        {/* infoBlock */}
        {/* slide */}
        <Swiper
          style={{ position: 'unset' }}
          className="w-[100%] [&_.swiper-pagination-progressbar-fill]:bg-primary-p3 [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination]:top-[unset]"
          modules={[Navigation, Pagination, Scrollbar, A11y]} //
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          pagination={{
            type: 'progressbar',
          }}>
          {product.map((product, idx) => {
            return (
              <>
                <SwiperSlide>
                  <MainProductSlideContents key={idx} product={product} />
                </SwiperSlide>
              </>
            );
          })}
          {/* slide */}
        </Swiper>
      </div>
    </>
  );
}

Main.getLayout = function getLayout(page) {
  return (
    <Layout additionalClass={'home'} headOption={<HeadOption title={TITLE} />}>
      {page}
    </Layout>
  );
};
