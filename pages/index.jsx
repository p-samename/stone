import { Layout } from '@components/layout/Layout';

export default function Home() {
  return <div>main</div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout additionalClass={'home'}>{page}</Layout>;
};
