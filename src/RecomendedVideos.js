import React from 'react'
import './RecomendedVideos.css'
import VideoCard from './VideoCard'
import immage from './Immages/Untitled.jpg'
import immage2 from './Immages/pp.jpg'


function RecomendedVideos() {

    let videoCards = VideoCard
    return (
        <div className='recomended-video'>
            <h1>Recomended</h1>
            <div className='videosrecomended-videos'>
                <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
            
            <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
            <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
            <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
            <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
            <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
            <VideoCard 
                Title='How to clone Youtube'
                timeStamp='3 days ago'
                Views='2.4M views'
                thumbNailImage={immage}
                channelName = 'Dawit Mesfin'
                channelImage={immage2}/>
                </div>
                
            
        </div>
    )
}

export default RecomendedVideos
