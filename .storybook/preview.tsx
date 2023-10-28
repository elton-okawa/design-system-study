import type { Preview } from '@storybook/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
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
      <ChakraBaseProvider>
        <Story />
      </ChakraBaseProvider>
    ),
  ],
};

export default preview;
