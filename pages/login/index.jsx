import { HeadOption, Layout, Navbar } from '@components/index';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const TITLE = 'login';
export default function Login() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  function login() {
    signOut('kakao');
    dispatch(login({ name: session.name, email: session.email }));
  }

  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <>
      <Navbar />
      <div className="h-[60px]"></div>
      <div className="loginBlock py-[120px] text-center">
        <div>로그인</div>

        {session ? (
          <button className="bg-sub-n2 text-grey-g8 w-[100%] max-w-[200px] py-8px rounded-4px mt-48px" onClick={() => login()}>
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
