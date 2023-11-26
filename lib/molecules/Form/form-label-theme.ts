import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '1rem',
});

export const formLabelTheme = defineStyleConfig({ baseStyle });
