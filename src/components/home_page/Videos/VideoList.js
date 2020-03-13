import React from 'react';
import VideoBlock from './VideoBlock';

const VideoList = ({ vids, vidName, vidDescription }) =>{

    const renderList = vids.map((vid, index)=>{
        return <VideoBlock video={vid} videoName={vidName[index]} videoDescription={vidDescription[index]} />
    })
    return (
        <div className='video_grid-container'>
            <h1>Videos</h1>
            <div className='content-grid'>
                {renderList}
            </div>
        </div>
    )
}

export default VideoList;