import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '0.25rem',
  borderRadius: '0.75rem',
  p: '20px',
});

const variantSolid = defineStyle({
  background: 'background.secondary',
});

const variantOutlined = defineStyle({
  borderWidth: '1px',
  borderColor: 'border.accent.default',
});

const variantGhost = defineStyle({});

const variants = {
  solid: variantSolid,
  outlined: variantOutlined,
  ghost: variantGhost,
};

const sizeBig = defineStyle({
  p: '50px',
});

const sizeMedium = defineStyle({
  p: '20px',
});

const sizeSmall = defineStyle({
  p: '5px',
});

const sizes = {
  big: sizeBig,
  medium: sizeMedium,
  small: sizeSmall,
};

export const tileTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'medium',
  },
});
