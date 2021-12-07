import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {BrowserRouter as Router , Route , Redirect} from "react-router-dom" ;
import "bootstrap/dist/css/bootstrap.min.css" ;

import Login from "./components/login" ;
import Signup from "./components/signup" ;
import Home from "./components/home" ;
import ContactUs from "./components/contact_us" ;
import Registration from "./components/registration" ;
import FeesStructure from "./components/fees_structure" ;


class App extends Component {

	constructor(props){
		super(props) ;
	}

  	render() {
		return (
			<Router>
				{/* <Route path="/englishguru"> <Navbar/> </Route> */}
				<Route exact path="/"> <Redirect to="/englishguru/login" /> </Route>
				<Route exact path="/englishguru/login"> <Login/> </Route>
				<Route exact path="/englishguru/signup"> <Signup/> </Route>

				<Route exact path="/englishguru/home"> <Home/> </Route>
				<Route exact path="/englishguru/contact_us"> <ContactUs/> </Route>
				<Route exact path="/englishguru/about_us/registration_form"> <Registration/> </Route>
				<Route exact path="/englishguru/about_us/fees_structure"> <FeesStructure/> </Route>
			</Router>
		);
  	}
}

export default (App) ;
