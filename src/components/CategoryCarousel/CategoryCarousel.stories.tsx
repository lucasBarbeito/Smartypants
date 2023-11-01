import {Meta, StoryObj} from "@storybook/react";
import CategoryCarousel from "./index";

const meta: Meta<typeof CategoryCarousel> ={
    title:'CategoryCarousel',
    component:CategoryCarousel,
    tags: ['autodocs'],
    argTypes:{}
}

export default meta

type Story = StoryObj<typeof CategoryCarousel>

export const Categories: Story = {
    render: (args) => (<CategoryCarousel {...args}/>
)}

Categories.args = {
    categories: [
        "Programming",
        "English",
        "Games",
        "Algebra",
        "Architecture",

    ],
    selected: 3
};
