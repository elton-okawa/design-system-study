import { defineStyleConfig } from '@chakra-ui/react';

export const tileTheme = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'background.secondary',
    alignItems: 'flex-end',
    gap: '0.25rem',
    borderRadius: '0.75rem',
  },
  variants: {
    default: {
      p: '20px',
    },
  },
  defaultProps: {
    variant: 'default',
  },
});
