import Button from "./Button";
import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("./Button").ButtonProps>;
    tags: string[];
    parameters: {
        controls: {
            layout: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Disabled: Story;
export declare const withOnClick: Story;
