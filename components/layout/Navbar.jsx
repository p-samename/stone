import { useEffect, useRef, useState } from 'react';

export function Navbar({ transparent = false, scrollEvent }) {
  const [scrollTop, setScrollTop] = useState();
  const navRef = useRef();
  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollTop(window.scrollY);
    });
    if (scrollTop > 0) {
      navRef.current.style.top = '-100px';
    } else {
      navRef.current.style.top = '0px';
    }

    //clean event
    window.removeEventListener('scroll', function () {
      setScrollTop(window.scrollY);
    });
  }, [scrollTop]);

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
