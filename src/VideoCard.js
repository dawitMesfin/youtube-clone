import React from 'react'
import './VideoCard.css'
import Avatar from '@mui/material/Avatar';

function VideoCard({thumbNailImage,Title,channelName,Views,timeStamp,channelImage}) {
    return (
        <div className='video-card'>
            <img className='thumbnail-immage' src={thumbNailImage}></img>
            <div className='video-card-info'>
                <Avatar className='video-avatar'
                 src={channelImage} alt={channelName}/>
                 <div className='video-text'>
                 <h4>{Title}</h4>            
                 <p>{channelName}</p> 
                 <p>{Views}.{timeStamp}</p>
                 </div>
            </div>
        </div>
    )
}

export default VideoCard
