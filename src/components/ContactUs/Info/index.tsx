import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Info(){
    return <div className="info">
        <div className="content">
            <div className="heading">
                Contact Us
            </div>
            <div className="desc">Address: 5-113 Appojiguda Chilkur Moinabad(M) K V Rangareddy Dist Hyderabad 501504</div>
            <div className="contact-info-container">
                <div className="contact-info">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/email.png'} alt={"email"}/>
                    </div>
                    <div className="title">
                        Email:&nbsp;
                    </div>
                    <div className="text">
                        freshtables.in@gmail.com
                    </div>
                </div>
                <div className="contact-info">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/phone.png'} alt={"phone"}/>
                    </div>
                    <div className="title">
                        Phone:&nbsp;
                    </div>
                    <div className="text">
                        +91 9110514772
                    </div>
                </div>
            </div>
        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/contactUs/info.png'} alt={"Info"}/>
        </div>
    </div>
}
