import { useEffect, useRef, useState } from 'react';
import { Icon } from '..';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUser } from '@redux/store/selector';

export function Navbar({ transparent = false, scrollEvent }) {
  const router = useRouter();
  const navRef = useRef();
  const userStore = useSelector(selectUser);
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
      <nav ref={navRef} className={`z-50 transition-all fixed w-[100%] py-16px items-center flex ${transparent ? 'bg-none' : 'bg-primary-p1'}`} style={{ top: '0px' }}>
        <div
          className="logo cursor-pointer"
          alt="logo"
          onClick={() => {
            location.href = '/';
          }}
        />
        <div className="flex ml-auto gap-[24px]">
          <button>
            <Icon iconName="ico_cart" color="bg-grey-g8" size="w-[24px] h-[24px]" additionalClass="ml-auto" />
          </button>
          <button>
            <Icon iconName="ico_heart" color="bg-grey-g8" size="w-[24px] h-[24px]" additionalClass="ml-auto" />
          </button>
          <button onClick={() => router.push('/login')}>
            {userStore.user ? (
              <div className="mr-24px rounded-full bg-cover bg-center w-[24px] h-[24px]" style={{ backgroundImage: `url('${userStore.user.image}')` }}></div>
            ) : (
              <Icon iconName="ico_people" color="bg-grey-g8" size="h-[24px]" additionalClass="ml-auto" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
