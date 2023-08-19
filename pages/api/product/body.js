import { NextApiRequest, NextApiResponse } from 'next';

const body = {
  title: 'body',
  description: '이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.',
  content: [
    {
      title: '너처 바 솝',
      description: '시어 버터를 함유해 클렌징 과정에서 수분 손실을 막아주며 자극이 적어 건성 피부를 비롯해 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 비누.',
      price: '23000',
      size: '150g',
      imgPath: '/images/products/body/nurture_soap.png',
    },
    {
      title: '폴리시 바 솝',
      description:
        '퓨마이스와 그레이프 씨드를 함유해 각질 관리와 클렌징 효과가 뛰어나고 건조한 각질 피부를 비롯해 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 비누.',
      price: '23000',
      size: '150g',
      imgPath: '/images/products/body/polish_soap.png',
    },
    {
      title: '리프레시 바 솝',
      description: '피부 정화 작용이 뛰어난 식물성 오일을 함유하고 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 부드러운 비누.',
      price: '23000',
      size: '150g',
      imgPath: '/images/products/body/refresh_soap.png',
    },
    {
      title: '제라늄 리프 바디 밤',
      description: '영양이 풍부한 넛트 오일, 피부를 부드럽게 해주는 센티드제라늄추출물, 향기로운 시트러스 추출물을 함유한 바디 밤.',
      price: '41000',
      size: '100mL',
      imgPath: '/images/products/body/geranium_balm.png',
    },
    {
      title: '레쥬비네이트 인텐시브 바디 밤',
      description: '마카다미아씨오일과 산달우드목부오일을 함유하여 피부를 촉촉하게 가꿔주며 건성 피부에 적합한 바디 밤.',
      price: '41000',
      size: '100mL',
      imgPath: '/images/products/body/rejuvenate_balm.png',
    },
    {
      title: '레졸루트 하이드레이팅 바디 밤',
      description: '시어버터, 밀배아 오일, 스위트 아몬드 오일 성분이 함유되어 피부에 수분과 영양을 공급해주고 독특한 스파이시 향의 에몰리언트 바디 밤.',
      price: '41000',
      size: '100mL',
      imgPath: '/images/products/body/resolute_balm.png',
    },
    {
      title: '라인드 컨센트레이트 바디 밤',
      description: '기분을 북돋우는 시트러스 아로마와 영양이 풍부한 너트 오일 추출물을 함유해 피부를 부드럽고 매끄럽게 가꾸는 바디 모이스처라이저.',
      price: '41000',
      size: '100mL',
      imgPath: '/images/products/body/rind_balm.png',
    },
    {
      title: '제라늄 리프 바디 스크럽',
      description: '피부를 깨끗하게 클렌징하고 빈틈없이 매끄럽게 관리해서 수분 공급의 완벽한 준비를 돕는 상쾌한 바디 각질완화제.',
      price: '43000',
      size: '180mL',
      imgPath: '/images/products/body/geranium_scrub.png',
    },
    {
      title: '리뎀션 바디 스크럽',
      description: '각질 완화로 피부를 매끄럽게 가꿔주는 고운 입자의 퓨마이스와 아로마틱 보태니컬 성분의 조화로운 블렌드. 수분 공급에 전에 사용하면 이상적입니다.',
      price: '43000',
      size: '180mL',
      imgPath: '/images/products/body/redemption_scrub.png',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(body);
}
