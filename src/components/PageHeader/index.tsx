import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function PageHeader({heading}:{heading:string}){
    return <div className="page-header">
        <StaticImage placeholder="blurred" className="ellipse" src={'../../images/ellipse.png'} alt={'ellipse'}/>
        {heading}
    </div>
}
