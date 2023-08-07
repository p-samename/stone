import { NextApiRequest, NextApiResponse } from 'next';

const mainContent = [
  {
    title: '브론즈 인센스 홀더',
    subTitle: '고요함을 불어넣는 홈 케어 제품',
    description:
      '보겔 스튜디오(Vogel Studio)가 이솝을 위해 디자인한 인센스 홀더로 공간에 평온한 분위기를 선사합니다.\
      하나하나 개별적으로 제작되며, 청동으로 주조되어 시간이 지남에 따라 자연스러운 녹청이 생길 수 있습니다.',
    imgPath: '/images/products/homeCare/insence_main.png',
  },
  {
    title: '도시 생활을 위한 가벼운 레이어',
    subTitle: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
    description:
      '도시 생활자를 고려해 개발된 이 세럼은 지속적이면서도 가볍고 빠른 수분 공급과 항산화 성분이\
    풍부한 영양 보충을 돕고 피부가 편안한 보호막을 형성하여 피부를 탄탄하게 지켜줍니다.',
    imgPath: '/images/products/contentsImg/1.png',
  },
  {
    title: '도시 생활을 위한 가벼운 레이어',
    subTitle: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
    description:
      '도시 생활자를 고려해 개발된 이 세럼은 지속적이면서도 가볍고 빠른 수분 공급과 항산화 성분이\
    풍부한 영양 보충을 돕고 피부가 편안한 보호막을 형성하여 피부를 탄탄하게 지켜줍니다.',
    imgPath: '/images/products/contentsImg/2.png',
  },

  {
    title: '도시 생활을 위한 가벼운 레이어',
    subTitle: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
    description:
      '도시 생활자를 고려해 개발된 이 세럼은 지속적이면서도 가볍고 빠른 수분 공급과 항산화 성분이\
    풍부한 영양 보충을 돕고 피부가 편안한 보호막을 형성하여 피부를 탄탄하게 지켜줍니다.',
    imgPath: '/images/products/contentsImg/3.png',
  },
];

export default function handler(req, res) {
  res.status(200).json(mainContent);
}
