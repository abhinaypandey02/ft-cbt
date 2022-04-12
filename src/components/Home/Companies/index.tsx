import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Companies(){
    return <div className="companies">
        <StaticImage placeholder="blurred"  src={'../../../images/companies/1.png'} alt={"cisco"}/>
        <StaticImage placeholder="blurred" src={'../../../images/companies/2.png'} alt={"isaca"}/>
        <StaticImage placeholder="blurred" src={'../../../images/companies/3.png'} alt={"aws"}/>
        <StaticImage placeholder="blurred" src={'../../../images/companies/4.png'} alt={"pmi"}/>
        <StaticImage placeholder="blurred" src={'../../../images/companies/5.png'} alt={"comptia"}/>
    </div>
}
