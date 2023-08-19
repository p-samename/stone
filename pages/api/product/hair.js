import { NextApiRequest, NextApiResponse } from 'next';

const hair = {
  title: 'hair',
  description: '이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.',
  content: [
    {
      title: '샴푸',
      description: '프랑킨센스, 판테놀 등 뛰어난 성분을 함유하여 모발과 두피를 깨끗하게 세정하며 부드럽고 윤기나는 머릿결과 향기로운 모발을 선사하는 샴푸.',
      price: '57000',
      size: '500mL',
      imgPath: '/images/products/hair/sampoo.png',
    },
    {
      title: '컨디셔너',
      description:
        '아미노산을 풍부하게 함유하여 연약하고 가는 모발과 염색 모발을 포함한 대부분의 모발 타입을 부드럽고 촉촉하게 가꿔주며 머릿결을 향기롭고 상쾌하게 가꿔주는 영양이 풍부한 컨디셔너.',
      price: '20000',
      size: '100mL',
      imgPath: '/images/products/hair/conditioner.png',
    },
    {
      title: '이퀄라이징 샴푸',
      description: '보태니컬 추출물이 두피를 자극하지 않고 유분을 제거해주며 효과적인 수렴 효과로 두피의 밸런스를 도와주는 샴푸.',
      price: '57000',
      size: '500mL',
      imgPath: '/images/products/hair/equalising.png',
    },
    {
      title: '로즈 헤어 앤 스칼프 모이스처라이징 마스크',
      description: '헤어에 윤기와 생기를 주고, 건조함으로 인해 발생한 각질을 진정시켜주는 집중 컨디셔닝 트리트먼트.',
      price: '41000',
      size: '120mL',
      imgPath: '/images/products/hair/roseScalp.png',
    },
    {
      title: '테임 헤어 세럼',
      description: '모발을 부드럽게 정돈하고 매끄럽게 가꿔주는 가벼운 제품으로 끈적임이나 장기적인 빌드업 현상 없이 흩날리는 부시시한 모발을 차분하게 관리합니다.',
      price: '43000',
      size: '60mL',
      imgPath: '/images/products/hair/hairSerum.png',
    },
    {
      title: '바이올렛 리프 헤어 밤',
      description: '영양이 풍부한 하이드레이팅 너트 오일 추출물이 모발에 영양을 주는 동시에 다루기 힘든 모발의 스타일링 도와주는 밤.',
      price: '40000',
      size: '60mL',
      imgPath: '/images/products/hair/hairBalm.png',
    },
    {
      title: '샤인 헤어 앤 비어드 오일',
      description: '잔여물이나 유분기를 남기지 않고 부드러운 광택을 주는 하이드레이팅 오일.',
      price: '40000',
      size: '25mL',
      imgPath: '/images/products/hair/beardOil.png',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(hair);
}
