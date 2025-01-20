import type { Meta, StoryObj } from '@storybook/react';

import Icon from "@/stories/atoms/Icon";

const meta = {
  title: 'Atoms/Icons',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ActionsAdvocate: Story = {
  args: {
    name: "action-advocate"
  }
};