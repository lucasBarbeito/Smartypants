import {Meta, StoryObj} from "@storybook/react";
import FooterRight from "./index";

const meta: Meta<typeof FooterRight> ={
    title:'FooterRight',
    component:FooterRight,
    tags: ['autodocs'],
    argTypes:{

    }
}

export default meta

type Story = StoryObj<typeof FooterRight>

export const Default: Story = {
    render: (args) => (<FooterRight {...args}></FooterRight>
)}

Default.args = {
    likes: 1200,
    comments: 1200,
    saves: 1200,
    shares: 1200,
}