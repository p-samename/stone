import axios from 'axios';
import { Layout, HeadOption } from '@components/index';
import { useEffect, useState } from 'react';

const TITLE = '메인';
export default function Main(props) {
  const [data, setData] = useState(null);
  async function getData() {
    try {
      const { data } = await axios.get('http://localhost:3000/api/data');
      setData(data.productsData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>{data}</div>;
}

Main.getLayout = function getLayout(page) {
  return (
    <Layout additionalClass={'home'} headOption={<HeadOption title={TITLE} />}>
      {page}
    </Layout>
  );
};
