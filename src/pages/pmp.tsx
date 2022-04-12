import React from 'react';
import './styles.scss';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Navigator from "../components/Navigator";
import GetInTouch from "../components/GetInTouch";
import BlogsContainer from "../components/BlogsContainer";
import PMPInfo from "../components/PMP/PMPInfo";
import Video from "../components/RackRental/Video";
import FAQ from "../components/PMP/FAQ";
import RelatedCourse from "../components/PMP/RelatedCourse";

export default function PMI({location}:{location:any}){
    return <Layout location={location}>
        <div className="pmp">
            <PageHeader heading={"Project Management Professional (PMP) Proxy Exam"}/>
            <Navigator pathIDs={['home','certifications','pmi','pms']}/>
            <PMPInfo/>
            <Video/>
            <FAQ/>
            <RelatedCourse/>
            <BlogsContainer/>
        </div>
    </Layout>
}
