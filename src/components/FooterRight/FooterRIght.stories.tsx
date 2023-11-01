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
    render: (args) => (<FooterRight></FooterRight>
)}
