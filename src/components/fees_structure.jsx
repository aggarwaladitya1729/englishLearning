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
                <div className="text-center middle" style={{paddingTop: 70}}>
                    <h2>Fees Structure</h2>
                    <table className="table table-dark table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Fees</th>
                            <th scope="col">Time Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Basics Of English</td>
                            <td>Rs 5,000</td>
                            <td>1 Month</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>C, C++</td>
                            <td>Rs 2,000</td>
                            <td>1 Month</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Java</td>
                            <td>Rs 1,500</td>
                            <td>25-30 Days</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ContactUs ;
