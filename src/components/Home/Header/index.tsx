import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Header(){
    return <div className="home-header">
        <div className="content">
            {/*<StaticImage placeholder="blurred" className={"ellipse"} src={'../../../images/ellipse.png'} alt={'Ellipse'}/>*/}

            <div className="heading">
                Modernizing the fresh produce supply chain from farm to door.
            </div>
            <div className="text">
                Delivering vegetables & farm based products on-demand to minimize the wastage of fresh produce.
                <br/>
                <br/>
                Vegetables | Fruits | Grains | Milk & Eggs

            </div>
            <div className="buttons">
                <a href="https://play.google.com/store/apps/details?id=com.freshtablesshop.app"><div className="primary">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/headerButtonPlay.png'} alt={"Header Button Play"}/>
                    </div>
                    <div className="text">
                        Retail
                    </div>
                </div></a>
                <a href="https://play.google.com/store/apps/details?id=com.freshtablesv2"><div className="primary">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/headerButtonPlay.png'} alt={"Header Button Play"}/>
                    </div>
                    <div className="text">
                        Business
                    </div>
                </div></a>
            </div>
            <div className="text">
                Home | Business | Franchise | Healthy
            </div>
        </div>
        <div className="image">
            <StaticImage width={549} placeholder="blurred" src={'../../../images/homeHeaderImage.png'} alt={"Header vector"}/>
        </div>
    </div>
}
