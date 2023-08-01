export const kakaoInit = () => {
  const kakao = window.Kakao;
  if (!kakao.isInitialized()) {
    kakao.init('ebf67775083aaa067e44d5c704753a4e');
  }

  return kakao;
};
