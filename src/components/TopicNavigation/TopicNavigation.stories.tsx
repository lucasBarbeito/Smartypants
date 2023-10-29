import {Meta, StoryObj} from "@storybook/react";
import TopicNavigation from "./index";

const meta: Meta<typeof TopicNavigation> ={
    title:'TopicNavigation',
    component:TopicNavigation,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof TopicNavigation>

export const PreviousNext: Story = {
    render: (args) => (<TopicNavigation {...args}></TopicNavigation>
)}

PreviousNext.args = {
    leftButtonText:'Previous',
    rightButtonText:'Next'
};

export const PreviousQuiz: Story = {
    render: (args) => (<TopicNavigation {...args}></TopicNavigation>
)}

PreviousQuiz.args = {
    leftButtonText:'Previous',
    rightButtonText:'Quiz'
};

export const Next: Story = {
    render: (args) => (<TopicNavigation {...args}></TopicNavigation>
)}

Next.args = {
    rightButtonText:'Next'
};

export const Quiz: Story = {
    render: (args) => (<TopicNavigation {...args}></TopicNavigation>
)}

Quiz.args = {
    rightButtonText:'Quiz'
};