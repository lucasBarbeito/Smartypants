import {cva, VariantProps} from "class-variance-authority";

const progressBarVariant = cva([
    'bg-greyscale-400',
    'text-body-large',
    'text-greyscale-500',
    'w-full',
    'h-2',
    'rounded-tl-lg',
    'rounded-tr-lg'
], {
    variants: {
        variant: {
            'top-rounded': [],
            'rounded': []
        }
    },
    defaultVariants: {
        variant: 'rounded'
    }
})

export interface ProgressBarProps extends VariantProps<typeof progressBarVariant> {
    completed: number
    color: string
    totalTopics: number
}

const ProgressBar = ({variant, color = 'bg-success', completed = 0, totalTopics}: ProgressBarProps) => {
    const topRounded: string = ' rounded-tl-lg rounded-tr-lg '
    const rounded: string = ' rounded-lg '
    const variantStyle: string = variant === 'top-rounded' ? topRounded : rounded

    const formatCompletedPercentage = () => {
        const percentageCompleted = completed / totalTopics
        const returnString = Math.round(percentageCompleted * 100) + '%'
        return returnString
    }

    return (
        <div className={progressBarVariant({variant}) + variantStyle}>
            <div className={' h-2 rounded-tl-lg rounded-tr-lg ' + variantStyle + color} style={{width: formatCompletedPercentage()}}></div>
        </div>
    )
}

export default ProgressBar
