import {Meta, StoryObj} from "@storybook/react";
import Category from "./index";

const meta: Meta<typeof Category> ={
    title:'Category',
    component:Category,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['selected', 'unselected'],
            control:{type:'select'},
            defaultValue:'unselected'
        }
    }
}

export default meta

type Story = StoryObj<typeof Category>

export const Unselected: Story = {
    render: (args) => <Category {...args}></Category>
}

Unselected.args = {
    variant: 'unselected',
    textName: 'Unselected',
};

export const Selected: Story = {
    render: (args) => (<Category {...args}></Category>
)}

Selected.args = {
    variant: 'selected',
    textName: 'Selected'
};