import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <div className="video-item item" onClick={() => onSelectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} className="ui image" alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                {/* <div className="description">
                    {video.snippet.channelTitle}
                </div> */}
            </div>
        </div>
    )
}

export default VideoItem;