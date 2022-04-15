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
                    <div  className="icon"><a href={"https://www.facebook.com/freshtables.in"}><StaticImage width={20} placeholder="blurred" src={'../../images/social/fb.png'} alt={"facebook"}/></a></div>
                    <div className="icon"><a href={"https://www.linkedin.com/company/freshtables-in"}><StaticImage placeholder="blurred" src={'../../images/social/linkedin.png'} alt={"linkedin"}/></a></div>
                    <div className="icon"><a href={"https://twitter.com/freshtablesin"}><StaticImage width={20} placeholder="blurred" src={'../../images/social/twitter.png'} alt={"twitter"}/></a ></div>
                    <div className="icon"><a href={"https://wa.me/+919110514772"}><StaticImage placeholder="blurred" src={'../../images/social/whatsapp.png'} alt={"whatsapp"}/></a></div>
                    <div className="icon"><a href={"https://www.instagram.com/freshtables.in/?hl=en"}><StaticImage width={20} placeholder="blurred" src={'../../images/social/insta.png'} alt={"instagram"}/></a></div>
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
