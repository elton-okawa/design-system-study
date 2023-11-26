import type { Meta, StoryObj } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';

import { theme } from 'lib/theme';
import { FormControl, FormHelperText, FormLabel } from '.';
import { Input } from '@chakra-ui/react';

const meta = {
  component: FormControl,
  tags: ['autodocs'],
  argTypes: getThemingArgTypes(theme, 'Form'),
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof FormControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <FormControl {...args}>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Placeholder" />
        <FormHelperText>Type your username</FormHelperText>
        {/* <Card.Content
          title="Heading"
          description="Paragraph"
          badge={
            <Card.Badge>
              <Box w="3.5rem" h="3.5rem" bgColor="teal.200" />
            </Card.Badge>
          }
        />
        <Card.Button>Button</Card.Button> */}
      </FormControl>
    );
  },
};
