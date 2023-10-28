import {Meta, StoryObj} from "@storybook/react";
import Header from "./index";

const meta: Meta<typeof Header> ={
    title:'Header',
    component:Header,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof Header>

export const HeaderExample: Story = {
    render: (args) => (<Header {...args}></Header>
)}

HeaderExample.args = {
    text: 'Header'
};