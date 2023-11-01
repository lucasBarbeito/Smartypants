import {cva, VariantProps} from "class-variance-authority";
import Button from "../Button";

const topicNavigationVariant = cva([
    'bg-primary-600',
    'w-full',
    'px-4',
    'flex',
    'justify-end',
    'gap-4',
    ],{
    variants:{
        variant:{
            default:[]
        }
    },
    defaultVariants:{
        variant:'default'
    }
})

export interface TopicNavigationProps extends VariantProps<typeof topicNavigationVariant>{
    leftButtonText : string | undefined,
    rightButtonText : string,
}

const TopicNavigation = ({variant, leftButtonText, rightButtonText}:TopicNavigationProps) => {
    return (
        <div className={topicNavigationVariant({variant})} >
            {leftButtonText !== undefined ? (
                <Button variant='secondary'>{leftButtonText}</Button>
            ) : (
                <div className="bg-primary-600 w-1/2"></div>
            )}
            <Button variant='primary'> {rightButtonText} </Button>
        </div>)
}

export default TopicNavigation
