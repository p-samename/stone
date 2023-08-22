import Head from 'next/head';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export function HeadOption({ title, description, children }) {
  const router = useRouter();
  const _title = useMemo(() => (title ? title + ' | stone' : 'stone'), [title]);
  const _description = useMemo(() => description || 'stone portfolio', [description]);
  const _url = useMemo(() => 'https://stone-p-samename.vercel.app' + router.asPath.substring(0, router.asPath.indexOf('?')), [router]);
  return (
    <Head key="head">
      <title key="title">{_title}</title>
      <meta key="charset" charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta key="viewport" name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <meta key="keywords" name="keywords" content="stone, portfolio, 포트폴리오, 박동명" />
      <meta key="description" name="description" content={_description} />
      <meta property="og:url" content={_url || 'https://stone-p-samename.vercel.app'} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="stone" />
      <meta property="og:locale" content="ko" />
      <meta property="og:image" content="/images/products/contentsImg/1.png" />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <script async src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      {children}
    </Head>
  );
}

HeadOption.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};
