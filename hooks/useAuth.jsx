import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn, loggedOut } from 'redux/slice/userSlice';
import { getSession, signIn, signOut } from 'next-auth/react';
import { selectUser } from '@redux/store/selector';

export function useAuth() {
  const dispatch = useDispatch();
  const userStore = useSelector(selectUser);

  //! 카카오 로그인시 리다이렉트로 인해 페이지가 리로드 되기때문에 세션을 받아 오고 나서 스토어에 저장해야함.
  useEffect(() => {
    async function fetchData() {
      const userSession = await getSession();

      if (userSession) {
        dispatch(loggedIn(userSession.user));
      } else {
        dispatch(loggedOut(null));
      }
    }
    fetchData();
  }, [dispatch]);

  async function login() {
    signIn('kakao');
  }

  async function logout() {
    signOut('kakao');
  }

  return {
    userStore,
    login,
    logout,
  };
}
