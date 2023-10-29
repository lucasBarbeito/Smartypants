import {Meta, StoryObj} from "@storybook/react";
import Topic from "./index";

const meta: Meta<typeof Topic> ={
    title:'Topic',
    component:Topic,
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

type Story = StoryObj<typeof Topic>

export const Pending: Story = {
    render: (args) => (<Topic {...args}></Topic>
)}

Pending.args = {
    variant: 'pending',
    subtopicName: 'Pending'
};

export const Failed: Story = {
    render: (args) => (<Topic {...args}></Topic>
)}

Failed.args = {
    variant: 'failed',
    subtopicName: 'Failed'
};

export const Completed: Story = {
    render: (args) => (<Topic {...args}></Topic>
)}

Completed.args = {
    variant: 'completed',
    subtopicName: 'Completed'
};