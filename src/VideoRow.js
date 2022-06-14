import { Avatar } from '@mui/material'
import React from 'react'
import './VideoRow.css'


function VideoRow({title,noOfView,timeStamp,immage,channelName,discription,thumbNail}) {
    return (
        <div className='video-row'>
            <img src= {thumbNail} alt="DM"/>
            <div className='video-texts'>
                <h3>{title}</h3>
                <p>{`${noOfView} views . ${timeStamp}`}</p>
                <div className='video-texts-avater'>
                    <Avatar src={immage}/>
                    <p>{channelName}</p>
                </div>
                <p>{discription}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
