import { globalCss } from './styled';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    '@bp1': {
      fontSize: '93.75%',
    },
    '@bp2': {
      fontSize: '87.5%',
    },
  },
  body: {
    fontFamily: '$title',
    color: '$white',
    background: '$background',
    '-webkit-font-smoothing': 'antialiased',
  },
  button: {
    cursor: 'pointer',
    border: 0,
    fontFamily: '$title',
    fontWeight: 600,
  },
  input: {
    border: 0,
  },
  a: {
    color: '$white',
    textDecoration: 'none',
  },
  h1: {
    fontSize: '4rem',
  },
  p: {
    fontSize: '1.5rem',
  },
});
