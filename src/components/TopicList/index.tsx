import TopicWithSubtopics, {TopicWithSubtopicsProps} from "../TopicWithSubtopics";

export interface TopicListProps {
    topics: TopicWithSubtopicsProps[]
}

const TopicList = ({topics}:TopicListProps) => {
    return (
        <div className={'flex flex-col space-y-1 w-full'}>
            <div className={'flex flex-col overflow-y-scroll h-64 no-scrollbar divide-y divide-greyscale-500'}>
                {topics.map(topic => (
                    <TopicWithSubtopics {...topic} />
                ))}
            </div>
        </div>
    )
}

export default TopicList
