import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const topicVideoVariant = cva([])

export interface TopicVideoProps extends VariantProps<typeof topicVideoVariant> {

}

const TopicVideo = () => {
    return (
        <div className="w-full h-48 md:h-64 lg:h-80 flex-shrink-0 rounded-lg no-scrollbar shadow-lg">
            <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"  type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default TopicVideo