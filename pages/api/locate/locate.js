import { NextApiRequest, NextApiResponse } from 'next';

const locate = [
  {
    title: '이솝 성수1',
    adress: '서울시 성동구 연무장길 57',
    description: '이솝 성수 스토어는 린스 앤 리턴 캠페인과 함께합니다.\n 다 사용한 이솝 제품의 재활용을 위해 깨끗이 세척한 공병을 선별된 이솝 스토어로 전달해주세요.',
    imgPath: '/images/storeImg/store1.png',
  },
  {
    title: '이솝 성수2',
    adress: '서울시 성동구 연무장길 57',
    description: '이솝 성수 스토어는 린스 앤 리턴 캠페인과 함께합니다.\n 다 사용한 이솝 제품의 재활용을 위해 깨끗이 세척한 공병을 선별된 이솝 스토어로 전달해주세요.',
    imgPath: '/images/storeImg/store1.png',
  },
];

export default function handler(req, res) {
  res.status(200).json(locate);
}
