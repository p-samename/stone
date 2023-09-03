import { HeadOption, Layout } from '@components/index';

const TITLE = '상품';

export default function ProductDetail() {
  return <>asdasdasd </>;
}

ProductDetail.getLayout = function getLayout(page) {
  return <Layout headOption={<HeadOption title={TITLE} />}>{page}</Layout>;
};
