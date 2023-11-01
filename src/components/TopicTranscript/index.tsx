export interface TopicTranscriptProps  {
    text: string
}


const TopicTranscript = ({text}: TopicTranscriptProps) => {
    return (
        <div className="flex flex-col h-full overflow-hidden px-2 py-2 bg-primary-400 rounded-lg">
            <textarea readOnly className="w-full h-full border-none text-greyscale-500 bg-primary-400 resize-none no-scrollbar font-montserrat">{text}</textarea>
        </div>
    )
}

export default TopicTranscript