import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function Kakao() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <>
      <div>{session?.user?.name} 로그인</div>
      {session ? <button onClick={() => signOut()}>로그아웃하기</button> : <button onClick={() => signIn('kakao')}>로그인하기</button>}
    </>
  );
}
