import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const FEATURES=[
    {
        heading:"Farming and supply chain",
        text:"Creating a one-stop platform for all farm-based products, delivering fresh and quality veggies direct to door in the meantime of 10-12 hours. Creating a reliable sophisticated supply chain between farmers to end customers. Providing real-time data and transparency in the production and availability of vegetables in the market using traceability tech. In terms of feeding the world, our problem is  not lack of food, it's lack of appropriate infrastructure to distribute the fresh produce. For Instance, we waste 1/3rd of the food we produce.",
        image:<StaticImage placeholder={"blurred"} src={'../../../images/features/1.png'} alt={"Feature 1"}/>
    },
    {
        heading:"Our Vision",
        text:"Our vision is to build a reliable and sophisticated market chain that can help farmers/consumers more easily sell/buy vegetables from the farm..",
        image:<StaticImage placeholder="blurred" src={'../../../images/features/2.png'} alt={"Feature 2"}/>
    },
]


export default function Features(){
    return <div className="features">
        {FEATURES.map(feature=><div className="feature">
            <div className="content">
                <div className="heading">{feature.heading}</div>
                <div className="text">{feature.text}</div>
            </div>
            <div className="image">{feature.image}</div>
            </div>)}
    </div>
}
