import { styled } from '../../../styles/styled';

export const Container = styled('div', {
  display: 'flex',
  padding: '24px 0',
});

export const Main = styled('main', {
  margin: '0 auto',
  display: 'flex',

  '.left__content': {
    maxWidth: '482px',
    width: '100%',
    marginLeft: '40px',
    h1: {
      lineHeight: '101.8%',

      span: {
        color: '$primary',
      },
    },
    '> p': {
      marginTop: 30,
      color: '$textLigher',

      span: {
        fontWeight: 600,
      },
    },
    button: {
      width: '100%',
      marginTop: '34px',
    },
  },
});
