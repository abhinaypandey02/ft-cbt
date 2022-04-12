import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
const STRENGTHS=[
    "The network of over 15+ centres across the world",

    "Helps 2000+ individuals to achieve their dream certification every year.",

    "A disciplined environment that follows the set standards to give the performance with privacy and security",
    "Strong Word of mouth in the market",
    "Approachable & Cooperative Staff",
    "Effective & Quick Grievance Handling",
    "Topmost Talent works with CBTproxy",
    "A Nationwide Network Spread.",
    "Highly Motivated, Dedicated and Skilled Team",
]
export default function OurStrength(){
    return <div className="our-strength">
        <div className="heading">Our Strengths</div>
        <div className="items-container">
            <div className="items">
                {STRENGTHS.slice(0,4).map(strength=><div className="item">
                    <div className="logo"><StaticImage placeholder="blurred" src={'../../../images/aboutUs/tick.png'} alt={"tick"}/></div>
                    <div className="text">
                        {strength}
                    </div>
                </div>)}
            </div>
            <div className="items">
                {STRENGTHS.slice(4).map(strength=><div className="item">
                    <div className="logo"><StaticImage placeholder="blurred" src={'../../../images/aboutUs/tick.png'} alt={"tick"}/></div>
                    <div className="text">
                        {strength}
                    </div>
                </div>)}
            </div>
        </div>

    </div>
}
