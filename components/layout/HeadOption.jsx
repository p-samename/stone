import Head from 'next/head';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

export function HeadOption({ title, description, children }) {
  const _title = useMemo(() => (title ? title + ' | stone' : 'stone'), [title]);
  const _description = useMemo(() => description || 'stone portfolio', [description]);
  return (
    <Head key="head">
      <title key="title">{_title}</title>
      <meta key="charset" charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta key="viewport" name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <meta key="keywords" name="keywords" content="stone, portfolio, 포트폴리오, 박동명" />
      <meta key="description" name="description" content={_description} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content="stone" />
      <meta key="og:locale" property="og:locale" content="ko" />
      <meta key="og:image" property="og:image" content={'/images/products/contentsImg/1.png'} />
      <meta key="og:title" property="og:title" content={_title} />
      <meta key="og:description" property="og:description" content={_description} />
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
