import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'card',
    'media',
    'title',
    'description',
    'badge',
    'button',
  ]);

const baseStyle = definePartsStyle({
  card: {
    borderRadius: '0.75rem',
    border: '2px solid',
    borderColor: 'border.opaque',
    background: 'background.primary',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'flexStart',
    padding: '1rem',
    width: '24rem',
  },
  title: {
    alignSelf: 'stretch',
    color: 'content.primary',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 700,
  },
  description: {
    alignSelf: 'stretch',
    color: 'content.primary',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
  },
  button: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  badge: {
    padding: '0 0 1.75rem 1rem',
    flexShrink: '0',
  },
});

export const cardTheme = defineMultiStyleConfig({
  baseStyle,
});
