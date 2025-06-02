import type { Meta, StoryObj } from '@storybook/react';
import ImageFrame from "@/stories/atoms/ImageFrame";

const meta = {
  title: 'Atoms/ImageFrame',
  component: ImageFrame,
  tags: ['autodocs']
} satisfies Meta<typeof ImageFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    src: 'https://picsum.photos/1200/600',
    alt: 'Example image alt',
    imageClassName: '', // Optional
  }
};