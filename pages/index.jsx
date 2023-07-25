import { Layout, HeadOption } from '@components/index';
const TITLE = '메인';
export default function Main(props) {
  const { data } = props; // props에서 data를 추출
  return <div>main {data.name}</div>;
}

Main.getLayout = function getLayout(page) {
  return (
    <Layout additionalClass={'home'} headOption={<HeadOption title={TITLE} />}>
      {page}
    </Layout>
  );
};

// export const getServerSideProps = async (context) => {
//   // Fetch data from external API
//   const data = { name: 'dm' };

//   // Pass data to the page via props
//   return { props: { data } };
// };
