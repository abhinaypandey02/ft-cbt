import React, {useState} from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const PLANS=[
    {
        name:"Solo",
        price:35,
        sessions:1,
        discountPercent:0,
        hoursPerSession:4,
        totalRackTime:4,
        pricePerHour:8.75,
    },{
        name:"Basic",
        price:160,
        sessions:5,
        discountPercent:8.57,
        hoursPerSession:4,
        totalRackTime:20,
        pricePerHour:8,
    },{
        name:"Advanced",
        price:300,
        sessions:10,
        discountPercent:14.28,
        hoursPerSession:4,
        totalRackTime:40,
        pricePerHour:7.50,
    },{
        name:"Expert",
        price:550,
        sessions:20,
        discountPercent:21.42,
        hoursPerSession:4,
        totalRackTime:80,
        pricePerHour:6.80,
    },{
        name:"Ultimate",
        price:800,
        sessions:30,
        discountPercent:23.80,
        hoursPerSession:4,
        totalRackTime:120,
        pricePerHour:6.60,
    }
]

export default function Pricing(){
    const [selected,setSelected]=useState(0);
    return <div className="pricing">
        <div className="heading">Pricing Plans</div>
        <div className="sub-heading">The Best, only for you!</div>
        <div className="plans">
            {PLANS.map(p=><div className="plan">
                <div className="name">{p.name}</div>
                <div className="price">${p.price}</div>
                <div className="per-session">{p.sessions===1?"Per Session":`For ${p.sessions} Sessions`}</div>
                <div className="plan-features">
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick.png'} alt={"tick"}/> Discount {p.discountPercent}%</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick.png'} alt={"tick"}/> {p.hoursPerSession} Hours Per Session</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick.png'} alt={"tick"}/> {p.totalRackTime} Total Rack Time</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick.png'} alt={"tick"}/> ${p.pricePerHour} Price Per Hour</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick.png'} alt={"tick"}/> Dedicated Access</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick.png'} alt={"tick"}/> 24*7 Support</div>
                </div>
                <button className="contact-us">Contact Us</button>
            </div>)}
        </div>
        <div className="plan-mob">
            <div className="plan">
                <div className="name">{PLANS[selected].name}</div>
                <div className="price">${PLANS[selected].price}</div>
                <div className="per-session">{PLANS[selected].sessions===1?"Per Session":`For ${PLANS[selected].sessions} Sessions`}</div>
                <div className="plan-features">
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-white.png'} alt={"tick"}/> Discount {PLANS[selected].discountPercent}%</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-white.png'} alt={"tick"}/> {PLANS[selected].hoursPerSession} Hours Per Session</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-white.png'} alt={"tick"}/> {PLANS[selected].totalRackTime} Total Rack Time</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-white.png'} alt={"tick"}/> ${PLANS[selected].pricePerHour} Price Per Hour</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-white.png'} alt={"tick"}/> Dedicated Access</div>
                    <div className="plan-feature"><StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-white.png'} alt={"tick"}/> 24*7 Support</div>
                </div>
                <button className="contact-us">Send</button>
            </div>
        </div>
        <div className="plans-mob">
            {PLANS.map((p,index)=><div className={"plan "+(selected===index?"active":"")} onClick={()=>{
                setSelected(index)
            }}>
                <div className="name">{p.name}</div>
                <div className="price">${p.price}</div>
                <div className="per-session">{p.sessions===1?"Per Session":`For ${p.sessions} Sessions`}</div>
            </div>)}
        </div>
    </div>
}
