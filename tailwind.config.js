/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: 'tw-', // prefix tw- 를 사용해야만 테일윈드 스타일 적용
  important: true, // tailwind 스타일 important
  theme: {
    spacing: {
      0: '0px',
      // custom vh 계산된 --vh에 기반한 화면의 실 높이
      '100cvh': 'calc(var(--vh, 1vh)*100)',
    },
    //color custom
    colors: {
      primary: {
        p1: '#7952FA',
        p2: '#906FFF',
        p3: '#AA83FF',
        p4: '#5243FF',
        p5: '#7C79FF',
      },
      sub: {
        n1: '#161956',
        n2: '#2B2C45',
        n3: '#3E405A',
        v1: '#C39EE8',
        v2: '#E1D8FF',
        v3: '#F4F0FF',
        v4: '#EE264A',
        r1: '#EE264A',
        r2: '#EF3456',
      },
      grey: {
        g1: '#373737',
        g2: '#575A5E',
        g3: '#A3A8B9',
        g4: '#C7CCDB',
        g5: '#E5E9F4',
        g6: '#F0F2F7',
        g7: '#F6F7FA',
        g8: '#FCFCFC',
        g9: '#FFFFFF',
      },
      vendor: {
        kakao: '#FAE100',
        apple: '#000000',
      },
      system: {
        white: '#FFFFFF',
        black: '#000000',
      },
    },
    //font custom
    fontSize: {
      //headLine
      headLine: ['40px', { fontWeight: '700' }],
      headLine1: ['24px', { fontWeight: '700' }],
      headLine2: ['20px', { fontWeight: '700' }],
      headLine3: ['18px', { fontWeight: '700' }],
      //sub
      subTitle1: ['16px', { fontWeight: '700' }],
      subTitle2: ['14px', { fontWeight: '700' }],
      //body
      body1: ['18px', { fontWeight: '500' }],
      body2: ['16px', { fontWeight: '500' }],
      body3: ['16px', { fontWeight: '400' }],
      body4: ['14px', { fontWeight: '500' }],
      body5: ['14px', { fontWeight: '400' }],
      //caption
      caption1: ['12px', { fontWeight: '700' }],
      caption2: ['12px', { fontWeight: '500' }],
      caption3: ['12px', { fontWeight: '400' }],
      caption4: ['10px', { fontWeight: '500' }],
    },
    //원하는 줄수 만큼만 보여줌. 초과시 ... 처리
    variants: {
      lineClamp: ['responsive', 'hover'],
    },
    extend: {
      screens: {
        bp: { max: '800px' },
        md: { min: '600px', max: '799px' },
        sm: { max: '599px' },
      },
      borderRadius: sizeList(11, 4),
      borderWidth: sizeList(11, 1),
      margin: sizeList(11, 4),
      padding: sizeList(11, 4),
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.primary.p2')}, ${theme('colors.primary.p3')})`,
        'gradient-sub': `linear-gradient(to right, ${theme('colors.sub.v2')}, ${theme('colors.sub.v3')})`,
      }),
    },
  },

  plugins: [require('tailwind-scrollbar-hide')],
};

//px 단위로 변경 및 객체 length , 간격 단위 ex) sizeList(10, 8) 10 은 객체 길이 갯수, 8은 8px , 16px, 24px ...

function sizeList(arrayLength = 101, multiple = 4, unit = 'px') {
  let object = {};
  const multipleArray = {
    ...Array.from(Array(arrayLength)).map((_, i) => `${Number(i) * multiple}${unit}`),
  };

  for (const j in multipleArray) {
    const key = multipleArray[j];
    object = { ...object, ...{ [key]: multipleArray[j] } };
  }

  return object;
}
