import type { Meta, StoryObj } from '@storybook/react';
import Content from "@/stories/Content";

const meta = {
  title: 'Organisms/Content Template',
  component: Content,
  tags: ['autodocs']
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    icon: "action-advocate",
    caption: "caption",
    heading: "Lorem Content Template",
    subheading: "Lorem Subheading",
    body: "This is a description for the content template component. Use this component whenever a generic heading / description / button arrangement is required."
  }
};
