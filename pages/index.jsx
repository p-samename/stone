import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, HeadOption, Layout, Navbar, MainProductSlideContents } from '@components/index';
import { useEffect, useState } from 'react';
import { MainContent } from '@components/content/MainContents';
// Import Swiper React components

// Import Swiper styles

const TITLE = 'Aesop Main';
export default function Main() {
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
      <MainProductSlideContents productType={'perfume'} additionalClass={'bg-grey-g7'} />
      {/* 상품 슬라이드 컨텐츠 */}

      <MainContent
        title={'브론즈 인센스 홀더'} //
        subTitle={'고요함을 불어넣는 홈 케어 제품'}
        description={
          '보겔 스튜디오(Vogel Studio)가 이솝을 위해 디자인한 인센스 홀더로 공간에 평온한 분위기를 선사합니다.\
           하나하나 개별적으로 제작되며, 청동으로 주조되어 시간이 지남에 따라 자연스러운 녹청이 생길 수 있습니다.'
        }
        imagePath={'/images/products/homeCare/insence_main.png'}
        buttonTitle={'홈케어 제품 보러가기'}
      />

      <MainContent
        title={'도시 생활을 위한 가벼운 레이어'} //
        subTitle={'안티 옥시던트 인텐스 세럼'}
        description={
          '도시 생활자를 고려해 개발된 이 세럼은 지속적이면서도 가볍고 빠른 수분 공급과 항산화 성분이\
           풍부한 영양 보충을 돕고 피부가 편안한 보호막을 형성하여 피부를 탄탄하게 지켜줍니다.'
        }
        imagePath={'/images/products/contentsImg/1.png'}
        buttonTitle={'인텐스 세럼 더보기'}
        reverseContent={true}
        bgColor="bg-grey-g7"
      />

      <MainContent
        title={'도시 생활을 위한 가벼운 레이어'} //
        subTitle={'안티 옥시던트 인텐스 세럼'}
        description={
          '도시 생활자를 고려해 개발된 이 세럼은 지속적이면서도 가볍고 빠른 수분 공급과 항산화 성분이\
           풍부한 영양 보충을 돕고 피부가 편안한 보호막을 형성하여 피부를 탄탄하게 지켜줍니다.'
        }
        imagePath={'/images/products/contentsImg/2.png'}
        buttonTitle={'인텐스 세럼 더보기'}
        bgColor="bg-grey-g7"
      />
      <MainContent
        title={'도시 생활을 위한 가벼운 레이어'} //
        subTitle={'안티 옥시던트 인텐스 세럼'}
        description={
          '도시 생활자를 고려해 개발된 이 세럼은 지속적이면서도 가볍고 빠른 수분 공급과 항산화 성분이\
           풍부한 영양 보충을 돕고 피부가 편안한 보호막을 형성하여 피부를 탄탄하게 지켜줍니다.'
        }
        imagePath={'/images/products/contentsImg/3.png'}
        buttonTitle={'인텐스 세럼 더보기'}
        bgColor="bg-grey-g7"
      />

      {/* 상품 슬라이드 컨텐츠 */}
      <MainProductSlideContents productType={'hand'} additionalClass={'bg-grey-g6'} />
      {/* 상품 슬라이드 컨텐츠 */}

      <div className="relative my-24px  mb:hidden">
        <img className="pad:w-[70%] ml-auto" src="/images/products/contentsImg/4.png" />
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
