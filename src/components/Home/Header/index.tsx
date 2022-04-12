import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Header(){
    return <div className="home-header">
        <div className="content">
            <StaticImage placeholder="blurred" className={"ellipse"} src={'../../../images/ellipse.png'} alt={'Ellipse'}/>

            <div className="heading">
                Buy farm fresh vegetables online on freshtables
            </div>
            <div className="text">
                Freshtables procures vegetables from local farmers & supplies to urban area communities, retail shop, restaurants, businesses, etc
                <br/>
                <br/>
                Home | Business | Franchise | Healthy
            </div>
            <div className="buttons">
                <div className="primary">
                    <div className="text">
                        Order Now
                    </div>
                </div>
                <div className="secondary">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/headerButtonPlay.png'} alt={"Header Button Play"}/>
                    </div>
                    <div className="text">
                        Download App
                    </div>
                </div>
            </div>
        </div>
        <div className="image">
            <StaticImage width={549} placeholder="blurred" src={'../../../images/homeHeaderImage.png'} alt={"Header vector"}/>
        </div>
    </div>
}
