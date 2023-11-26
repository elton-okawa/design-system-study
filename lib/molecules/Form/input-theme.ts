import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { Input } from '@chakra-ui/theme/components';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  ...Input.baseStyle,
  field: {
    padding: '0.5rem',
    backgroundColor: 'background.tertiary',
    borderRadius: '0.5rem',
  },
});

const filled = definePartsStyle({
  ...Input.variants?.filled,
  field: {
    border: '3px solid transparent',
    _hover: {
      borderColor: 'border.accent.default',
    },
    _focus: {
      borderColor: 'border.selected',
      backgroundColor: 'background.primary',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  ...Input,
  baseStyle,
  variants: {
    ...Input.variants,
    filled,
  },
  defaultProps: {
    variant: 'filled',
  },
});
