import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import './styles.scss';
import {Link} from "gatsby";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const navLinks=[
    {
        name:"Home",
        id:"home",
        route:"/"

    },
    {
        name:"About Us",
        id:"aboutUs",
        route:"/about-us"
    },
    // {
    //     name:"Rack Rental",
    //     id:"rackRental",
    //     route:"/rack-rental"
    // },
    // {
    //     name:"Certifications",
    //     id:"certifications",
    //     route:"/certifications"
    // },
    {
        name:"Careers",
        id:"contactUs",
        route:"/contact-us"
    }
]

const PHONE="+1 (415) 830-6004"
const EMAIL="info@cbtproxy.com"
export default function NavigationBar({location}:any){
    return <div className="navbar">
        <Navbar className="navbar-local" bg="white" expand="lg">
            <div className="cont">
                <Navbar.Brand as={Link} to="/" className={'icon'}><StaticImage placeholder="blurred" src={'../../images/navIcon.png'} alt={"Company logo"}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="menu-collapse">
                    <Nav className="menu">
                        {navLinks.map(item=><Nav.Link as={Link} to={item.route} className={"menuItem "+(location.pathname===item.route?"menuItem--active":"")}>
                            {item.name}
                        </Nav.Link>)}
                        {/*// <div className="contact">*/}
                        {/*    <div className="contact-cont">*/}

                        {/*        <div className="contactItem">*/}
                        {/*            <div className="logo">*/}
                        {/*                <StaticImage placeholder="blurred" src={'../../images/phone.png'} alt={"phone logo"}/>*/}
                        {/*            </div>*/}
                        {/*            <div className="text">{PHONE}</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="contact-cont">*/}

                        {/*    <div className="contactItem">*/}
                        {/*        <div className="logo">*/}
                        {/*            <StaticImage placeholder="blurred" src={'../../images/email.png'} alt={"email logo"}/>*/}
                        {/*        </div>*/}
                        {/*        <div className="text">{EMAIL}</div>*/}
                        {/*    </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    </div>
}
