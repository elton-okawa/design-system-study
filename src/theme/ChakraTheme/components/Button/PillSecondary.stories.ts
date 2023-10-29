import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@chakra-ui/react';

const meta = {
  title: 'Button/Chakra/PillSecondary',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    isDisabled: false,
    isLoading: false,
    variant: 'pill-secondary',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
