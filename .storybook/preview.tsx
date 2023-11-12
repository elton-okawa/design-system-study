import type { Preview } from '@storybook/react';
import { theme } from '../src/lib/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    chakra: {
      theme,
    },
  },
};

export default preview;
