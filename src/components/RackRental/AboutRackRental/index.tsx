import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import Form from "../../Form";

export default function AboutRackRental(){
    return <div className="about-rack-rental">
        <div className="content">
            <div className="heading">
                CCIE Security v6 Rack-Rental
            </div>
            <div className="desc">
                CBTProxy began providing rack rental services in 2015 and now serves clients from all over the world. Since then, CBTProxy has intended to assist individuals who aspire to succeed in CCIE Security Lab examinations and optimize money, time, and other vital resources. CBTProxy has an influential position among top listers in the same domain.
                <br/>
                <br/>
                When it comes to renting our rack rental services, we’ve made it even simpler. All you have to do is to get in touch with us, and we’ll make it happen as soon as possible. CBTProxy CCIE Security v6 rack rentals use the hardware specification publicly stated to be used in the actual CCIE Security v6 Lab Exam. The physical topology of the racks are cabled to meet the specification of CCIE Lab Exam.
                <br/>
                <br/>
                Apart from Rack Reantal Services we know you need updated ccie security v6 workbook aka ccie securtiy v6 lab solution guide as well as ccie security lab videos as well so you can download those for free from here.
            </div>
        </div>
        <div className="form-container">
            <div className="heading">
                <div className="image">
                    <StaticImage placeholder="blurred" src={'../../../images/rackRental/logo.png'} alt={"Rack Rental Logo"}/>
                </div>
                <div className="text">
                    Drop Us a Line
                </div>
            </div>
            <div className="form-wrapper">
                <Form mini={true}/>
            </div>
        </div>
    </div>
}
