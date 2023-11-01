import {Meta, StoryObj} from "@storybook/react";
import TopicVideo from "./index";

const meta: Meta<typeof TopicVideo> ={
    title:'TopicVideo',
    component:TopicVideo,
    tags: ['autodocs'],
    argTypes:{

    }
}

export default meta

type Story = StoryObj<typeof TopicVideo>

export const Default: Story = {
    render: (args) => (<TopicVideo></TopicVideo>)}

Default.args = {}