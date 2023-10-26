import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['primary', 'secondary'],
            control:{type:'select'},
            defaultValue:'primary'
        }
    }
}

type ButtonProps = React.ComponentProps<typeof Button> & { name: string; };

export default meta

export const Primary: StoryObj<ButtonProps> = {
    render: (args) => (<Button variant={'primary'} name={args.name}></Button>
)}

Primary.args = {
    name: 'Primary',
};

export const Secondary: StoryObj<ButtonProps> = {
    render: (args) => (<Button variant={'secondary'} name={args.name} ></Button>
)}

Secondary.args = {
    name: 'Secondary',
};
