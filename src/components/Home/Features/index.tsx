import React, {useState} from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const FEATURES=[
    {
        heading:"Farming and supply chain",
        text:"Creating a one-stop platform for all farm-based products, delivering fresh and quality veggies direct to door in the meantime of 10-12 hours.",
        image:<StaticImage placeholder={"blurred"} src={'../../../images/features/1.png'} alt={"Feature 1"}/>
    },{
        heading:"Farming and supply chain",
        text:"Creating a reliable sophisticated supply chain between farmers to end customers.",
        image:<StaticImage placeholder={"blurred"} src={'../../../images/features/2.png'} alt={"Feature 1"}/>
    },{
        heading:"Farming and supply chain",
        text:"Providing real-time data and transparency in the production and availability of vegetables in the market.",
        image:<StaticImage placeholder={"blurred"} src={'../../../images/features/3.png'} alt={"Feature 1"}/>
    }
]


export default function Features(){
    const [selected,setSelected]=useState(-1);
    return <div className="features">
        <div className="heading">Farming and supply chain</div>

        {FEATURES.map((feature,i)=><div onMouseOver={()=>{setSelected(i)}} className={"feature "+(selected===i?"selected":"")}>
            <div className="content">
                {/*<div className="heading">{feature.heading}</div>*/}
                <div className="text">{feature.text}</div>
            </div>
            <div className="image">{feature.image}</div>
            </div>)}
    </div>
}
