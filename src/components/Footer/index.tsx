import {cva, VariantProps} from "class-variance-authority";
import IconButton from "../IconButton";

const footerVariant = cva([
    'bg-primary-600',
    'w-full',
    'py-2',
    'px-4',
    'flex',
    'justify-evenly',
    'fixed', // Fixed positioning
    'bottom-0', // Positioned at the bottom
    'left-0', // Positioned at the left
    'z-10', // Z-index to ensure it's above other elements
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
