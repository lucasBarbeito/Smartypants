import {Meta, StoryObj} from "@storybook/react";
import Footer from "./index";

const meta: Meta<typeof Footer> ={
    title:'Footer',
    component:Footer,
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

type Story = StoryObj<typeof Footer>

export const Home: Story = {
    render: (args) => (<Footer {...args}></Footer>
)}

Home.args = {
    variant: 'home',
};

export const Explore: Story = {
    render: (args) => (<Footer {...args}></Footer>
)}

Explore.args = {
    variant: 'explore',
};

export const Profile: Story = {
    render: (args) => (<Footer {...args}></Footer>
)}

Profile.args = {
    variant: 'profile',
};