import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from 'gatsby-background-image'
const ELEMENTS=[
    {
        image:<StaticImage placeholder="blurred" src={'../../../images/rackRental/1.png'} alt={"Choose The Plan"}/>,
        heading:"Choose The Plan",
        desc:"Select any plan that suits you best. our suggestion is buy solo session and first try it. if you like it buy more."
    },{
        image:<StaticImage placeholder="blurred" src={'../../../images/rackRental/2.png'} alt={"Tell Us"}/>,
        heading:"Tell Us",
        desc:"Once you have selected a suitable plan, contact us and we will be happy to  help you proceed ahead."
    },{
        image:<StaticImage placeholder="blurred" src={'../../../images/rackRental/3.png'} alt={"Enjoy Our Server"}/>,
        heading:"Enjoy Our Server",
        desc:"You will receive dedicated and uninterrupted access our racks are hosted in Tier3 Datacenter. and if you face any issue we are just a message away.."
    },
]

export default function HowToUse(){
    const data = useStaticQuery(graphql`
        query MyQuery {
            allImageSharp(filter: {fluid: {originalName: {eq: "map-bg.png"}}}) {
                edges {
                    node {
                        fluid {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }   
    `)
    const imageData = data.allImageSharp.edges[0].node.fluid;
    return <BackgroundImage fluid={imageData} className="how-to-use">
            <div className="heading">
                HOW TO USE CBT PROXY RACK-RENTAL SYSTEM
            </div>
            <div className="elements">
                {ELEMENTS.map((e,i)=><div className="element">
                    <div className="counter">{i+1}</div>
                    <div className="image">{e.image}</div>
                    <div className="content">

                        <div className="heading">{e.heading}</div>
                        <div className="desc">{e.desc}</div>
                    </div>
                    </div>)}
            </div>
    </BackgroundImage>
}
