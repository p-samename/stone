import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, HeadOption, Layout, Navbar, MainProductSlideContents } from '@components/index';
import { useEffect, useState } from 'react';
import { MainContent } from '@components/content/MainContents';
import { mainContentApi } from 'service/api';

const TITLE = 'Aesop Main';
export default function Main() {
  const [mainContent, setMainContent] = useState();

  //main content API
  const getMainContent = async () => {
    try {
      const mainContent = await mainContentApi.getMainContent();
      setMainContent(mainContent); // API에서 가져온 데이터 사용
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  useEffect(() => {
    getMainContent();
  }, []);
  //main content API

  return (
    <>
      <Navbar />
      <div className="mainBlock h-[768px] bg-cover bg-center bg-no-repeat" style={{ background: 'url("/images/main.png")' }}>
        <div className="transition-all flex flex-col scale-[2] mb:scale-[1.5] items-center w-max relative top-[50%] left-[50%] translate-x-[-45%]">
          <div className="logo" alt="logo" />
          <p className="w-max mb:w-[200px] text-center text-caption4 text-grey-g8 font-light">‘If the path be beautiful, let us not ask where it leads.’</p>
        </div>
      </div>

      {/* 상품 슬라이드 컨텐츠 */}
      <MainProductSlideContents productType={'perfume'} additionalClass={'bg-grey-g6'} />
      {/* 상품 슬라이드 컨텐츠 */}

      {/* <MainContent content={getMainContent} buttonTitle={'홈케어 제품 보러가기'} /> */}

      {mainContent && (
        <>
          <MainContent content={mainContent[0]} bgColor="bg-grey-g7" buttonTitle={'홈 케어 제품 보러가기'} />
          <MainContent content={mainContent[1]} reverseContent={true} bgColor="bg-grey-g7" buttonTitle={'인텐스 세럼 더보기'} />
          <MainContent content={mainContent[2]} bgColor="bg-grey-g7" buttonTitle={'인텐스 세럼 더보기'} />
          <MainContent content={mainContent[3]} bgColor="bg-grey-g7" buttonTitle={'인텐스 세럼 더보기'} />
        </>
      )}

      {/* 상품 슬라이드 컨텐츠 */}
      <MainProductSlideContents productType={'hand'} additionalClass={'bg-grey-g6'} />
      {/* 상품 슬라이드 컨텐츠 */}

      <div className="relative my-24px  mb:hidden">
        <img className="web:w-[70%] ml-auto" src="/images/products/contentsImg/4.png" />
        <blockquote className="text-[20px] text-body4 font-light absolute top-10 left-10">
          <q>
            A dream, when done, should leave no trace that it has lived,
            <br /> except a gleam across the dreamer’s face.
          </q>
          <p className="text-body5 mt-24px">Countee Cullen</p>
        </blockquote>
      </div>

      {/* store locator */}
      <div className="store-locate flex mb:flex-col bg-grey-g6 relative">
        <Swiper
          className="w-[60%] mb:w-[100%] [&_.swiper-pagination-progressbar-fill]:bg-primary-p3 [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination]:top-[unset]"
          modules={[Navigation, Pagination, Scrollbar, A11y]} //
          slidesPerView={1}
          pagination={{
            type: 'progressbar',
          }}>
          <SwiperSlide>
            <img src="/images/storeImg/store1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/storeImg/store1.png" alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="grid grid-col w-[40%] mb:w-[100%]">
          <div className="flex items-center">
            <div className="p-24px">
              <div className="flex items-center mb-4px gap-[4px]">
                <div className="ico_locate" />
                <p className="text-body4">이솝 성수</p>
              </div>
              <p className="text-caption3 w-max mb-12px">서울시 성동구 연무장길 57</p>
              <p className="w-[100%] text-caption3 whitespace-wrap">
                이솝 성수 스토어는 린스 앤 리턴 캠페인과 함께합니다.
                <br /> 다 사용한 이솝 제품의 재활용을 위해 깨끗이 세척한 공병을 선별된 이솝 스토어로 전달해주세요.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-grey-g7">
            <div className="p-24px">
              <p className="text-body4 mb-4px">STORE LOCATE</p>
              <p className="w-[100%] text-caption3 whitespace-wrap mb-12px">
                매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고,
                <br /> 기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.
              </p>
              <Button additionalClass={'text-caption2'} btnSize="small" title={'다른 매장 보기'} />
            </div>
          </div>
        </div>
      </div>
      {/* store locator */}
    </>
  );
}

Main.getLayout = function getLayout(page) {
  return <Layout headOption={<HeadOption title={TITLE} />}>{page}</Layout>;
};
