
import React , { Component } from 'react';
import {BrowserRouter as Router , Route, withRouter} from "react-router-dom" ;
import "bootstrap/dist/css/bootstrap.min.css" ;

class Navbar extends Component{
	constructor(props){
		super(props) ;
		this.state = {
			name : "" ,
		}
	}

	componentDidMount = () => {
		this.setState({
			name: window.localStorage.getItem("name") ,
		})
	}

	onSubmit = (event) => {
		event.preventDefault() ;
		localStorage.clear() ;
		window.location.href = "/englishguru/login" ;
	}

	render(){
		return (
            <div>
            	<nav className="navbar navbar-expand-lg navbar-light navAdi ">
					<a style={{marginRight: 50}} className="navbar-brand h6" href="/englishguru/home">English Guru</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse h6" id="navbarSupportedContent" style={{display: "flex", justifyContent: "space-between"}}>
						<ul className="navbar-nav ">
                            <li className="nav-item nav-hover nav-font" style={{marginRight: 50}}>
								<a className="nav-link text-dark" href="/englishguru/home">Home</a>
							</li>
                            <li className="nav-item dropdown " style={{marginRight: 50}}>
                                <a className="nav-link dropdown-toggle text-dark " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
                                <div className="dropdown-menu" style={{backgroundColor: "#ffe6e6"}} aria-labelledby="navbarDropdown">
                                	<a className="dropdown-item" href="/englishguru/about_us/registration_form">Registration Form</a>
                                <div className="dropdown-divider"></div>
                                	<a className="dropdown-item" href="/englishguru/about_us/fees_structure">Fees Structure</a>
                                </div>
                            </li>
                            <li className="nav-item nav-hover nav-font" style={{marginRight: 50}}>
								<a className="nav-link text-dark" href="/englishguru/contact_us">Contact Us</a>
							</li>
						</ul>
						<div className="d-flex " style={{alignItems: "baseline"}}>
							<p style={{marginRight: 10}}>Hi, {this.state.name}</p>
							<form style={{marginRight: 50}} className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
							<button style={{marginRight:"20px"}} className="btn btn-outline-dark my-2 my-sm-0" type="submit">Logout</button>
						</form>
						</div>
						
					</div>
				</nav>
            </div>
		);
	}
}

export default withRouter (Navbar) ;