import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import Form from "../Form";

export default function GetInTouch(){
    return <div className="getInTouch">
        <div className="image">
            <StaticImage placeholder="blurred" imgClassName={"innerImg"} className="outerImg" src={"../../images/getInTouch/rocket.png"} alt={"rocket"}/>
        </div>
        <div className="form-container">
            <div className="heading">Get In Touch</div>
            <div className="desc">Drop Us a Line and We will Get in Touch with you ASAP</div>
            <div className="form-wrapper">

                <Form mini={false}/>
            </div>
        </div>
    </div>
}
