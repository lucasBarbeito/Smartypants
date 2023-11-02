import {Meta, StoryObj} from "@storybook/react";
import Course from "./index";

const meta: Meta<typeof Course> ={
    title:'Course',
    component:Course,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['in-progress', 'description', 'actionable', 'actionable-child', 'course', 'course-description'],
            control:{type:'select'},
            defaultValue:'collapsed'
        }
    }
}

export default meta

type Story = StoryObj<typeof Course>

export const InProgress: Story = {
    render: (args) => (<Course {...args}/>)
}

InProgress.args = {
    variant: 'in-progress',
    courseName: "How to React",
    averageRating: 4.5,
    totalRatings: "2K",
    completed: 56,
    totalTopics: 100
};

export const Description: Story = {
    render: (args) => (<Course {...args}/>)
}

Description.args = {
    variant: 'description',
    courseName: "How to React",
    averageRating: 4.5,
    totalRatings: "2K",
    description: "Me not know me small brain",
    completed: 56,
    totalTopics: 100
};

export const Actionable: Story = {
    render: (args) => (<Course {...args}/>)
}

Actionable.args = {
    variant: 'actionable',
    courseName: "How to React",
    averageRating: 4.5,
    totalRatings: "2K",
    description: "Me not know me small brain",
    completed: 56,
    totalTopics: 100
};

export const ActionableChild: Story = {
    render: (args) => (<Course {...args}/>)
}

ActionableChild.args = {
    variant: 'actionable-child',
    courseName: "How to React",
    averageRating: 4.5,
    totalRatings: "2K",
    description: "Me not know me small brain",
    completed: 56,
    totalTopics: 100
};

export const NotStartedCourse: Story = {
    render: (args) => (<Course {...args}/>)
}

NotStartedCourse.args = {
    variant: 'course',
    courseName: "How to React",
    averageRating: 4.5,
    totalRatings: "2K",
    description: "Me not know me small brain"
};

export const NotStartedCourseDescriptioon: Story = {
    render: (args) => (<Course {...args}/>)
}

NotStartedCourseDescriptioon.args = {
    variant: 'course-description',
    courseName: "How to React",
    averageRating: 4.5,
    totalRatings: "2K",
    description: "Me not know me small brain"
};