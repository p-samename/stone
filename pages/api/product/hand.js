import { NextApiRequest, NextApiResponse } from 'next';

const hand = {
  title: 'hand',
  description: '이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.',
  content: [
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      price: '150000',
      size: '50mL',
      imgPath: '/images/products/perfume/tesit.png',
    },
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      price: '150000',
      size: '50mL',
      imgPath: '/images/products/perfume/tesit.png',
    },
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      price: '150000',
      size: '50mL',
      imgPath: '/images/products/perfume/tesit.png',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(hand);
}
