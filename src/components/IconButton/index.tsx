import {cva, VariantProps} from "class-variance-authority";
import Explore from "../Icons/ExploreIcon"
import Home from "../Icons/HomeIcon"
import Profile from "../Icons/ProfileIcon"

const iconButtonVariant = cva([
    'bg-primary-600', 
    'inline-flex', 
    'flex-col', 
    'justify-center', 
    'items-center',
    'text-body-small',
],{
    variants:{
        variant:{
            explore:[],
            home:[],
            profile:[],
        }
    },
    defaultVariants:{
        variant:'home'
    }
})

export interface IconButtonProps extends VariantProps<typeof iconButtonVariant>{
    checked : boolean,
}

const IconButton = ({variant, checked}:IconButtonProps) => {
    return (<button className={iconButtonVariant({variant})}>
            {variant === 'explore' && (<Explore checked={checked}/>)}
            {variant === 'home' && (<Home checked={checked}/>)}
            {variant === 'profile' && (<Profile checked={checked}/>)}
            <h1 className={checked ? 'text-secondary-500': 'text-greyscale-500'}> {variant} </h1>
        </button>)
}

export default IconButton
