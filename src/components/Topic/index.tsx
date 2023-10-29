import {cva, VariantProps} from "class-variance-authority";
import cancel from "../Icons/Cancel.svg"
import check from "../Icons/Check.svg"

const topicVariant = cva([
    'rounded-lg',
    'bg-primary-400',
    'text-body-large', 
    'text-greyscale-500',
    'w-full',
    'py-2',
    'px-4',
    'flex',
    'items-center',
    'gap-4'
    ],{
    variants:{
        variant:{
            pending:[],
            failed:[],
            completed:[],
        }
    },
    defaultVariants:{
        variant:'pending'
    }
})

export interface TopicProps extends VariantProps<typeof topicVariant>{
    subtopicName: string
}

const Topic = ({variant, subtopicName}:TopicProps) => {
    return (
    <button className={topicVariant({variant})}>
        <h1>{subtopicName}</h1>
        {variant === 'failed' && (<img src={cancel} alt="Cancel" />)}
        {variant === 'completed' && (<img src={check} alt="Check" />)}
    </button>)
}

export default Topic
