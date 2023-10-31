import {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import "tailwindcss/tailwind.css";


const buttonVariant = cva(['rounded-lg', 'w-full', 'justify-center', 'text-title-small', 'text-greyscale-500', 'py-2', 'w-1/2'],{
    variants:{
        variant:{
            primary:[
                'bg-secondary-500',
                'hover:bg-secondary-600'
            ],
            secondary:[
                'bg-white border border-secondary-500',
                'hover:bg-secondary-400'
            ],
        }
    },
    defaultVariants:{
        variant:'primary'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Button = ({variant, ...rest}:ButtonProps) => {
    return <button className={buttonVariant({variant})} {...rest}/>
}

export default Button
