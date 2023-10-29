import {cva, VariantProps} from "class-variance-authority";
import IconButton from "../IconButton";

const footerVariant = cva([
    'bg-primary-600',
    'w-full',
    'py-2',
    'px-4',
    'flex',
    'justify-evenly',
    ],{
    variants:{
        variant:{
            home:[],
            explore:[],
            profile:[],
        }
    },
    defaultVariants:{
        variant:'home'
    }
})

export interface FooterProps extends VariantProps<typeof footerVariant>{
}

const Footer = ({variant}:FooterProps) => {

    return (
        <div className={footerVariant({variant})} >
            <IconButton variant='home' checked={variant === 'home'}/>
            <IconButton variant='explore' checked={variant === 'explore'}/>
            <IconButton variant='profile' checked={variant === 'profile'}/>
        </div>)
}

export default Footer
