import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loggedIn, loggedOut } from 'redux/slice/userSlice';
import { getSession, signIn, signOut } from 'next-auth/react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const dispatch = useDispatch();

  //! 카카오 로그인시 리다이렉트로 인해 페이지가 리로드 되기때문에 세션을 받아 오고 나서 스토어에 저장해야함.
  useEffect(() => {
    async function fetchData() {
      const userSession = await getSession();
      setUser(userSession);

      if (userSession) {
        dispatch(loggedIn(userSession.user));
        setisLoggedIn(true);
      } else {
        dispatch(loggedOut(null));
        setisLoggedIn(false);
      }
    }
    fetchData();
  }, [dispatch]);

  async function login() {
    signIn('kakao');
  }

  async function logout() {
    signOut('kakao');
    dispatch(loggedOut(null));
  }

  return {
    isLoggedIn,
    user,
    login,
    logout,
  };
}
