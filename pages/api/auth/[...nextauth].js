import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  //   session: {
  //     // 세션 유지 기간 설정 (1초)
  //     maxAge: 1,
  //   },

  callbacks: {
    //access 토큰 받아옴
    // async jwt({ token, account, profile }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //     token.id = profile.id;
    //   }
    //   return token;
    // },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.sub;
      // console.log("token", token);
      return session;
    },
  },
});
