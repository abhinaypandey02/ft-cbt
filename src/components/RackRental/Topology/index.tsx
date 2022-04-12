import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Topology(){
    return <div className="topology">
        <div className="heading">CCIE Security v6 Topology</div>
        <div className="image"> <StaticImage placeholder="blurred" src={'../../../images/rackRental/topology.png'} alt={"Topology"}/> </div>
    </div>
}
