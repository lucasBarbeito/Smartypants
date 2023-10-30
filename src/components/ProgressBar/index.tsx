import {cva, VariantProps} from "class-variance-authority";

const progressBarVariant = cva([
    'bg-greyscale-400',
    'text-body-large', 
    'text-greyscale-500',
    'w-full',
    'h-2',
    'rounded-tl-lg',
    'rounded-tr-lg'
    ],{
    variants:{
        variant:{
            'top-rounded':[],
            'rounded':[]
        }
    },
    defaultVariants:{
        variant:'rounded'
    }
})

export interface ProgressBarProps extends VariantProps<typeof progressBarVariant>{
    completed: number
    color: string
}

const ProgressBar = ({variant, color='bg-success', completed=0}:ProgressBarProps) => {
    const topRounded:string=' rounded-tl-lg rounded-tr-lg '
    const rounded:string=' rounded-lg '
    const width:string=' w-1/2 '
    const variantStyle:string = variant === 'top-rounded' ? topRounded : rounded
    return (
    <div className={progressBarVariant({variant}) + variantStyle}>
        <div className={' h-2 rounded-tl-lg rounded-tr-lg ' + variantStyle + color + width}></div>
    </div>)
}

export default ProgressBar
