import type { Meta, StoryObj } from '@storybook/react';

import Heading from "@/stories/Heading";

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs']
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: "primary",
    eyebrow: "Eyebrow",
    title: "Primary Lorem Heading",
    subtitle: "Subheading"
  }
};

export const Secondary: Story = {
  args: {
    style: "secondary",
    eyebrow: "Eyebrow",
    title: "Primary Lorem Heading",
    subtitle: "Subheading"
  }
};

export const Tertiary: Story = {
  args: {
    style: "tertiary",
    eyebrow: "Eyebrow",
    title: "Primary Lorem Heading",
    subtitle: "Subheading"
  }
};

export const Quaternary: Story = {
  args: {
    style: "quaternary",
    eyebrow: "Eyebrow",
    title: "Primary Lorem Heading",
    subtitle: "Subheading"
  }
};