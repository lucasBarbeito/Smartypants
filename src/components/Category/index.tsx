import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva([
    'rounded-lg',
    'text-title-small',
    'text-greyscale-500',
    'py-2',
    'px-2',
    'inline',
    'whitespace-no-wrap'
],{
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

export interface CategoryProps extends VariantProps<typeof buttonVariant>{
    textName : string
}

const Category = ({variant, textName}:CategoryProps) => {
    return <p className={buttonVariant({variant})}> {textName} </p>
}

export default Category
