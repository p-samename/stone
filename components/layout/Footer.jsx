import { useState } from 'react';

export function Footer() {
  return (
    <footer>
      <div className="w-[100%] h-max bg-primary-p1 py-40px">
        <div className="flex flex-col items-center">
          <div
            className="px-12px logo cursor-pointer"
            src="/images/logo.svg"
            onClick={() => {
              location.href = '/';
            }}
          />
          <ul className="flex gap-[12px] text-grey-g4 hover:[&>li]:text-grey-g8 cursor-pointer [&>li]:text-caption2  my-24px">
            <li>HOME</li>
            <li>PRODUCT</li>
            <li>STORE</li>
            <li>WISHLIST</li>
            <li>CART</li>
          </ul>
          <p className="text-body5 text-grey-g8">@2023 All Right Reserved by stone</p>
        </div>
      </div>
    </footer>
  );
}
