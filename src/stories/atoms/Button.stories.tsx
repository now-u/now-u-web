import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { fn } from "@storybook/test";

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: "primary",
    title: "Button title",
    onClick: undefined,
  }
};

export const PrimaryDisabled: Story = {
  args: {
    style: "primary",
    title: "Button title",
    onClick: undefined,
    disabled: true
  }
};

export const Secondary: Story = {
  args: {
    style: "secondary",
    title: "button title",
    onClick: undefined,
    disabled: false
  }
};

export const SecondaryDisabled: Story = {
  args: {
    style: "secondary",
    title: "button title",
    onClick: undefined,
    disabled: true
  }
};

export const SecondaryDark: Story = {
  args: {
    style: "secondary",
    title: "button title",
    onClick: undefined,
    disabled: false
  },
  globals: {
    theme: "dark"
  }
};

export const SecondaryDisabledDark: Story = {
  args: {
    style: "secondary",
    title: "button title",
    onClick: undefined,
    disabled: true
  },
  globals: {
    theme: "dark"
  }
};