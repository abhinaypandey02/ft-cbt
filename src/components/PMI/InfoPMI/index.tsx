import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function InfoPMI(){
    return <div className="info-pmi">
        <div className="content">
            <div className="heading">
                Freshtables Products
            </div>
            <div className="desc">
                Freshtables is Farm to Door fresh vegetables delivery.  We grow and procure vegetables from local farms and deliver them to urban areas like Home & Retail outlets, Businesses, etc. Our vision is to build a reliable and sophisticated market chain that can help farmers/consumers more easily sell/buy vegetables from the farm.
            </div>

        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/footer-logo.jpeg'} alt={"PMI Logo"}/>
        </div>
    </div>
}
