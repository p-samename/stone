export function Button({ title, clkFunc, additionalClass, btnSize = 'normal' }) {
  return (
    <button
      className={`${additionalClass} ${
        btnSize === 'small' ? 'px-12px py-4px' : 'px-12px py-8px'
      } flex gap-[12px] items-center w-max bg-primary-p1 text-body5 text-grey-g8 rounded-8px`}
      onClick={clkFunc}>
      {title} <div className={`button_arrow ${btnSize === 'small' && 'w-[12px]'}`} />
    </button>
  );
}
