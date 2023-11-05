import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from './Tile';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { theme } from 'theme/ChakraTheme/theme';

const meta = {
  title: 'Tile/Chakra/Default',
  component: Tile,
  tags: ['autodocs'],
  argTypes: getThemingArgTypes(theme, 'Tile'),
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <p>Item one</p>
        <p>Item two</p>
      </>
    ),
  },
};
