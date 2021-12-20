import { styled } from '../../../styles/styled';

export const Container = styled('div', {
  display: 'flex',
  padding: '24px 0',
});

export const Main = styled('main', {
  width: '100%',
  height: '100vh',

  backgroundSize: 'cover',

  section: {
    textAlign: 'center',
    width: '100%',
    h1: {
      lineHeight: '101.8%',

      span: {
        color: '$primary',
      },
    },
    p: {
      marginTop: 30,
      color: '$textLigher',

      span: {
        fontWeight: 600,
      },
    },

    button: {
      marginTop: '34px',
    },
  },
});
