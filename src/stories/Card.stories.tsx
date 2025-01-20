import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Buttons/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    padding: { control: 'text' },
    shadow: { control: 'text' },
    children: { control: 'text' },
    borderRadius: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const CustomStyled: Story = {
  args: {
    backgroundColor: '#f0f4ff',
    padding: '1.5rem 3rem',
    shadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '0.5rem',
    children: 'Custom Styled Button',
  },
};

export const NoShadow: Story = {
  args: {
    shadow: 'none',
    children: 'Button without shadow',
  },
};

export const LargePadding: Story = {
  args: {
    padding: '3rem',
    children: 'Button with large padding',
  },
};
