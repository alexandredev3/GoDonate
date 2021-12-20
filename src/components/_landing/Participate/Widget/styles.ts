import { styled } from '../../../../styles/styled';

export const WidgetSectionContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 26,
});

export const WidgetContainer = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '282px',
  height: '324px',
  padding: '2.4rem',

  borderRadius: '8px',

  background: '#1F1D2B',

  span: {
    borderRadius: '100%',
    fontSize: '5rem',
    fontWeight: 600,
    color: '$primary',
  },

  p: {
    textAlign: 'left',
    marginTop: '24px',
    color: '$white',
    fontSize: '1.4rem',
    fontWeight: 'normal',
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  variants: {
    isActive: {
      true: {
        background: '$primary',
        span: {
          color: '#1F1D2B',
        },
      },
      false: {
        background: '#1F1D2B',
        span: {
          color: '$primary',
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});
