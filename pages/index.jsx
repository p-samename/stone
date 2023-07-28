import { Layout, HeadOption } from '@components/index';
const TITLE = '메인';
export default function Main(props) {
  return <div>main</div>;
}

Main.getLayout = function getLayout(page) {
  return (
    <Layout additionalClass={'home'} headOption={<HeadOption title={TITLE} />}>
      {page}
    </Layout>
  );
};
