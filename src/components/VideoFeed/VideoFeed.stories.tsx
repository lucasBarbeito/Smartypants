import {Meta, StoryObj} from "@storybook/react";
import VideoFeed from "./index";

const meta: Meta<typeof VideoFeed> ={
    title:'VideoFeed',
    component:VideoFeed,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof VideoFeed>

export const Default: Story = {
    render: (args) => (<VideoFeed ></VideoFeed>
)}

