import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, HeadOption, Layout, Navbar } from '@components/index';
import { useEffect, useState } from 'react';
// Import Swiper React components

// Import Swiper styles

const TITLE = '메인';
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
        <div className="flex flex-col items-center pad:scale-[1.5] w-max relative top-[50%] left-[50%] translate-x-[-45%]">
          <div className="logo scale-[3] mb-24px" alt="logo" />
          <p className="w-max text-body5 mb:text-[12px] text-grey-g8">‘If the path be beautiful, let us not ask where it leads.’</p>
        </div>
      </div>
      {/* slide */}
      <div className="product1 flex relative flex-row bg-grey-g6 items-center h-[500px]">
        {/* infoBlock */}
        <div className="flex flex-col w-[280px] ml-80px h-[100%] justify-center">
          <p className="text-[50px]">HAND</p>
          <p>이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.</p>
          <Button title={'모든 제품 보러가기'} />
        </div>
        {/* infoBlock */}
        {/* slide */}
        <Swiper
          style={{ position: 'unset' }}
          className="[&_.swiper-pagination-progressbar-fill]:bg-primary-p2 [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination]:top-[unset]"
          modules={[Navigation, Pagination, Scrollbar, A11y]} //
          slidesPerView={3}
          freeMode={true}
          pagination={{
            type: 'progressbar',
          }}>
          {product.map((products, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="h-[350px]" style={{ background: `url(${products.imgPath}) no-repeat center`, backgroundSize: 'contain' }} />
                <p className="text-center">{products.title}</p>
                <p className="text-center">{products.description}</p>
              </SwiperSlide>
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
