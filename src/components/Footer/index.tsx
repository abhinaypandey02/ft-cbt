import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Footer(){
    return <div className="footer">
    <div className="top">
        <div className="about">
            <div className="image">
                <StaticImage width={122} placeholder="blurred" src={'../../images/navIcon.png'} alt={"Logo"}/>
            </div>
            <div className="text">
                Freshtables is Farm to Door fresh vegetables delivery.

                We grow and procure vegetables from local farms and deliver them to urban areas like Home & Retail outlets, Businesses, etc.
            </div>
        </div>
        <div className="contactSocial">
            <div className="contact">
                <div className="heading">Contact</div>
                <div className="phone">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../images/phone.png'} alt={"phone logo"}/>
                    </div>
                    <div className="text">
                        +91 9110514772
                    </div>
                </div>
                <div className="email">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../images/email.png'} alt={"email logo"}/>

                    </div>
                    <div className="text">
                        freshtables.in@gmail.com
                    </div>
                </div>
            </div>
            <div className="social">
                <div className="heading">Social Media:
                </div>
                <div className="icons">
                    <div className="icon"><StaticImage placeholder="blurred" src={'../../images/social/fb.png'} alt={"facebook"}/></div>
                    <div className="icon"><StaticImage placeholder="blurred" src={'../../images/social/linkedin.png'} alt={"linkedin"}/></div>
                    <div className="icon"><StaticImage placeholder="blurred" src={'../../images/social/telegram.png'} alt={"telegram"}/></div>
                    <div className="icon"><StaticImage placeholder="blurred" src={'../../images/social/whatsapp.png'} alt={"whatsapp"}/></div>
                </div>
            </div>
        </div>
    </div>
        <div className="bottom">
            <div className="text">
                Copyright © 2022
            </div>
        </div>
    </div>
}
