import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const topicVideoVariant = cva([])

export interface TopicVideoProps extends VariantProps<typeof topicVideoVariant> {

}

const TopicVideo = () => {
    return (
        <div className="w-full h-48 md:h-64 lg:h-80 flex-shrink-0 rounded-lg no-scrollbar shadow-lg">
            <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="../../videos/video5.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
{/*<iframe*/
}
{/*    className="w-full h-24 object-cover"*/
}
{/*    src="https://www.youtube.com/embed/dQw4w9WgXcQ"*/
}
{/*    title="YouTube video player"*/
}
{/*    frameBorder="0"*/
}
{/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/
}
{/*    allowFullScreen*/
}
{/*></iframe>*/
}
export default TopicVideo