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

export const Default: Story = {
    name:'Default',
    render: (args) => <Button {...args}>Button</Button>
}

export const Primary: Story = {
    name:'Primary',
    render: (args) => <Button variant={'primary'} {...args}>Button</Button>
}

export const Secondary: Story = {
    name:'Secondary',
    render: (args) => <Button variant={'secondary'} {...args}>Button</Button>
}