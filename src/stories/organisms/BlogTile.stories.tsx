import type { Meta, StoryObj } from '@storybook/react';
import BlogTile from "@/stories/organisms/BlogTile";

const meta = {
  title: 'Organisms/Blog Tile',
  component: BlogTile,
  tags: ['autodocs']
} satisfies Meta<typeof BlogTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleBlogTile: Story = {
  args: {
    title: 'Blog Tile',
    src: 'https://picsum.photos/600/400',
    alt: 'An example image',
    author: 'John Doe',
    estimatedReadingTimeInMinutes: 5,
  }
};
