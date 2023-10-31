import {Meta, StoryObj} from "@storybook/react";
import CourseCarousel from "./index";

const meta: Meta<typeof CourseCarousel> ={
    title:'CourseCarousel',
    component:CourseCarousel,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['explore', 'home', 'profile'],
            control:{type:'select'},
            defaultValue:'primary'
        }
    }
}

export default meta

type Story = StoryObj<typeof CourseCarousel>

export const InProgress: Story = {
    render: (args) => (<CourseCarousel {...args}/>
)}

InProgress.args = {
    variant: 'in-progress',
    courses: [
        {
            courseName: "Be stronk",
            averageRating: 4.7,
            totalRatings: "1M",
            description: "How to be strong and resilient."
        },
        {
            courseName: "Learn Coding",
            averageRating: 4.9,
            totalRatings: "500K",
            description: "A comprehensive coding course for beginners."
        },
        {
            courseName: "Cooking Mastery",
            averageRating: 4.5,
            totalRatings: "750K",
            description: "Master the art of cooking with our expert chefs."
        }
    ]
};

export const Category: Story = {
    render: (args) => (<CourseCarousel {...args}/>
    )}

Category.args = {
    variant: 'category',
    categoryName: 'Category name',
    courses: [
        {
            courseName: "Be stronk",
            averageRating: 4.7,
            totalRatings: "1M",
            description: "How to be strong and resilient."
        },
        {
            courseName: "Learn Coding",
            averageRating: 4.9,
            totalRatings: "500K",
            description: "A comprehensive coding course for beginners."
        },
        {
            courseName: "Cooking Mastery",
            averageRating: 4.5,
            totalRatings: "750K",
            description: "Master the art of cooking with our expert chefs."
        }
    ]
};