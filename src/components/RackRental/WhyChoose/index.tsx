import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const whyChoose=[
    {
        title:"Up to Date Racks",
        desc:"Our racks are 100 % up to date in accordance with the software versions and the lab configurations. Our clients have reviewed that our racks are replicas of CCIE security lab exams."
    },{
        title:"Feel at Home",
        desc:"There are no restrictions or boundaries to access our rack-rental system. It can be accessed from anywhere in the world, anytime."
    },{
        title:"Fast & Reliable",
        desc:"Since we feel that you should not feel disturbed by the downtime or poor internet connectivity, unlike others, we host ou racks in tier 3 Data Centers."
    },{
        title:"Join with Friends",
        desc:"We provide a special feature through which your co learner or your mentor can access your rack in live session so that you can discuss various issues and learn them hassle free."
    },{
        title:"Excellent Support",
        desc:"We are here to serve you what you have come for. Feel sure that you will be served with the best. We will solve all the problems you face while taking our services with immediate solutions."
    },{
        title:"We Use VNC",
        desc:"The most salient feature of our service is that you do not need to connect with a VPN or RDP to use our rack rental system. Instead, we use encrypted connection to make sure ease for you."
    },
]

export default function WhyChoose(){
    return <div className="why-choose">
        <div className="heading">
            Why Choose CBT Proxy
        </div>
        <div className="elements">
            {whyChoose.map(e=>
                <div className="element">
                    <div className="tick-blue">
                        <StaticImage placeholder="blurred" src={'../../../images/rackRental/tick-blue.png'} alt={"Tick Blue"}/>
                    </div>
                    <div className="content">
                        <div className="title">
                            {e.title}
                        </div>
                        <div className="desc">
                            {e.desc}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}
