import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const HOW_IT_WORKS=[
    {
        logo: <StaticImage width={50} placeholder="blurred" src={'../../../images/howItWorks/1.png'} alt={"Select Your Desired Certification"}/>,
        heading: "Farmers",
        desc:"The vegetables are taken from the farmers."
    },{
        logo: <StaticImage width={60} placeholder="blurred" src={'../../../images/howItWorks/2.png'} alt={"Connect with us"}/>,
        heading: "Collection Center",
        desc:"The vegetables reach the collection center"
    },{
        logo: <StaticImage width={92} placeholder="blurred" src={'../../../images/howItWorks/3.png'} alt={"Exam Scheduling"}/>,
        heading: "Fulfillment Center",
        desc:"The vegetables reach the collection center"
    },{
        logo: <StaticImage width={60} placeholder="blurred" src={'../../../images/howItWorks/4.png'} alt={"Passing the Exam"}/>,
        heading: "Distribution Center",
        desc:"The vegetables reach the distribution center"
    },{
        logo: <StaticImage width={74}  placeholder="blurred" src={'../../../images/howItWorks/5.png'} alt={"Pay the Fee"}/>,
        heading: "Retailers",
        desc:"The vegetables reach the retailers"
    },
]

export default function HowItWorks(){
    return <div className="howItWorks">
        <div className="heading">How it works</div>
        <div className="elements">
            {HOW_IT_WORKS.map((ele,index)=><div className="element">
                <div className="image">
                    {ele.logo}
                    <span className="counter">{index+1}</span>
                </div>
                <div className="content">
                    <div className="heading">{ele.heading}</div>
                    <div className="desc">{ele.desc}</div>
                </div>

            </div>)}
        </div>
    </div>
}
