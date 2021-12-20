import { styled } from '../../../styles/styled';

export const Container = styled('div', {
  display: 'flex',
  padding: '24px 0',
});

export const Main = styled('main', {
  display: 'flex',
  margin: '0 auto',

  section: {
    maxWidth: 614,
    width: '100%',
    marginRight: 40,
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
  },
});
