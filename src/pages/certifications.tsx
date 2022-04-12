import React from 'react';
import Layout from "../components/Layout";
import GetInTouch from "../components/GetInTouch";
import BlogsContainer from "../components/BlogsContainer";
import PageHeader from "../components/PageHeader";
import Navigator from "../components/Navigator";
import InfoCertifications from "../components/Certifications/InfoCertifications";
import ChooseCertification from "../components/Certifications/ChooseCertification";

export default function Certifications({location}:{location:any}){
    return <Layout location={location}>
        <div className="certifications">
            <PageHeader heading={"Certifications"}/>
            <Navigator pathIDs={['home','certifications']}/>
            <InfoCertifications/>
            <ChooseCertification/>
            <GetInTouch/>
            <BlogsContainer/>
        </div>
    </Layout>


}
