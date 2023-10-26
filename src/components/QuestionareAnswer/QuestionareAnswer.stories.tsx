import {Meta, StoryObj} from "@storybook/react";
import QuestionareAnswer from "./index";

const meta: Meta<typeof QuestionareAnswer> ={
    title:'QuestionareAnswer',
    component:QuestionareAnswer,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['question', 'selected', 'correct', 'incorrect'],
            control:{type:'select'},
            defaultValue:'primary'
        }
    }
}

export default meta

type Story = StoryObj<typeof QuestionareAnswer>

export const Question: Story = {
    render: (args) => (<QuestionareAnswer {...args}></QuestionareAnswer>
)}

Question.args = {
    variant: 'question',
    children: 'A. Possible answer'
};

export const Selected: Story = {
    render: (args) => <QuestionareAnswer {...args}></QuestionareAnswer>
}

Selected.args = {
    variant: 'selected',
    children: 'A. Possible answer'
};

export const Correct: Story = {
    render: (args) => <QuestionareAnswer {...args}></QuestionareAnswer>
}

Correct.args = {
    variant: 'correct',
    children: 'A. Possible answer'
};

export const Incorrect: Story = {
    render: (args) => <QuestionareAnswer {...args}></QuestionareAnswer>
}

Incorrect.args = {
    variant: 'incorrect',
    children: 'A. Possible answer'
};