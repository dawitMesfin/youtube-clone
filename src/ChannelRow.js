import React from 'react'
import './ChannelRow.css'
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';



function ChannelRow({image,channelName,verified,subscribs,noOfVideos,discription}) {
    return (
        <div className='channelRow'>
        <Avatar src={image} alt = {channelName} className='channelRow-logo'/>
        <div className='row-texts'>
        <h4>{channelName} {verified && <CheckCircleIcon className='verfyBox'/>} </h4>
        <p>{`${subscribs} subscribers . ${noOfVideos} videos`}</p>
        <p>{discription}</p>
        </div>
        <Button className='subscribe ' variant='contained'>SUBSCRIBE</Button>
        </div>
    )
}

export default ChannelRow
