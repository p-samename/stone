import { HeadOption, Icon, Layout, Navbar } from '@components/index';
import { useTab } from '@hooks/index';
import { PRODUCT_TYPE } from 'constant';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { mainContentApi } from 'service/api';

const TITLE = 'aesop products';
export default function Product() {
  const { currentIdx, onChangeIdx } = useTab('all');
  const router = useRouter();
  const productTab = Object.values(PRODUCT_TYPE);
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
    getProduct(currentIdx);
  }, [currentIdx]);

  return (
    <>
      <Navbar transparent={true} />
      <div className="relative min-h-[300px] bg-cover bg-right" style={{ background: 'url("/images/products/product_banner.png")' }}>
        <div className="absolute bottom-[24px] mx-24px">
          <h1 className="text-grey-g8 text-headLine1">{product.title}</h1>
          <p className="text-grey-g8 text-caption3 text-[16px] mt-12px">{product.description}</p>
        </div>
      </div>
      {/* product contents */}
      <div className="productTab px-[48px] mt-48px">
        <h2 className="text-headLine">SPECIAL SELECTION</h2>
        <ul className="mt-12px flex-wrap flex gap-[16px] [&>.active]:bg-grey-g3 [&>li]:px-12px [&>li]:py-4px [&>li]:rounded-8px [&>.active]:text-grey-g8 items-center [&>li]:text-body3 [&>li]:bg-grey-g6">
          {productTab.map((title, idx) => {
            return (
              <li className={`${product.title === title && 'active'} cursor-pointer`} key={idx} onClick={() => onChangeIdx(title)}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="productContents my-48px mx-24px grid grid-cols-4 pad:grid-cols-3 mb:grid-cols-1 gap-[32px] [&>div]:cursor-pointer">
        {product.content.map((content) => {
          return (
            <>
              <div className="mx-auto px-24px py-20px bg-grey-g6 rounded-12px">
                <img className="h-[250px] max-w-[200px] object-contain mx-auto" src={content.imgPath} alt={content.title + `_img`} />
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
    </>
  );
}

Product.getLayout = function getLayout(page) {
  return <Layout headOption={<HeadOption title={TITLE} />}>{page}</Layout>;
};
