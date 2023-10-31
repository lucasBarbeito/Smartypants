import {cva, VariantProps} from "class-variance-authority";

const topicTranscriptVariant = cva([])

export interface TopicTranscriptProps extends VariantProps<typeof topicTranscriptVariant> {
    text: string
}


const TopicTranscript = ({text}: TopicTranscriptProps) => {
    return (
        <div className="flex flex-col items-start overflow-hidden">
            <textarea readOnly className="w-full h-96 border-none rounded-lg bg-primary-400 text-greyscale-500 resize-none no-scrollbar">{text}</textarea>
        </div>
    )
}

export default TopicTranscript