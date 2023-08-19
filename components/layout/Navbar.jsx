import { useEffect, useRef, useState } from 'react';

export function Navbar({ transparent = false, scrollEvent }) {
  const navRef = useRef();
  //* scroll event
  useEffect(() => {
    let scrollY = window.scrollY;
    const handleScroll = () => {
      if (scrollY < window.scrollY && scrollY > 300) {
        if (scrollY) navRef.current.style.top = '-100px';
      } else {
        navRef.current.style.top = '0px';
      }
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    //! clean event
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //* scroll event

  return (
    <>
      <nav ref={navRef} className={`z-50 transition-all fixed w-[100%] py-16px flex ${transparent ? 'bg-none' : 'bg-primary-p1'}`} style={{ top: '0px' }}>
        <div
          className="logo cursor-pointer"
          alt="logo"
          onClick={() => {
            location.href = '/';
          }}
        />
      </nav>
    </>
  );
}
