import React from "react";
import {useState} from "react";
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
    const [selectedIcon, setSelectedIcon] = useState(variant)

    const handleHomeIconClick = () => {
        setSelectedIcon('home')
    }
    const handleExploreIconClick = () => {
        setSelectedIcon('explore')
    }
    const handleProfileIconClick = () => {
        setSelectedIcon('profile')
    }


    return (
        <div className={footerVariant({variant})} >
            <IconButton variant='home' onClick={handleHomeIconClick} checked={selectedIcon === 'home'}/>
            <IconButton variant='explore' onClick={handleExploreIconClick} checked={selectedIcon === 'explore'}/>
            <IconButton variant='profile' onClick={handleProfileIconClick} checked={selectedIcon === 'profile'}/>
        </div>)
}

export default Footer
