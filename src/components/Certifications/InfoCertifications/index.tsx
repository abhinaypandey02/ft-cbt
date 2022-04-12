import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function InfoCertifications(){
    return <div className="info-certifications">
        <div className="content">
            <div className="heading">
                IT Certifications We Provide
            </div>
            <div className="desc">
                IT certifications validate both skills and knowledge. Whether you’re new to IT and want to get your foot in the door, or a seasoned pro who wants to quantify your expertise, certifications are an excellent way to achieve your goals. We at CBTproxy drive you to your target certification without any turns and twists. We try to help individual to succeed in CISCO, PMI, ISACA, (ISC) ² & many more examinations and help them to save their money, time and other valuable resources.
            </div>
        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/certifications/info.png'} alt={"Certifications Info"}/>
        </div>
    </div>
}
