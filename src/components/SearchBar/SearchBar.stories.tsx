import {Meta, StoryObj} from "@storybook/react";
import SearchBar from "./index";

const meta: Meta<typeof SearchBar> ={
    title:'SearchBar',
    component:SearchBar,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['searching', 'not-searching'],
            control:{type:'select'},
            defaultValue:'pending'
        }
    }
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Searching: Story = {
    render: (args) => (<SearchBar {...args}></SearchBar>
)}

Searching.args = {
    variant: 'searching',
    searchingText: 'searching text'
};

export const NotSearching: Story = {
    render: (args) => (<SearchBar {...args}></SearchBar>
)}

NotSearching.args = {
    variant: 'not-searching'
};
