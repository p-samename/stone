import Router from 'next/router';
import { kakaoInit } from 'utils/kakaoInit';

export default function Kakao() {
  const kakaoLogin = async () => {
    // 카카오 초기화
    const kakao = kakaoInit();
    // 카카오 로그인 구현
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: '/v2/user/me', // 사용자 정보 가져오기
          success: (res) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
            console.log(res);
            Router.push('/');
          },
          fail: (error) => {
            console.log(error);
          },
        });
      },
      fail: (error) => {
        console.log(error);
      },
    });
  };

  const KakaoLogout = () => {
    const kakao = kakaoInit();

    console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)

    // 카카오 로그인 링크 해제
    kakao.API.request({
      url: '/v1/user/unlink',
      success: (res) => {
        // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
        console.log(res);
        Router.push('/');
      },
      fail: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <>
      <div>로그인</div>
      <button onClick={kakaoLogin}>로그인하기</button>
      <button onClick={KakaoLogout}>로그아웃하기</button>
    </>
  );
}
