import React, { useRef, useEffect } from 'react';
import FooterRight from '../FooterRight/index';
import './VideoCard.css';
import {cva, VariantProps} from "class-variance-authority";

const videoCardVariant = cva([])

export interface VideoCardProps extends VariantProps<typeof videoCardVariant> {
    url: string;
    username: string;
    description: string;
    song: string;
    likes: number;
    shares: number;
    comments: number;
    saves: number;
    // setVideoRef is a function
    setVideoRef: (ref: HTMLVideoElement | null) => void;
    autoplay: boolean;

}

const VideoCard = ({ url, username, description, song, likes, shares, comments, saves, setVideoRef, autoplay }:VideoCardProps) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (autoplay) {
            // @ts-ignore
            videoRef.current.play();
        }
    }, [autoplay]);

    const onVideoPress = () => {
        // @ts-ignore
        if (videoRef.current.paused) {
            // @ts-ignore
            videoRef.current.play();
        } else {
            // @ts-ignore
            videoRef.current.pause();
        }
    };

    return (
        <div className="video">
            {/* The video element */}
            <video
                className="player"
                onClick={onVideoPress}
                ref={(ref) => {
                    // @ts-ignore
                    videoRef.current = ref;
                    // setVideoRef(ref);
                }}
                loop
                src={url}
            ></video>
            <div className="bottom-controls">
                <div className="footer-right">
                    <FooterRight likes={likes} shares={shares} comments={comments} saves={saves} />
                </div>
            </div>
        </div>
    );
};

export default VideoCard;