import {Meta, StoryObj} from "@storybook/react";
import Topic from "./index";

const meta: Meta<typeof Topic> ={
    title:'Topic',
    component:Topic,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['collapsed', 'expanded', 'locked'],
            control:{type:'select'},
            defaultValue:'collapsed'
        }
    }
}

export default meta

type Story = StoryObj<typeof Topic>

export const Collapsed: Story = {
    render: (args) => (<Topic {...args}></Topic>
)}

Collapsed.args = {
    variant: 'collapsed',
    topicName: 'Collapsed',
    totalSuptopicsCompleted: 0,
    totalSuptopics: 2,
};

export const Expanded: Story = {
    render: (args) => (<Topic {...args}></Topic>
)}

Expanded.args = {
    variant: 'expanded',
    topicName: 'Expanded',
    totalSuptopicsCompleted: 0,
    totalSuptopics: 2,
};

export const Locked: Story = {
    render: (args) => (<Topic {...args}></Topic>
)}

Locked.args = {
    variant: 'locked',
    topicName: 'Locked',
};