import { NextApiRequest, NextApiResponse } from 'next';

const hand = {
  title: 'hand',
  description: '이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.',
  content: [
    {
      title: '레저렉션 아로마틱 핸드 워시',
      description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시.',
      price: '49000',
      size: '500mL',
      imgPath: '/images/products/hand/reseraction.png',
    },
    {
      title: '레버런스 아로마틱 핸드 워시',
      description: '고운 퓨마이스가 함유되어 손의 각질을 깨끗이 씻어주고 보태니컬 추출물 블렌드로 상쾌함을 주는 핸드 워시.',
      price: '47000',
      size: '500mL',
      imgPath: '/images/products/hand/reverance.png',
    },
    {
      title: '레저렉션 아로마틱 핸드 밤',
      description: '지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤.',
      price: '33000',
      size: '75mL',
      imgPath: '/images/products/hand/reseraction_barm.png',
    },
    {
      title: '레버런스 아로마틱 핸드 밤',
      description: '포타슘 락테이트를 포함한 에몰리언트 성분이 피부의 부드러움과 촉촉함을 유지시켜 주는 핸드 밤.',
      price: '33000',
      size: '75mL',
      imgPath: '/images/products/hand/reverance_barm.png',
    },
    {
      title: '레버런스 듀엣',
      description: '독특함을 즐기는 분들을 위한 개성적인 아로마와 피부 유연 효과가 돋보이는 핸드 케어 2종.',
      price: '151000',
      size: '',
      imgPath: '/images/products/hand/reverance_duet.png',
    },
    {
      title: '레저렉션 듀엣',
      description: '지친 손을 깨끗하게 세정하고 영양을 공급해 부드럽게 가꿔주는 핸드 케어 세트.',
      price: '151000',
      size: '',
      imgPath: '/images/products/hand/reseraction_duet.png',
    },
    {
      title: '로즈 앙상블',
      description: '활기찬 플로럴 향의 향수와 바디 클렌저, 시트러스 기반의 핸드 밤으로 구성되어 하루 종일 즐거움을 선사하는 산뜻한 트리오.',
      price: '264000',
      size: '',
      imgPath: '/images/products/hand/rose_ensemble.png',
    },
    {
      title: '휠 앙상블',
      description: '차분한 향수, 세정을 돕는 바디 스크럽, 자주 사용하는 영양이 풍부한 핸드 밤으로 구성되어 목에서 발끝까지 독특한 아로마를 선사하는 제품 3종.',
      price: '231000',
      size: '',
      imgPath: '/images/products/hand/hwyl_ensemble.png',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(hand);
}
