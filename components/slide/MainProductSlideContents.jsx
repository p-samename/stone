import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@components/index';
import { useEffect, useState } from 'react';
import { mainContentApi } from 'service/api';
import { useRouter } from 'next/router';

export function MainProductSlideContents({ additionalClass, productType }) {
  const router = useRouter();
  const [product, setProduct] = useState();
  const getProduct = async (productType) => {
    try {
      const mainContent = await mainContentApi.getMainProduct(productType);
      setProduct(mainContent);
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  useEffect(() => {
    getProduct(productType);
  }, []);

  if (!product) return;
  return (
    <>
      <div className={`product1 flex gap-[40px] relative mb:flex-col items-center h-[max] py-48px ${additionalClass} `}>
        {/* infoBlock */}
        <div className="flex flex-col w-[280px] pad:ml-[80px] web:ml-[80px] mb:mx-auto h-[100%] justify-center">
          <p className="text-[44px] mb-12px">{product.title.toUpperCase()}</p>
          <p className="text-body5 mb-24px">{product.description}</p>
          <Button title={'모든 제품 보러가기'} clkFunc={() => router.push('/product')} />
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
            1400: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 3.5,
            },
          }}
          pagination={{
            type: 'progressbar',
          }}>
          {product.content.map((product, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="px-24px">
                  <div className="h-60 mb:h-[250px]" style={{ background: `url(${product.imgPath}) no-repeat center`, backgroundSize: 'contain' }} />
                  <p className="text-center mb-8px text-body2">{product.title}</p>
                  <p className="text-center w-25 mx-auto text-body5">{product.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* slide */}
      </div>
    </>
  );
}
