import React from 'react';
import '../../../styles/video-styles.css'

const VideoBlock = ({ video, videoName, videoDescription }) =>{
    return (
        <div className='video-item'>
            <div>
                <h3>{videoName}</h3>
                <p className='small-margin-up'>{videoDescription}</p>
                <iframe className='small-margin-up' width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
       </div>
    )
}

export default VideoBlock;