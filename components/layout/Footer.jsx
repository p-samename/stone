export function Footer() {
  return (
    <>
      <div className="w-[100%] h-max bg-primary-p1 py-40px">
        <div className="flex flex-col items-center">
          <div className="px-12px logo" src="/images/logo.svg" />
          <ul className="flex gap-[12px] [&>li]:text-grey-g8 text-body5  my-24px">
            <li>HOME</li>
            <li>PRODUCT</li>
            <li>STORE</li>
            <li>WISHLIST</li>
            <li>CART</li>
          </ul>
          <p className="text-body5 text-grey-g8">@2023 All Right Reserved by stone</p>
        </div>
      </div>
    </>
  );
}
