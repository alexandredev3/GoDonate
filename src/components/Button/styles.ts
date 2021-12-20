import { styled } from '../../styles/styled';

export const ButtonBase = styled('button', {
  height: 50,
  fontSize: '1rem',
  borderRadius: 8,
  padding: '0 2rem',

  variants: {
    outlined: {
      true: {
        background: 'none',
        color: '$textLigher',
      },
      false: {
        background: '$primary',
        color: '$white',
      },
    },
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  defaultVariants: {
    outlined: false,
  },
});
