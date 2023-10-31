import {cva, VariantProps} from "class-variance-authority";
import Subtopic, {SubtopicProps} from "../Subtopic";
import Topic from "../Topic";

const topicWithSubtopicsVariant = cva([],{
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

export interface TopicWithSubtopicsProps extends VariantProps<typeof topicWithSubtopicsVariant>{
    topicName: string,
    subTopics: SubtopicProps[] ,
}

const TopicWithSubtopics = ({variant, topicName, subTopics = []}:TopicWithSubtopicsProps) => {
    const totalSuptopics : number = subTopics.length
    const totalSuptopicsCompleted : number =
        subTopics.reduce((count, subtopic) => {
            return subtopic.variant === 'completed' ? count + 1 : count;
        }, 0);
    return (
       <div className={'bg-primary-600'}>
           <Topic topicName={topicName} totalSuptopicsCompleted={totalSuptopicsCompleted} totalSuptopics={totalSuptopics} variant={variant}/>
           { subTopics.length > 0 && (
               <div className={'flex flex-col px-4 py-2 gap-2'}>
                   {subTopics.map(subtopic => (
                       <Subtopic {...subtopic}></Subtopic>
                   ))}
               </div>
           )}
       </div>
    )
}

export default TopicWithSubtopics
