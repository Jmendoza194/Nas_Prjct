import React from 'react';
import VideoBlock from './VideoBlock';

const VideoList = ({ vids, vidName, vidDescription }) =>{

    const renderList = vids.map((vid, index)=>{
        return <VideoBlock video={vid} videoName={vidName[index]} videoDescription={vidDescription[index]} />
    })
    return (
        <div className='video_grid-container'>
            {renderList}
        </div>
    )
}

export default VideoList;