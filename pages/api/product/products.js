import { NextApiRequest, NextApiResponse } from 'next';

const products = {
  all: {
    title: 'all',
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
      {
        title: '너처 바 솝',
        description: '시어 버터를 함유해 클렌징 과정에서 수분 손실을 막아주며 자극이 적어 건성 피부를 비롯해 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 비누.',
        price: 23000,
        size: '150g',
        imgPath: '/images/products/body/nurture_soap.png',
      },
      {
        title: '폴리시 바 솝',
        description:
          '퓨마이스와 그레이프 씨드를 함유해 각질 관리와 클렌징 효과가 뛰어나고 건조한 각질 피부를 비롯해 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 비누.',
        price: 23000,
        size: '150g',
        imgPath: '/images/products/body/polish_soap.png',
      },
      {
        title: '리프레시 바 솝',
        description: '피부 정화 작용이 뛰어난 식물성 오일을 함유하고 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 부드러운 비누.',
        price: 23000,
        size: '150g',
        imgPath: '/images/products/body/refresh_soap.png',
      },
      {
        title: '제라늄 리프 바디 밤',
        description: '영양이 풍부한 넛트 오일, 피부를 부드럽게 해주는 센티드제라늄추출물, 향기로운 시트러스 추출물을 함유한 바디 밤.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/geranium_balm.png',
      },
      {
        title: '레쥬비네이트 인텐시브 바디 밤',
        description: '마카다미아씨오일과 산달우드목부오일을 함유하여 피부를 촉촉하게 가꿔주며 건성 피부에 적합한 바디 밤.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/rejuvenate_balm.png',
      },
      {
        title: '레졸루트 하이드레이팅 바디 밤',
        description: '시어버터, 밀배아 오일, 스위트 아몬드 오일 성분이 함유되어 피부에 수분과 영양을 공급해주고 독특한 스파이시 향의 에몰리언트 바디 밤.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/resolute_balm.png',
      },
      {
        title: '라인드 컨센트레이트 바디 밤',
        description: '기분을 북돋우는 시트러스 아로마와 영양이 풍부한 너트 오일 추출물을 함유해 피부를 부드럽고 매끄럽게 가꾸는 바디 모이스처라이저.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/rind_balm.png',
      },
      {
        title: '제라늄 리프 바디 스크럽',
        description: '피부를 깨끗하게 클렌징하고 빈틈없이 매끄럽게 관리해서 수분 공급의 완벽한 준비를 돕는 상쾌한 바디 각질완화제.',
        price: 43000,
        size: '180mL',
        imgPath: '/images/products/body/geranium_scrub.png',
      },
      {
        title: '리뎀션 바디 스크럽',
        description: '각질 완화로 피부를 매끄럽게 가꿔주는 고운 입자의 퓨마이스와 아로마틱 보태니컬 성분의 조화로운 블렌드. 수분 공급에 전에 사용하면 이상적입니다.',
        price: 43000,
        size: '180mL',
        imgPath: '/images/products/body/redemption_scrub.png',
      },
      {
        title: '레저렉션 아로마틱 핸드 워시',
        description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시.',
        price: 49000,
        size: '500mL',
        imgPath: '/images/products/hand/reseraction.png',
      },
      {
        title: '레버런스 아로마틱 핸드 워시',
        description: '고운 퓨마이스가 함유되어 손의 각질을 깨끗이 씻어주고 보태니컬 추출물 블렌드로 상쾌함을 주는 핸드 워시.',
        price: 47000,
        size: '500mL',
        imgPath: '/images/products/hand/reverance.png',
      },
      {
        title: '레저렉션 아로마틱 핸드 밤',
        description: '지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤.',
        price: 33000,
        size: '75mL',
        imgPath: '/images/products/hand/reseraction_barm.png',
      },
      {
        title: '레버런스 아로마틱 핸드 밤',
        description: '포타슘 락테이트를 포함한 에몰리언트 성분이 피부의 부드러움과 촉촉함을 유지시켜 주는 핸드 밤.',
        price: 33000,
        size: '75mL',
        imgPath: '/images/products/hand/reverance_barm.png',
      },
      {
        title: '레버런스 듀엣',
        description: '독특함을 즐기는 분들을 위한 개성적인 아로마와 피부 유연 효과가 돋보이는 핸드 케어 2종.',
        price: 151000,
        size: '',
        imgPath: '/images/products/hand/reverance_duet.png',
      },
      {
        title: '레저렉션 듀엣',
        description: '지친 손을 깨끗하게 세정하고 영양을 공급해 부드럽게 가꿔주는 핸드 케어 세트.',
        price: 151000,
        size: '',
        imgPath: '/images/products/hand/reseraction_duet.png',
      },
      {
        title: '로즈 앙상블',
        description: '활기찬 플로럴 향의 향수와 바디 클렌저, 시트러스 기반의 핸드 밤으로 구성되어 하루 종일 즐거움을 선사하는 산뜻한 트리오.',
        price: 264000,
        size: '',
        imgPath: '/images/products/hand/rose_ensemble.png',
      },
      {
        title: '휠 앙상블',
        description: '차분한 향수, 세정을 돕는 바디 스크럽, 자주 사용하는 영양이 풍부한 핸드 밤으로 구성되어 목에서 발끝까지 독특한 아로마를 선사하는 제품 3종.',
        price: 231000,
        size: '',
        imgPath: '/images/products/hand/hwyl_ensemble.png',
      },
      {
        title: '샴푸',
        description: '프랑킨센스, 판테놀 등 뛰어난 성분을 함유하여 모발과 두피를 깨끗하게 세정하며 부드럽고 윤기나는 머릿결과 향기로운 모발을 선사하는 샴푸.',
        price: 57000,
        size: '500mL',
        imgPath: '/images/products/hair/sampoo.png',
      },
      {
        title: '컨디셔너',
        description:
          '아미노산을 풍부하게 함유하여 연약하고 가는 모발과 염색 모발을 포함한 대부분의 모발 타입을 부드럽고 촉촉하게 가꿔주며 머릿결을 향기롭고 상쾌하게 가꿔주는 영양이 풍부한 컨디셔너.',
        price: 20000,
        size: '100mL',
        imgPath: '/images/products/hair/conditioner.png',
      },
      {
        title: '이퀄라이징 샴푸',
        description: '보태니컬 추출물이 두피를 자극하지 않고 유분을 제거해주며 효과적인 수렴 효과로 두피의 밸런스를 도와주는 샴푸.',
        price: 57000,
        size: '500mL',
        imgPath: '/images/products/hair/equalising.png',
      },
      {
        title: '로즈 헤어 앤 스칼프 모이스처라이징 마스크',
        description: '헤어에 윤기와 생기를 주고, 건조함으로 인해 발생한 각질을 진정시켜주는 집중 컨디셔닝 트리트먼트.',
        price: 41000,
        size: '120mL',
        imgPath: '/images/products/hair/roseScalp.png',
      },
      {
        title: '테임 헤어 세럼',
        description: '모발을 부드럽게 정돈하고 매끄럽게 가꿔주는 가벼운 제품으로 끈적임이나 장기적인 빌드업 현상 없이 흩날리는 부시시한 모발을 차분하게 관리합니다.',
        price: 43000,
        size: '60mL',
        imgPath: '/images/products/hair/hairSerum.png',
      },
      {
        title: '바이올렛 리프 헤어 밤',
        description: '영양이 풍부한 하이드레이팅 너트 오일 추출물이 모발에 영양을 주는 동시에 다루기 힘든 모발의 스타일링 도와주는 밤.',
        price: 40000,
        size: '60mL',
        imgPath: '/images/products/hair/hairBalm.png',
      },
      {
        title: '샤인 헤어 앤 비어드 오일',
        description: '잔여물이나 유분기를 남기지 않고 부드러운 광택을 주는 하이드레이팅 오일.',
        price: 40000,
        size: '25mL',
        imgPath: '/images/products/hair/beardOil.png',
      },
    ],
  },
  perfume: {
    title: 'perfume',
    description:
      '이솝 향수는 개발하는 동안 느꼈던 즐거움을 고객들이 사용하면서 만끽할 수 있기를 바라며 만들어졌습니다. 각각의 향수는 플로럴, 프레쉬, 우디, 오퓰런트 계열로 나뉘며, 경우에 따라 두 가지에 속하기도 합니다.',
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
  },
  body: {
    title: 'body',
    description: '보태니컬 원료가 풍부하게 함유된 바디 클렌저, 하이드레이터 그리고 부드러운 바디 트리트먼트 오일은 깨끗하고 부드러운 피부를 오랫동안 느낄 수 있도록 해줍니다.',
    content: [
      {
        title: '너처 바 솝',
        description: '시어 버터를 함유해 클렌징 과정에서 수분 손실을 막아주며 자극이 적어 건성 피부를 비롯해 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 비누.',
        price: 23000,
        size: '150g',
        imgPath: '/images/products/body/nurture_soap.png',
      },
      {
        title: '폴리시 바 솝',
        description:
          '퓨마이스와 그레이프 씨드를 함유해 각질 관리와 클렌징 효과가 뛰어나고 건조한 각질 피부를 비롯해 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 비누.',
        price: 23000,
        size: '150g',
        imgPath: '/images/products/body/polish_soap.png',
      },
      {
        title: '리프레시 바 솝',
        description: '피부 정화 작용이 뛰어난 식물성 오일을 함유하고 대부분의 피부 타입에 적합한, 목욕할 때나 세면대에서 사용하는 부드러운 비누.',
        price: 23000,
        size: '150g',
        imgPath: '/images/products/body/refresh_soap.png',
      },
      {
        title: '제라늄 리프 바디 밤',
        description: '영양이 풍부한 넛트 오일, 피부를 부드럽게 해주는 센티드제라늄추출물, 향기로운 시트러스 추출물을 함유한 바디 밤.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/geranium_balm.png',
      },
      {
        title: '레쥬비네이트 인텐시브 바디 밤',
        description: '마카다미아씨오일과 산달우드목부오일을 함유하여 피부를 촉촉하게 가꿔주며 건성 피부에 적합한 바디 밤.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/rejuvenate_balm.png',
      },
      {
        title: '레졸루트 하이드레이팅 바디 밤',
        description: '시어버터, 밀배아 오일, 스위트 아몬드 오일 성분이 함유되어 피부에 수분과 영양을 공급해주고 독특한 스파이시 향의 에몰리언트 바디 밤.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/resolute_balm.png',
      },
      {
        title: '라인드 컨센트레이트 바디 밤',
        description: '기분을 북돋우는 시트러스 아로마와 영양이 풍부한 너트 오일 추출물을 함유해 피부를 부드럽고 매끄럽게 가꾸는 바디 모이스처라이저.',
        price: 41000,
        size: '100mL',
        imgPath: '/images/products/body/rind_balm.png',
      },
      {
        title: '제라늄 리프 바디 스크럽',
        description: '피부를 깨끗하게 클렌징하고 빈틈없이 매끄럽게 관리해서 수분 공급의 완벽한 준비를 돕는 상쾌한 바디 각질완화제.',
        price: 43000,
        size: '180mL',
        imgPath: '/images/products/body/geranium_scrub.png',
      },
      {
        title: '리뎀션 바디 스크럽',
        description: '각질 완화로 피부를 매끄럽게 가꿔주는 고운 입자의 퓨마이스와 아로마틱 보태니컬 성분의 조화로운 블렌드. 수분 공급에 전에 사용하면 이상적입니다.',
        price: 43000,
        size: '180mL',
        imgPath: '/images/products/body/redemption_scrub.png',
      },
    ],
  },
  hand: {
    title: 'hand',
    description: '매일 우리에게 안락함을 선사하는 손은 보살핌을 받을 자격이 충분합니다. 아로마 클렌저와 밤은 손에 수분과 영양을 공급하고 부드럽게 가꿔줍니다.',
    content: [
      {
        title: '레저렉션 아로마틱 핸드 워시',
        description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시.',
        price: 49000,
        size: '500mL',
        imgPath: '/images/products/hand/reseraction.png',
      },
      {
        title: '레버런스 아로마틱 핸드 워시',
        description: '고운 퓨마이스가 함유되어 손의 각질을 깨끗이 씻어주고 보태니컬 추출물 블렌드로 상쾌함을 주는 핸드 워시.',
        price: 47000,
        size: '500mL',
        imgPath: '/images/products/hand/reverance.png',
      },
      {
        title: '레저렉션 아로마틱 핸드 밤',
        description: '지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤.',
        price: 33000,
        size: '75mL',
        imgPath: '/images/products/hand/reseraction_barm.png',
      },
      {
        title: '레버런스 아로마틱 핸드 밤',
        description: '포타슘 락테이트를 포함한 에몰리언트 성분이 피부의 부드러움과 촉촉함을 유지시켜 주는 핸드 밤.',
        price: 33000,
        size: '75mL',
        imgPath: '/images/products/hand/reverance_barm.png',
      },
      {
        title: '레버런스 듀엣',
        description: '독특함을 즐기는 분들을 위한 개성적인 아로마와 피부 유연 효과가 돋보이는 핸드 케어 2종.',
        price: 151000,
        size: '',
        imgPath: '/images/products/hand/reverance_duet.png',
      },
      {
        title: '레저렉션 듀엣',
        description: '지친 손을 깨끗하게 세정하고 영양을 공급해 부드럽게 가꿔주는 핸드 케어 세트.',
        price: 151000,
        size: '',
        imgPath: '/images/products/hand/reseraction_duet.png',
      },
      {
        title: '로즈 앙상블',
        description: '활기찬 플로럴 향의 향수와 바디 클렌저, 시트러스 기반의 핸드 밤으로 구성되어 하루 종일 즐거움을 선사하는 산뜻한 트리오.',
        price: 264000,
        size: '',
        imgPath: '/images/products/hand/rose_ensemble.png',
      },
      {
        title: '휠 앙상블',
        description: '차분한 향수, 세정을 돕는 바디 스크럽, 자주 사용하는 영양이 풍부한 핸드 밤으로 구성되어 목에서 발끝까지 독특한 아로마를 선사하는 제품 3종.',
        price: 231000,
        size: '',
        imgPath: '/images/products/hand/hwyl_ensemble.png',
      },
    ],
  },
  hair: {
    title: 'hair',
    description: '모발에 대한 이솝의 접근은 정직하고 간단합니다. 건강한 두피는 건강한 모발의 기본입니다.',
    content: [
      {
        title: '샴푸',
        description: '프랑킨센스, 판테놀 등 뛰어난 성분을 함유하여 모발과 두피를 깨끗하게 세정하며 부드럽고 윤기나는 머릿결과 향기로운 모발을 선사하는 샴푸.',
        price: 57000,
        size: '500mL',
        imgPath: '/images/products/hair/sampoo.png',
      },
      {
        title: '컨디셔너',
        description:
          '아미노산을 풍부하게 함유하여 연약하고 가는 모발과 염색 모발을 포함한 대부분의 모발 타입을 부드럽고 촉촉하게 가꿔주며 머릿결을 향기롭고 상쾌하게 가꿔주는 영양이 풍부한 컨디셔너.',
        price: 20000,
        size: '100mL',
        imgPath: '/images/products/hair/conditioner.png',
      },
      {
        title: '이퀄라이징 샴푸',
        description: '보태니컬 추출물이 두피를 자극하지 않고 유분을 제거해주며 효과적인 수렴 효과로 두피의 밸런스를 도와주는 샴푸.',
        price: 57000,
        size: '500mL',
        imgPath: '/images/products/hair/equalising.png',
      },
      {
        title: '로즈 헤어 앤 스칼프 모이스처라이징 마스크',
        description: '헤어에 윤기와 생기를 주고, 건조함으로 인해 발생한 각질을 진정시켜주는 집중 컨디셔닝 트리트먼트.',
        price: 41000,
        size: '120mL',
        imgPath: '/images/products/hair/roseScalp.png',
      },
      {
        title: '테임 헤어 세럼',
        description: '모발을 부드럽게 정돈하고 매끄럽게 가꿔주는 가벼운 제품으로 끈적임이나 장기적인 빌드업 현상 없이 흩날리는 부시시한 모발을 차분하게 관리합니다.',
        price: 43000,
        size: '60mL',
        imgPath: '/images/products/hair/hairSerum.png',
      },
      {
        title: '바이올렛 리프 헤어 밤',
        description: '영양이 풍부한 하이드레이팅 너트 오일 추출물이 모발에 영양을 주는 동시에 다루기 힘든 모발의 스타일링 도와주는 밤.',
        price: 40000,
        size: '60mL',
        imgPath: '/images/products/hair/hairBalm.png',
      },
      {
        title: '샤인 헤어 앤 비어드 오일',
        description: '잔여물이나 유분기를 남기지 않고 부드러운 광택을 주는 하이드레이팅 오일.',
        price: 40000,
        size: '25mL',
        imgPath: '/images/products/hair/beardOil.png',
      },
    ],
  },
};

export default function handler(req, res) {
  const contentKey = req.query.content; // 클라이언트에서 보낸 쿼리 파라미터

  if (products.hasOwnProperty(contentKey)) {
    res.status(200).json(products[contentKey]);
  } else {
    res.status(404).json({ message: 'Content not found' });
  }
}
