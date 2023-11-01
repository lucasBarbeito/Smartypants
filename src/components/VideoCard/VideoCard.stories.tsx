import {Meta, StoryObj} from "@storybook/react";
import VideoCard from "./index";

const meta: Meta<typeof VideoCard> ={
    title:'VideoCard',
    component:VideoCard,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof VideoCard>

export const Default: Story = {
    render: (args) => (<VideoCard {...args}></VideoCard>
)}

Default.args = {

}