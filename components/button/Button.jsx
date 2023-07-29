export function Button({ title, clkFunc }) {
  return (
    <button className="flex gap-[12px] w-max px-24px py-8px bg-primary-p1 text-grey-g8 rounded-8px" onClick={() => clkFunc}>
      {title} <div className="button_arrow" />
    </button>
  );
}
