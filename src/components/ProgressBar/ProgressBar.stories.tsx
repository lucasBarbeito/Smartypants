import {Meta, StoryObj} from "@storybook/react";
import ProgressBar from "./index";

const meta: Meta<typeof ProgressBar> ={
    title:'ProgressBar',
    component:ProgressBar,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['top-rounded', 'rounded'],
            control:{type:'select'},
            defaultValue:'top-rounded'
        }
    }
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const TopRounded: Story = {
    render: (args) => (<ProgressBar {...args}></ProgressBar>
)}

TopRounded.args = {
    variant: 'top-rounded',
};

export const Rounded: Story = {
    render: (args) => (<ProgressBar {...args}></ProgressBar>
)}

Rounded.args = {
    variant: 'rounded',
    color: 'bg-secondary-500'
};
