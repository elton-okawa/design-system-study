import { defineStyleConfig } from '@chakra-ui/react';

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    textAlign: 'center',
    _disabled: {
      backgroundColor: 'background.state.disabled',
      color: 'content.state.disabled',
      cursor: 'not-allowed',
    },
  },
  sizes: {
    md: {
      fontSize: '1rem',
    },
  },
  variants: {
    'rect-primary': {
      px: '1rem',
      py: '0.875rem',
      borderRadius: '0.5rem',
      width: '16rem',
      backgroundColor: 'background.inverse.primary',
      color: 'content.inverse.primary',
      _active: {
        boxShadow: '999px 999px 0px 0px rgba(255, 255, 255, 0.20) inset',
      },
    },
    'pill-secondary': {
      color: 'content.primary',
      fontWeight: '500',
      fontSize: '0.875rem',
      lineHeight: '1rem',
      padding: '0.62rem 0.75rem',
      borderRadius: '625rem',
      backgroundColor: 'background.tertiary',
      _active: {
        boxShadow: '999px 999px 0px 0px rgba(0, 0, 0, 0.08) inset',
      },
      _focus: {
        backgroundColor: 'background.inverse.primary',
        color: 'content.inverse.primary',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'rect-primary',
  },
});
