import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import immage from './Immages/Untitled.jpg'
import immage2 from'./Immages/pp.jpg'
import VideoRow from './VideoRow';


function SearchPage() {
    return (
       <div className='searchPage'>
           <div className='searchPage-filter'>
            <TuneIcon/>
            <h2>FILTER</h2>
           </div>
           <hr />
           <ChannelRow
           image = {immage2}
           channelName = "Dawit Mesfin"
           verified 
           subscribs = "2.5M"
           noOfVideos = "456"
           discription = "How are you nebulas, are you fine? I realy don't care wether you are fine or not"
           />
           <hr/>
           <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
            <VideoRow 
           title = "How to clone youtube"
           noOfView = "506K"
           timeStamp = "3 years ago"
           immage = {immage2}
           channelName = "Dawit Mesfin"
           discription = "Hey nebulas I don't really care wether you are fine or not"
           thumbNail ={immage}/>
           
           
       </div> 
    )
}

export default SearchPage
