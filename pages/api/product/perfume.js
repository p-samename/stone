import { NextApiRequest, NextApiResponse } from 'next';

const perfume = {
  title: 'perfume',
  description: '이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.',
  content: [
    {
      title: '테싯 오 드 퍼퓸',
      description: '마음을 차분하게 가라앉혀주고 우리 몸의 감각을 일깨워주는 흙내음과 시트러스 노트의 따뜻하고 생기 넘치는 블렌드',
      price: 150000,
      size: '50mL',
      imgPath: '/images/products/perfume/tesit.png',
    },
    {
      title: '카르스트 오 드 퍼퓸',
      description: '무디하면서 상쾌한 향수로, 미네랄의 탑 노트와 폭풍우의 메탈릭한 베이스 노트가 어우러져 절벽에서 자란 식물과 해안을 연상시킵니다.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/carst.png',
    },
    {
      title: '에레미아 오 드 퍼퓸',
      description: '밝은 시트러스 노트로 시작해 밀랍의 플로럴, 파우더리 머스크, 비 내린 뒤 콘크리트 내음으로 이어지는 활기차고 상쾌한 향수입니다.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/carst.png',
    },
    {
      title: '글롬 오 드 퍼퓸',
      description:
        '스파이스의 매력적인 오프닝 노트로 시작해 달콤한 오렌지 플라워, 따뜻한 자스민, 아이리스와 파촐리가 전하는 파우더리한 블렌드가 어우러진 스파이시한 플로럴 노트가 펼쳐집니다.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/carst.png',
    },
    {
      title: '로즈 오 드 퍼퓸',
      description: '장미 향이지만 활기찬 시소 향, 우드, 스파이스, 흙내음, 가벼운 스모크가 더해진 미묘하고 풍성한 노트로 부드러우면서 강렬한 향수.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/rose.png',
    },
    {
      title: '마라케시 오 드 퍼퓸',
      description: '우디한 스파이시 노트와 산뜻한 플로럴 노트의 원초적이고 통념을 깨는 향수로 같은 이름의 도시인 모로코 마라케시 도시에 대한 깊고 풍부하며 매혹적인 오마주.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/marakech.png',
    },
    {
      title: '휠 오 드 퍼퓸',
      description: '남다른 느낌을 자아내는 매혹적인 향수. 히노키 숲을 연상시키며 스모키 노트를 시작으로 은은한 스파이스와 짙은 그린, 흙내음이 조화롭게 어우러집니다.',
      price: 155000,
      size: '50mL',
      imgPath: '/images/products/perfume/hwill.png',
    },
    {
      title: '이더시스 오 드 퍼퓸',
      description: '밝은 오프닝 노트로 시작해 깊은 스파이스, 풍부한 흙내음, 건조한 우디 노트로 이어지는 묘한 매력의 향수.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/carst.png',
    },
    {
      title: '미라세티 오 드 퍼퓸',
      description: '따뜻한 유향 노트의 향수로 바다 내음과 머스크 향이 떠오르는 우디한 흙내음이 페퍼와 허브 노트를 받쳐줍니다.',
      price: 210000,
      size: '50mL',
      imgPath: '/images/products/perfume/carst.png',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(perfume);
}
