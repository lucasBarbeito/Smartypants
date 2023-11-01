import {Meta, StoryObj} from "@storybook/react";
import BarGraph from "./index";

const meta: Meta<typeof BarGraph> ={
    title:'BarGraph',
    component:BarGraph,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof BarGraph>

export const BarGraphExample: Story = {
    render: (args) => (<BarGraph {...args}></BarGraph>
)}

BarGraphExample.args = {
    text: 'BarGraph'
};