import React from 'react';
import './styles.scss';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Navigator from "../components/Navigator";
import AboutCBT from "../components/AboutUs/AboutCBT";
import WhyUsAbout from "../components/AboutUs/WhyUs";
import OurStrength from "../components/AboutUs/OurStrength";
import GetInTouch from "../components/GetInTouch";
import BlogsContainer from "../components/BlogsContainer";
import AboutRackRental from "../components/RackRental/AboutRackRental";
import HowToUse from "../components/RackRental/HowToUse";
import Video from "../components/RackRental/Video";
import Pricing from "../components/RackRental/Pricing";
import SimplifiedScheduling from "../components/RackRental/SimplifiedScheduling";
import Topology from "../components/RackRental/Topology";
import WhyChoose from "../components/RackRental/WhyChoose";

export default function RackRental({location}:any){
    return <Layout location={location}>
        <div className="rack-rental">
            <PageHeader heading={"Rack Rental"}/>
            <Navigator pathIDs={['home','rackRental']}/>
            <AboutRackRental/>
            <HowToUse/>
            <Video/>
            <Pricing/>
            <SimplifiedScheduling/>
            <Topology/>
            <WhyChoose/>
            <BlogsContainer/>
        </div>
    </Layout>
}
