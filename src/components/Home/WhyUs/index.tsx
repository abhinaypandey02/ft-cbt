import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const ELEMENTS=[
    {
        logo:<StaticImage placeholder="blurred" src={'../../../images/whyUs/1.png'} alt={"Payment after Passing"}/>,
        heading:"Quality Products",
        content:"We have complete confidence that we provide quality products."
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/whyUs/2.png'} alt={"24*7 Support"}/>,
        heading:"24*7 Support",
        content:"Our motto is to develop long-term trust and relationships with our clients. Hence, you can reach us round the clock from anywhere to get your queries solved."
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/whyUs/3.png'} alt={"100% Secure & Confidential"}/>,
        heading:"500+ Customers",
        content:"We have a vast family of 500+ customers."
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/whyUs/4.png'} alt={"600+ Certification Portfolio"}/>,
        heading:"100+ Farmers Connected",
        content:"We have a vast family of 100+ farmers."
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/whyUs/5.png'} alt={"Experienced Team"}/>,
        heading:"Experienced Team",
        content:"We have been working in this field since 2016 and have a 100% success rate. And the credit goes to our subject-specific dedicated team of experts."
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/whyUs/6.png'} alt={"Quick Response"}/>,
        heading:"Quick Response",
        content:"We value our and our clients’ time. So, our response time is relatively high, and we make all efforts to give you a prompt reply."
    },
]

export default function WhyUs(){
    return <div className="whyUs">
            <div className="heading">Why Us?</div>
            <div className="elements">
                {ELEMENTS.slice(0,3).map(element=><div className="element">
                    <div className="logo">
                        {element.logo}
                    </div>
                    <div className="content-wrapper">
                    <div className="heading">
                        {element.heading}
                    </div>
                    <div className="content">
                        {element.content}
                    </div>
                    </div>
                </div>)}
            </div>
        <div className="elements">
            {ELEMENTS.slice(3,6).map(element=><div className="element">
                <div className="logo">
                    {element.logo}
                </div>
                <div className="content-wrapper">

                    <div className="heading">
                        {element.heading}
                    </div>
                    <div className="content">
                        {element.content}
                    </div>
                </div>

            </div>)}
        </div>
    </div>
}
