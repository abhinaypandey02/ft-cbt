import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function AboutCBT() {
    return <div className="aboutCBT">
        <div className="content">
            <div className="heading">About CBTPROXY</div>
            <div className="desc">
                CBTproxy is the medium between Computer Based Test candidates and professional service providers. We
                provide help and excellent services to enabling candidates writing CISCO, PMI, ISACA, (ISC) ² & many
                more examinations and help them pass their examinations in just one attempt.
            </div>
        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/aboutUs/aboutCBT.png'} alt={"CBT"}/>
        </div>
    </div>
}
