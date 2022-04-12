import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function SimplifiedScheduling(){
    return <div className="simplified-scheduling">
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/rackRental/simplifiedScheduling.png'} alt={"Simplified Scheduling"}/>
        </div>
        <div className="content">
            <div className="heading">SIMPLIFIED SCHEDULING</div>
            <div className="desc">To schedule your CCIE rack rental sessions, log in to your Members account on Booking Portal and, click book slot, and select the track & timezone for which you want to book a session. Select all the sessions you want, and then click Schedule Labs. It’s that easy! Our advanced scheduling system will schedule all your consecutive sessions on the same rack if they are available. You are also provided with tools that let you cancel or reschedule your rack sessions without having to contact Customer Support.</div>
            <button className="watch-video"><StaticImage placeholder="blurred" src={'../../../images/rackRental/play.png'} alt={"Play"}/> Watch Video</button>
        </div>
    </div>
}
