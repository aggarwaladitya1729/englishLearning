import React, { Component } from 'react' ;
import ReactDOM from "react-dom" ;
import {Link} from "react-router-dom" ;
import "./styling.css" ;
import axios from "axios" ;
import Navbar from "./navbar" ;

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="text-center" style={{paddingTop: 70}}>
                    <h2>Passion English</h2>
                    <p>The Name You Can Trust</p>
                    <h3>Visit Us At</h3>
                    <p>For English Speaking</p>
                    <p>Luxmi Infotech and Education Point</p>
                    <p>Closes at: 8 PM</p>
                    <p>Government School Road, Jagadhri</p>
                    <h3>Reach Us</h3>
                    <div style={{display: "flex", justifyContent: 'space-around'}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p>Mobile Number: 9820xx8934</p>
                            <p>Mobile Number: 9904xx9839</p>
                            
                        </div>
                        <div className="vertical_line">
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <a href="youtube">Youtube</a>
                            <a href="Facebook">Facebook</a>
                            <a href="Instagram">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs ;
