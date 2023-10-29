import {cva, VariantProps} from "class-variance-authority";
import expand from "../Icons/Expand.svg"
import contract from "../Icons/Contract.svg"
import lock from "../Icons/Locked.svg"

const topicVariant = cva([
    'bg-primary-600',
    'text-body-large', 
    'text-greyscale-500',
    'w-full',
    'py-2',
    'px-4',
    'flex justify-between',
    'items-center',
    'gap-4'
    ],{
    variants:{
        variant:{
            collapsed:[],
            expanded:[],
            locked:[],
        }
    },
    defaultVariants:{
        variant:'collapsed'
    }
})

export interface TopicProps extends VariantProps<typeof topicVariant>{
    topicName: string,
    totalSuptopics: number | undefined,
    totalSuptopicsCompleted: number | undefined,
}

const Topic = ({variant, topicName, totalSuptopics, totalSuptopicsCompleted}:TopicProps) => {
    return (
    <button className={topicVariant({variant})}>
        <h1>{topicName}</h1>
        <div className="flex justify-center">
            {(variant === 'expanded' || variant === 'collapsed') && (<h1>({totalSuptopicsCompleted}/{totalSuptopics})</h1>)}
            {variant === 'expanded' && (<img src={expand} alt="Expand" />)}
            {variant === 'collapsed' && (<img src={contract} alt="Collapse" />)}
            {variant === 'locked' && (<img src={lock} alt="Locked" />)}
        </div>
    </button>)
}

export default Topic
