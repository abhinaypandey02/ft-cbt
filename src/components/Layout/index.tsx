import React from "react";
import NavigationBar from "../NavigationBar";
import './styles.scss';
import Footer from "../Footer";
export default function Layout({children,location}:any){
    return <div className="layout">
        <NavigationBar location={location}/>
        {children}
        <Footer/>
    </div>
}
