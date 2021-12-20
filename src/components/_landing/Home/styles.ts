import { styled } from '../../../styles/styled';

export const Container = styled('div', {
  display: 'flex',
  padding: '24px 0',
});

export const Main = styled('main', {
  display: 'flex',
  margin: '0 auto',

  section: {
    maxWidth: '520px',
    width: '100%',
    marginRight: 40,
    h1: {
      lineHeight: '101.8%',
    },
    p: {
      marginTop: 30,
      color: '$textLigher',
    },
  },
});

export const EmailInputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  width: '515px',
  height: '68px',
  background: '$formBg',
  borderRadius: 8,

  marginTop: '52px',

  '> div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem',

    '.input__wrapper': {
      width: '314px',
      display: 'flex',
      alignItems: 'center',

      input: {
        width: '340px',
        height: '68px',
        fontSize: '1rem',
        background: 'none',
        marginLeft: '1rem',
        color: '$white',
      },

      '::placeholder': {
        color: '$textLigher',
      },
    },
  },
});
