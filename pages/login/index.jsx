import { HeadOption, Layout, Navbar } from '@components/index';
import { signIn, useSession, signOut, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loggedIn, loggedOut } from 'redux/slice/userSlice';

const TITLE = 'login';
export default function Login() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  function logout() {
    signOut('kakao');
    dispatch(loggedOut(null));
  }

  //! 카카오 로그인시 리다이렉트로 인해 페이지가 리로드 되기때문에 세션을 받아 오고 나서 스토어에 저장해야함.
  useEffect(() => {
    console.log(session);
    if (session) {
      dispatch(loggedIn(session.user));
    }
  }, [session]);

  return (
    <>
      <Navbar />
      <div className="h-[60px]"></div>
      <div className="loginBlock py-[120px] text-center">
        <div>로그인</div>

        {session ? (
          <button className="bg-sub-n2 text-grey-g8 w-[100%] max-w-[200px] py-8px rounded-4px mt-48px" onClick={() => logout()}>
            로그아웃하기
          </button>
        ) : (
          <button className="bg-sub-n2 text-grey-g8 w-[100%] max-w-[200px] py-8px rounded-4px mt-48px" onClick={() => signIn('kakao')}>
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
