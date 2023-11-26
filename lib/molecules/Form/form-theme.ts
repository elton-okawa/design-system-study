import { formAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { theme } from '@chakra-ui/theme';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(formAnatomy.keys);

const baseStyle = definePartsStyle({
  ...theme.components.Form,
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  helperText: {
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem',
  },
});

export const formTheme = defineMultiStyleConfig({ baseStyle });
