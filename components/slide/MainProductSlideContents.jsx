export function MainProductSlideContents({ product }) {
  return (
    <>
      <div className="px-24px">
        <div className="h-60 mb:h-[250px]" style={{ background: `url(${product.imgPath}) no-repeat center`, backgroundSize: 'contain' }} />
        <p className="text-center mb-8px text-body2">{product.title}</p>
        <p className="text-center w-25 mx-auto text-body5">{product.description}</p>
      </div>
    </>
  );
}
