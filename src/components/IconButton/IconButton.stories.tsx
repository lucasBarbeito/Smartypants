import {Meta, StoryObj} from "@storybook/react";
import IconButton from "./index";

const meta: Meta<typeof IconButton> ={
    title:'IconButton',
    component:IconButton,
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

type Story = StoryObj<typeof IconButton>

export const ExploreTrue: Story = {
    render: (args) => (<IconButton {...args}></IconButton>
)}

ExploreTrue.args = {
    variant: 'explore',
    checked: true
};

export const ExploreFalse: Story = {
    render: (args) => (<IconButton {...args}></IconButton>
)}

ExploreFalse.args = {
    variant: 'explore',
    checked: false
};

export const HomeTrue: Story = {
    render: (args) => (<IconButton {...args}></IconButton>
)}

HomeTrue.args = {
    variant: 'home',
    checked: true
};

export const HomeFalse: Story = {
    render: (args) => (<IconButton {...args}></IconButton>
)}

HomeFalse.args = {
    variant: 'home',
    checked: false
};

export const ProfileTrue: Story = {
    render: (args) => (<IconButton {...args}></IconButton>
)}

ProfileTrue.args = {
    variant: 'profile',
    checked: true
};

export const ProfileFalse: Story = {
    render: (args) => (<IconButton {...args}></IconButton>
)}

ProfileFalse.args = {
    variant: 'profile',
    checked: false
};