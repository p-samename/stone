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
        p1: '#1E212A',
        p2: '#27374D',
        p3: '#526D82',
        p4: '#9DB2BF',
        p5: '#DDE6ED',
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
        g3: '#737270',
        g4: '#B3B2AF',
        g5: '#D9D8D4',
        g6: '#F3F2EE',
        g7: '#FFFEFA',
        g8: '#FFFFFF',
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
        web: { min: '1024px' },
        pad: { min: '768px' },
        mb: { max: '375px' },
      },
      borderRadius: sizeList(22, 4),
      borderWidth: sizeList(22, 1),
      margin: sizeList(22, 4),
      padding: sizeList(22, 4),
    },
  },

  // plugins: [require('tailwind-scrollbar-hide')],
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
