import React from 'react';
import './styles.scss';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Navigator from "../components/Navigator";
import GetInTouch from "../components/GetInTouch";
import BlogsContainer from "../components/BlogsContainer";
import InfoPMI from "../components/PMI/InfoPMI";
import TypesPMI from "../components/PMI/Types";

export default function PMI({location}:{location:any}){
    return <Layout location={location}>
        <div className="pmi">
            <PageHeader heading={"Freshtables Products"}/>
            <Navigator pathIDs={['home','pmi']}/>
            <InfoPMI/>
            <TypesPMI/>
            <GetInTouch/>
            <BlogsContainer/>
        </div>
    </Layout>
}
