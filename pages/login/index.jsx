import { HeadOption, Layout, Navbar } from '@components/index';
import { useAuth } from '@hooks/useAuth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TITLE = 'login';
export default function Login() {
  const { userStore, login, logout } = useAuth();

  return (
    <>
      <Navbar />
      <div className="h-[60px]"></div>
      <div className="loginBlock py-[120px] text-center">
        <div>로그인</div>

        {userStore.user ? (
          <button className="bg-sub-n2 text-grey-g8 w-[100%] max-w-[200px] py-8px rounded-4px mt-48px" onClick={() => logout()}>
            로그아웃하기
          </button>
        ) : (
          <button className="bg-sub-n2 text-grey-g8 w-[100%] max-w-[200px] py-8px rounded-4px mt-48px" onClick={() => login()}>
            카카오톡으로 로그인하기
          </button>
        )}
      </div>
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <Layout headOption={<HeadOption title={TITLE} />}>{page}</Layout>;
};
