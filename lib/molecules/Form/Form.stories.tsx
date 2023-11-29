import type { Meta, StoryObj } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';

import { theme } from 'lib/theme';
import { Form } from '.';
import { Button } from 'lib/atoms';

const meta = {
  component: Form.Provider,
  tags: ['autodocs'],
  argTypes: getThemingArgTypes(theme, 'Form'),
} satisfies Meta<typeof Form.Provider>;

export default meta;
type Story = StoryObj<typeof Form.Provider>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <Form.Provider {...args}>
        <Form onSubmit={(values) => console.log(values)}>
          <Form.Item label="Username" name="username">
            <Form.Input placeholder="Type a name" name="username" />
          </Form.Item>
          <Button type="submit">Submit</Button>
        </Form>
      </Form.Provider>
    );
  },
};
