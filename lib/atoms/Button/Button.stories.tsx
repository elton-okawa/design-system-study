import type { Meta, StoryObj } from '@storybook/react';

import { EmailIcon } from '@chakra-ui/icons';
import { Button, HStack } from '@chakra-ui/react';
import { buttonTheme } from '.';

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = Object.keys(buttonTheme.variants ?? {});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    isDisabled: false,
    isLoading: false,
    leftIcon: <EmailIcon />,
  },
  render: ({ children, ...props }) => (
    <HStack spacing="8px">
      {variants.map((variant, index) => (
        <Button key={index} variant={variant} {...props}>
          {children}
        </Button>
      ))}
    </HStack>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
  render: Default.render,
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
  render: Default.render,
};
