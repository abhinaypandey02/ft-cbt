import React from 'react';
import './styles.scss';

export default function Video(){
    return <div className="video">
        <div className="heading">Video</div>
        <div className="video-wrapper" >
            <video autoPlay={true} controls={true} poster={"https://www.betterteam.com/images/hr-business-partner-job-description-6000x4000-20201123.jpeg?crop=1067:553,smart&width=500&dpr=2"}>
                <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}
