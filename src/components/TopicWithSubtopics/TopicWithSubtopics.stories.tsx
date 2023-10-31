import {Meta, StoryObj} from "@storybook/react";
import TopicWithSubtopics from "./index";

const meta: Meta<typeof TopicWithSubtopics> ={
    title:'TopicWithSubtopics',
    component:TopicWithSubtopics,
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

type Story = StoryObj<typeof TopicWithSubtopics>

export const Expanded: Story = {
    render: (args) => (<TopicWithSubtopics {...args}/>
)}

Expanded.args = {
    topicName:'Expanded',
    variant: 'expanded',
    subTopics : [
        {
            variant: 'completed',
            subtopicName: 'First'
        },
        {
            variant: 'completed',
            subtopicName: 'Second'
        },
        {
            variant: 'failed',
            subtopicName: 'Third'
        },
        {
            variant: 'pending',
            subtopicName: 'Questionare'
        },
        {
            variant: 'pending',
            subtopicName: 'Extra content'
        }
    ]
};

export const Collapsed: Story = {
    render: (args) => (<TopicWithSubtopics {...args}/>
)}

Collapsed.args = {
    topicName:'Collapsed',
    variant: 'collapsed',
};

export const Locked: Story = {
    render: (args) => (<TopicWithSubtopics {...args}/>
)}

Locked.args = {
    topicName:'Locked',
    variant: 'locked',
};