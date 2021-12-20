import { createStitches } from '@stitches/react';

export const { styled, theme, globalCss } = createStitches({
  theme: {
    colors: {
      textLigher: '#b7c2c8',
      white: '#FFFFFF',
      primary: '#EA7C69',
      background: '#252836',
      formBg: '#2D303E',
    },
    fonts: {
      title: "'Barlow', sans-seri",
      paragraph: "'Barlow', sans-seri",
    },
  },
  media: {
    bp1: '(max-width: 1080px)',
    bp2: '(max-width: 720px)',
  },
});
