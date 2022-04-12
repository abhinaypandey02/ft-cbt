import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function InfoPMI(){
    return <div className="info-pmi">
        <div className="content">
            <div className="heading">
                Project Management Institute (PMI) Certifications
            </div>
            <div className="desc">
                PMI certifications makes sure that the demands of projects and employers overall the world is fulfilled by you.
                It has been designed in such a way so that it can fulfill the needs of the organizations in this growing world. After attaining PMP certification, the certified is known to handle any project in any industry globally.
            </div>

        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/pmi/pmi-logo.png'} alt={"PMI Logo"}/>
        </div>
    </div>
}
