// won't use state can be function component
// props come over as an argument
import React from 'react';

import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
    // need a key for this list for preformance
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect} 
                key={video.etag} 
                video={video} />
        )
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;