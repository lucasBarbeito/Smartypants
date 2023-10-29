import {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['rounded-lg', 'justify-center', 'text-title-small', 'text-greyscale-500', 'py-2', 'w-1/6'],{
    variants:{
        variant:{
            selected:[
                'bg-secondary-500',
            ],
            unselected:[
                'bg-white border border-greyscale-500',
            ],
        }
    },
    defaultVariants:{
        variant:'unselected'
    }
})

export interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Category = ({variant, ...rest}:CategoryProps) => {
    return <button className={buttonVariant({variant})} {...rest}/>
}

export default Category
