import type { Meta, StoryObj } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';

import { Card } from './card';
import { Box } from '@chakra-ui/react';
import { theme } from 'theme/ChakraTheme/theme';
import { CardContent } from './card-content';
import { CardBadge } from './card-badge';
import { CardButton } from './card-button';
import { CardTitle } from './card-title';

const meta = {
  title: 'Card/Chakra/Default',
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
        <CardContent
          title="Heading"
          description="Paragraph"
          badge={
            <CardBadge>
              <Box w="3.5rem" h="3.5rem" bgColor="teal.200" />
            </CardBadge>
          }
        />
        <CardButton>Button</CardButton>
      </Card>
    );
  },
};

export const TitleAsHeading: Story = {
  render: (args) => {
    return (
      <Card {...args}>
        <CardTitle as="h1">H1 Heading</CardTitle>
      </Card>
    );
  },
};
