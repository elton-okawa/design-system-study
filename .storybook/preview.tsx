import type { Preview } from '@storybook/react';
import { ChakraTheme } from '../src/theme/ChakraTheme';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraTheme>
        <Story />
      </ChakraTheme>
    ),
  ],
};

export default preview;
