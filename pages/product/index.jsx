import { HeadOption, Icon, Layout, Navbar } from '@components/index';
import { useTab } from '@hooks/index';
import { PRODUCT_TYPE } from 'constant';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { mainContentApi } from 'service/api';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

const TITLE = 'aesop products';
export default function Product() {
  const router = useRouter();
  const currentPageNum = useRef(1);
  const [pagingSize, setPagingSize] = useState(8);
  const { currentIdx, onChangeIdx } = useTab('all');
  const productTab = Object.values(PRODUCT_TYPE);
  const productTabTitle = {
    all: '바디 & 핸드',
    body: '바디',
    hand: '핸드',
    perfume: '향수',
    hair: '헤어',
  };
  const [product, setProduct] = useState({
    title: '',
    content: [],
  });
  const getProduct = async (currentIdx) => {
    try {
      const mainContent = await mainContentApi.getMainProduct(currentIdx);
      setProduct(mainContent);
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  useEffect(() => {
    function handleScroll() {
      // 스크롤이 최하단에 도달했을 때 페이징 로직 실행
      let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + 50 >= scrollHeight - clientHeight) {
        currentPageNum.current += 1;
        setPagingSize(8 * currentPageNum.current);
      }
    }
    window.addEventListener('scroll', handleScroll);
    //cleanUp
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pagingSize]);

  useEffect(() => {
    getProduct(currentIdx);
  }, [currentIdx]);

  return (
    <>
      <Navbar />
      <div className="relative min-h-[300px] bg-cover bg-right" style={{ background: 'url("/images/products/product_banner.png")' }}>
        <div className="absolute bottom-[24px] mx-24px">
          <h1 className="text-grey-g8 text-headLine1">{productTabTitle[product.title]}</h1>
          <p className="text-grey-g8 text-caption3 text-[16px] mt-12px">{product.description}</p>
        </div>
      </div>
      {/* product contents */}
      <div className="productTab px-[48px] mt-48px">
        <h2 className="text-headLine">SPECIAL SELECTION</h2>
        <ul className="mt-12px flex-wrap flex gap-[16px] [&>.active]:bg-grey-g3 [&>li]:px-12px [&>li]:py-4px [&>li]:rounded-8px [&>.active]:text-grey-g8 items-center [&>li]:text-body3 [&>li]:bg-grey-g6">
          {productTab.map((title, idx) => {
            return (
              <li
                className={`${product.title === title && 'active'} cursor-pointer`}
                key={idx}
                onClick={() => {
                  onChangeIdx(title);
                  currentPageNum.current = 1;
                  setPagingSize(8);
                }}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
      <AnimatePresence>
        <motion.div key={currentIdx} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }}>
          <div className="productContents my-48px mx-24px grid grid-cols-4 pad:grid-cols-3 mb:grid-cols-1 web:grid-cols-4 gap-[32px] [&>div]:cursor-pointer">
            {product.content.slice(0, pagingSize).map((content) => {
              return (
                <>
                  <div className="mx-auto px-24px py-20px   bg-grey-g6 rounded-12px">
                    <img className="h-[250px] max-w-[180px] object-contain mx-auto" src={content.imgPath} alt={content.title + `_img`} />
                    <div>
                      <p className="text-body2 text-center max-w-[200px] overflow-hidden text-ellipsis break-words line-clamp-1">{content.title}</p>
                      <p className="text-caption3 text-center mt-4px">
                        ₩{content.price.toLocaleString()} / {content.size}
                      </p>
                      <button className="transition-colors max-w-[200px] mx-auto flex items-center justify-center gap-[4px] text-body5 bg-grey-g4 hover:bg-primary-p1 rounded-4px w-[100%] text-grey-g8 py-8px mt-8px">
                        <Icon iconName="ico_cart" color="bg-grey-g8" />
                        카트에 추가하기
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

Product.getLayout = function getLayout(page) {
  return <Layout headOption={<HeadOption title={TITLE} />}>{page}</Layout>;
};
