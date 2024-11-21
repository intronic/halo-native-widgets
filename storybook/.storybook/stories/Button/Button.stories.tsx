import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './Button';
import React from 'react';

const meta = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherOne: Story = {
  args: {
    text: 'Another One',
  },
};