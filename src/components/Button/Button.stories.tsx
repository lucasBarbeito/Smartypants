import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['primary', 'secondary'],
            control:{type:'select'},
            defaultValue:'primary'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    render: (args) => (<Button {...args}></Button>
)}

Primary.args = {
    variant: 'primary',
    children: 'Primary'
};

export const Secondary: Story = {
    render: (args) => <Button {...args}></Button>
}

Secondary.args = {
    variant: 'secondary',
    children: 'Secondary',
};
