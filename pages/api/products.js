import { NextApiRequest, NextApiResponse } from 'next';

const products = {
  perfume: [
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
      imgPath: '/images/products/perfume/tesit.png',
    },
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      imgPath: '/images/products/perfume/tesit.png',
    },
  ],
  hand: [
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      imgPath: '/images/products/perfume/tesit.png',
    },
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      imgPath: '/images/products/perfume/tesit.png',
    },
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
      imgPath: '/images/products/perfume/tesit.png',
    },
  ],
};
export default function handler(req, res) {
  res.status(200).json(products);
}
