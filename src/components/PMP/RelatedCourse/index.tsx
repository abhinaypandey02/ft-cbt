import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function RelatedCourse(){
    return <div className="related-course">
        <div className="heading">
            Related Courses
        </div>
        <div className="elements">
        <StaticImage placeholder="blurred" src={'../../../images/pmp/relatedCourse/1.png'} alt={"cism"}/>
        <StaticImage placeholder="blurred" src={'../../../images/pmp/relatedCourse/2.png'} alt={"ccna"}/>
        <StaticImage placeholder="blurred" src={'../../../images/pmp/relatedCourse/3.png'} alt={"aws"}/>
        <StaticImage placeholder="blurred" src={'../../../images/pmp/relatedCourse/4.png'} alt={"pmp"}/>
        <StaticImage placeholder="blurred" src={'../../../images/pmp/relatedCourse/5.png'} alt={"comptia"}/>
        </div>
    </div>
}
