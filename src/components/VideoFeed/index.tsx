import React, { useEffect, useState, useRef } from 'react';
import './VideoFeed.css';
import VideoCard from '../VideoCard/index';
// import BottomNavbar from '../BottomNavbar/index';

type Video = {
    url: string;
    username: string;
    description: string;
    song: string;
    likes: number;
    comments: number;
    saves: number;
    shares: number;
    // Add other properties if present in your actual data structure
};

// This array holds information about different videos
const videoUrls = [
    {
        url: require('../../videos/video1.mp4'),
        username: 'csjackie',
        description: 'Lol nvm #compsci #chatgpt #ai #openai #techtok',
        song: 'Original sound - Famed Flames',
        likes: 430,
        comments: 13,
        saves: 23,
        shares: 1,
    },
    {
        url: require('../../videos/video2.mp4'),
        username: 'dailydotdev',
        description: 'Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes',
        song: 'tarawarolin wants you to know this isnt my sound - Chaplain J Rob',
        likes: '13.4K',
        comments: 3121,
        saves: 254,
        shares: 420,
    },
    {
        url: require('../../videos/video3.mp4'),
        username: 'wojciechtrefon',
        description: '#programming #softwareengineer #vscode #programmerhumor #programmingmemes',
        song: 'help so many people are using my sound - Ezra',
        likes: 5438,
        comments: 238,
        saves: 12,
        shares: 117,
    },
    {
        url: require('../../videos/video4.mp4'),
        username: 'faruktutkus',
        description: 'Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ',
        song: 'orijinal ses - Computer Science',
        likes: 9689,
        comments: 230,
        saves: 1037,
        shares: 967,
    },
];

function VideoFeed() {
    const [videos, setVideos] = useState<Video[]>([]);
    const videoRefs = useRef([]);

    useEffect(() => {
        // @ts-ignore
         setVideos(videoUrls);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8, // Adjust this value to change the scroll trigger point
        };

        // This function handles the intersection of videos
        const handleIntersection = (entries: any[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const videoElement = entry.target;
                    videoElement.play();
                } else {
                    const videoElement = entry.target;
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // We observe each video reference to trigger play/pause
        videoRefs.current.forEach((videoRef) => {
            observer.observe(videoRef);
        });

        // We disconnect the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [videos]);

    // This function handles the reference of each video
    const handleVideoRef = (index: number) => (ref: any) => {
        // @ts-ignore
        videoRefs.current[index] = ref;
    };

    return (
        <div className="app">
            <div className="container">
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        username={video.username}
                        description={video.description}
                        song={video.song}
                        likes={video.likes}
                        saves={video.saves}
                        comments={video.comments}
                        shares={video.shares}
                        url={video.url}
                        setVideoRef={handleVideoRef(index)}
                        autoplay={index === 0}
                    />
                ))}
                {/*<BottomNavbar className="bottom-navbar" />*/}
            </div>
        </div>
    );

}

export default VideoFeed;