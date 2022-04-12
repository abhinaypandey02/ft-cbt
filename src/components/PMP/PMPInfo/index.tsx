import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function PMPInfo(){
    return <div className="pmp-info">
        <div className="heading">
            PMI PMP Online Exam From Home & Pay After You Pass
        </div>
        <div className="desc">
            <div className="image">
                <StaticImage placeholder="blurred" src={'../../../images/pmp/logo.png'} alt={"pmp logo"}/>
            </div>
            <div className="heading-mob">
                PMI PMP Online Exam From Home & Pay After You Pass
            </div>
            <div className="text">
                PMP certification is ranked as one of the most prestigious project management certifications globally. As a PMP certificate holder, you are looked upon as a professional with mastery over the three core areas of project management: predictive, agile, and hybrid. It also shows you possess business skills to achieve goals and enhance your organization’s market value worldwide. You can consider getting this certification if you are an onsite or off-site coordinator, quality assistant manager, PMO office representative, program manager, and manager. It will help you outshine your competitors and give you an unprecedented salary hike.
                <br/>
                <br/>
                The domains covered in this online exam are people (soft skills to manage a team), process (technical aspects of project management), and business environment (executing projects in compliance with the organizational strategy). To master concepts in each domain, it is recommended to go for a proxy exam than brain dumps. Dumps might contain incorrect and outdated questions and answers. You won’t be able to clear the PMP exam and lose exam fees also. Specific certification requirements need to be met to get it, such as 36 months experience in leading projects and 35 hours of project management training or CAPM certification if you hold a four-year degree. And 60 months experience in leading projects and 35 hours of project management training or CAPM certification if you have a high school diploma. To maintain your certificate, you must earn 60 professional development units (PDUs) every three years.
            </div>

        </div>
    </div>
}
