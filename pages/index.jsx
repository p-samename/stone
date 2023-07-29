import { HeadOption, Layout } from '@components/index';
import axios from 'axios';
import Image from 'next/image';
import mainImg from '@images/main.png';

const TITLE = '메인';
export default function Main() {
  return (
    <div>
      <Image src={mainImg} style={{ width: '100vw', height: 'auto', backgroundSize: 'cover' }} />
    </div>
  );
}

Main.getLayout = function getLayout(page) {
  return (
    <Layout additionalClass={'home'} headOption={<HeadOption title={TITLE} />}>
      {page}
    </Layout>
  );
};
