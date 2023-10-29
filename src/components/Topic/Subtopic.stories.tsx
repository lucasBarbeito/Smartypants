import {Meta, StoryObj} from "@storybook/react";
import Subtopic from "./index";

const meta: Meta<typeof Subtopic> ={
    title:'Subtopic',
    component:Subtopic,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['pending', 'failed', 'completed'],
            control:{type:'select'},
            defaultValue:'pending'
        }
    }
}

export default meta

type Story = StoryObj<typeof Subtopic>

export const Pending: Story = {
    render: (args) => (<Subtopic {...args}></Subtopic>
)}

Pending.args = {
    variant: 'pending',
    subtopicName: 'Pending'
};

export const Failed: Story = {
    render: (args) => (<Subtopic {...args}></Subtopic>
)}

Failed.args = {
    variant: 'failed',
    subtopicName: 'Failed'
};

export const Completed: Story = {
    render: (args) => (<Subtopic {...args}></Subtopic>
)}

Completed.args = {
    variant: 'completed',
    subtopicName: 'Completed'
};