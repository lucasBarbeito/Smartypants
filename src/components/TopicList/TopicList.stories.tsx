import {Meta, StoryObj} from "@storybook/react";
import TopicList from "./index";

const meta: Meta<typeof TopicList> ={
    title:'TopicList',
    component:TopicList,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof TopicList>


export const Example: Story = {
    render: (args) => (<TopicList {...args}/>
    )}

Example.args = {
    topics: [
        {
            topicName:'Collapsed',
            variant: 'collapsed',
            subTopics: [
                {
                    variant: 'completed',
                    subtopicName: 'First'
                },
                {
                    variant: 'completed',
                    subtopicName: 'First'
                },
                {
                    variant: 'completed',
                    subtopicName: 'First'
                },
                {
                    variant: 'completed',
                    subtopicName: 'First'
                },
                {
                    variant: 'completed',
                    subtopicName: 'First'
                },
            ]
        },
        {
            topicName:'Expanded',
            variant: 'expanded',
            subTopics: [
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
        },
        {
            topicName:'Locked 1',
            variant: 'locked',
            subTopics: []
        },
        {
            topicName:'Locked 2',
            variant: 'locked',
            subTopics: []
        },
        {
            topicName:'Locked 3',
            variant: 'locked',
            subTopics: []
        }
    ]
};