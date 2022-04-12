import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Info(){
    return <div className="info">
        <div className="content">
            <div className="heading">
                Contact Us
            </div>
            <div className="desc">CBT Proxy has been helping people since 2016 and has served national and international clients with complete satisfaction. We’d like to take a moment and say thank you for selecting us―the prominent name in the industry. If you have any doubts about training, certifications, or rack-rental systems, please fill out the form, and our team of experts will catch you as soon as time permits us.</div>
            <div className="contact-info-container">
                <div className="contact-info">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/email.png'} alt={"email"}/>
                    </div>
                    <div className="title">
                        Email:&nbsp;
                    </div>
                    <div className="text">
                        info@cbtproxy.com
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
                        +1 (415) 830-6004
                    </div>
                </div>
            </div>
        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/contactUs/info.png'} alt={"Info"}/>
        </div>
    </div>
}
