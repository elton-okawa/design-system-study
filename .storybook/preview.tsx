import type { Preview } from '@storybook/react';
import { ChakraTheme } from '../src/theme/ChakraTheme';
import { MuiTheme } from '../src/theme/MuiTheme';
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
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ChakraTheme>
        <MuiTheme>
          <Story />
        </MuiTheme>
      </ChakraTheme>
    ),
  ],
};

export default preview;
