import {cva, VariantProps} from "class-variance-authority";
import cancel from "../Icons/Cancel.svg"
import check from "../Icons/Check.svg"

const subtopicVariant = cva([
    'rounded-lg',
    'bg-primary-400',
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
            pending:[],
            failed:[],
            completed:[],
        }
    },
    defaultVariants:{
        variant:'pending'
    }
})

export interface SubtopicProps extends VariantProps<typeof subtopicVariant>{
    subtopicName: string
}

const Subtopic = ({variant, subtopicName}:SubtopicProps) => {
    return (
    <button className={subtopicVariant({variant})}>
        <h1>{subtopicName}</h1>
        {variant === 'failed' && (<img src={cancel} alt="Cancel" />)}
        {variant === 'completed' && (<img src={check} alt="Check" />)}
    </button>)
}

export default Subtopic
