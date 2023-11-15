import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from './tile';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { theme } from 'lib/theme';

const meta = {
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
