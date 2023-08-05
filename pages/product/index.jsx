import { HeadOption, Layout, Navbar } from '@components/index';

const TITLE = 'aesop products';
export default function Product() {
  return (
    <>
      <Navbar transparent={true} />
      <div className="relative min-h-[300px] bg-cover bg-right" style={{ background: 'url("/images/products/product_banner.png")' }}>
        <div className="absolute bottom-[24px] ml-24px">
          <h1 className="text-grey-g8 text-headLine1">바디 & 핸드</h1>
          <p className="text-grey-g8 text-caption3 text-[16px] mt-12px">
            이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.
          </p>
        </div>
      </div>
      {/* product contents */}
      <div className="productTab px-[48px] mt-48px">
        <h2 className="text-headLine">SPECIAL SELECTION</h2>
        <ul className="mt-12px flex gap-[16px] [&>.active]:bg-grey-g3 [&>.active]:px-12px [&>.active]:py-4px [&>.active]:rounded-8px [&>.active]:text-grey-g8 items-center [&>li]:text-body3">
          <li className="active">hair</li>
          <li>hair</li>
          <li>hair</li>
          <li>hair</li>
        </ul>
      </div>
      <div className="productContents mt-48px grid grid-cols-4 pad:grid-cols-3 mb:grid-cols-1 gap-[60px] [&>div]:cursor-pointer">
        <div className="max-w-[300px] mx-auto">
          <img className="max-h-[250px] object-cover" src="/images/products/perfume/tesit.png" alt="" />
          <div className="ml-24px">
            <p className="text-body2">레저렉션 아로마틱 핸드 워시</p>
            <p className="text-body3">₩ 150,000 / 50mL</p>
            <button className="flex items-center justify-center gap-[4px] text-body5 bg-grey-g4 w-[100%] text-grey-g8 py-8px rounded-4px mt-8px">
              <div className="ico_cart" />
              카트에 추가하기
            </button>
          </div>
        </div>
        <div>
          <img className="max-h-[250px] mx-auto object-cover" src="/images/products/perfume/tesit.png" alt="" />
        </div>
        <div>
          <img className="max-h-[250px] mx-auto object-cover" src="/images/products/perfume/tesit.png" alt="" />
        </div>
        <div>
          <img className="max-h-[250px] mx-auto object-cover" src="/images/products/perfume/tesit.png" alt="" />
        </div>
      </div>
    </>
  );
}

Product.getLayout = function getLayout(page) {
  return <Layout headOption={<HeadOption title={TITLE} />}>{page}</Layout>;
};
