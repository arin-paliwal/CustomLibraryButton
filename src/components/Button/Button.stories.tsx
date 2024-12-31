import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["components", "button"],
  parameters: {
    controls: { layout: "centered" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const withOnClick: Story = {
  args: {
    children: "Click Me",
    variant: "primary",
    disabled: false,
    onClick: () => alert("Button clicked"),
  },
};
