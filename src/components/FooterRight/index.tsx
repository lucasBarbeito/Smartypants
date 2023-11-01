import React, { useState } from 'react';
import {cva, VariantProps} from "class-variance-authority";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleCheck, faHeart, faCommentDots, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import './FooterRight.css';

const footerRightVariant = cva([])

export interface FooterRightProps extends VariantProps<typeof footerRightVariant> {
    likes: number;
    comments: number;
    saves: number;
    shares: number;

}
function FooterRight({ likes, comments, saves, shares }: FooterRightProps) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);


    // Function to convert likes count to a number
    // const parseLikesCount = (count: number) => {
    //     if (count.endsWith('K')) {
    //         return parseFloat(count) * 1000;
    //     }
    //     return parseInt(count);
    //     // return count;
    // };

    // Function to format likes count
    const formatLikesCount = (count: number) => {
        if (count >= 10000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    };

    const handleLikeClick = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return (
        <div className="footer-right">
            <div className="sidebar-icon">
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ width: '35px', height: '35px', color: liked ? '#FF0000' : 'white' }}
                    onClick={handleLikeClick}
                />
                <p>{formatLikesCount(likes + (liked ? 1 : 0))}</p>
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faCommentDots} style={{ width: '35px', height: '35px', color: 'white' }} />
                <p>{comments}</p>
            </div>
            <div className="sidebar-icon">
                {saved ? (
                    <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ width: '35px', height: '35px', color: '#ffc107' }}
                        onClick={() => setSaved(false)}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ width: '35px', height: '35px', color: 'white' }}
                        onClick={() => setSaved(true)}
                    />
                )}
                <p>{saved ? saves + 1 : saves}</p>
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faShare} style={{ width: '35px', height: '35px', color: 'white' }} />
                <p>{shares}</p>
            </div>
        </div>
    );
}

export default FooterRight;