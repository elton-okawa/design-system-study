import type { Meta, StoryObj } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';

import { Box } from '@chakra-ui/react';
import { theme } from 'lib/theme';
import { Card } from '.';

const meta = {
  component: Card,
  tags: ['autodocs'],
  // argTypes: {
  //   ...getThemingArgTypes(theme, 'Card'),
  //   loading: { type: 'boolean' },
  // },
  argTypes: getThemingArgTypes(theme, 'Card'),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Content
          title="Heading"
          description="Paragraph"
          badge={
            <Card.Badge>
              <Box w="3.5rem" h="3.5rem" bgColor="teal.200" />
            </Card.Badge>
          }
        />
        <Card.Button>Button</Card.Button>
      </Card>
    );
  },
};
