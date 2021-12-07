import React, { Component } from 'react' ;
import ReactDOM from "react-dom" ;
import {Link} from "react-router-dom" ;
import "./styling.css" ;
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'  
import axios from "axios" ;
import Navbar from "./navbar" ;

class Home extends Component {
    render() {
        return (
            <div >
                <Navbar/>
                <div>
					<h2 className="text-center" style={{paddingTop: 70}}>Passion English</h2>
					<h4 className="text-center border border-primary">The Name You Can Trust</h4>

					<div className="about_owner">
						<img src="" alt="Owner Pic" />
						<div className="owner_description">
							Write something about the owner here
						</div>
					</div>
					<div className="c-wrapper">
						<Carousel>  
							<Carousel.Item style={{'height':"500px"}} >  
								<img style={{'height':"500px"}} className="d-block w-100" src="https://images.pexels.com/photos/7750031/pexels-photo-7750031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  />  
								<Carousel.Caption><h3>First Demo </h3></Carousel.Caption>  
							</Carousel.Item  >  
							<Carousel.Item style={{'height':"500px"}}>  
								<img style={{'height':"500px"}} className="d-block w-100" src="https://images.pexels.com/photos/9046724/pexels-photo-9046724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"    />  
								<Carousel.Caption> <h3>Second Demo</h3> </Carousel.Caption>  
							</Carousel.Item>  
							<Carousel.Item style={{'height':"500px"}}>  
								<img style={{'height':"500px"}} className="d-block w-100" src="https://images.pexels.com/photos/6827794/pexels-photo-6827794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />  
								<Carousel.Caption> <h3>Third Demo</h3> </Carousel.Caption>  
							</Carousel.Item>  
						</Carousel>  
					</div>
					<h3 className="text-center pt-5">Why We</h3>
					<div className="why_we">
						<div className="card" style={{width: 250}}>
							<img className="card-img-top" src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">Title</h5>
								<p className="card-text">More Explanation</p>
							</div>
						</div>
						<div className="card" style={{width: 250}}>
							<img className="card-img-top" src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">Title</h5>
								<p className="card-text">More Explanation</p>
							</div>
						</div>
						<div className="card" style={{width: 250}}>
							<img className="card-img-top" src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">Title</h5>
								<p className="card-text">More Explanation</p>
							</div>
						</div>
					</div>
					<div className="why_we">
						<div className="card" style={{width: 250}}>
							<img className="card-img-top" src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">Title</h5>
								<p className="card-text">More Explanation</p>
							</div>
						</div>
						<div className="card" style={{width: 250}}>
							<img className="card-img-top" src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">Title</h5>
								<p className="card-text">More Explanation</p>
							</div>
						</div>
						<div className="card" style={{width: 250}}>
							<img className="card-img-top" src="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">Title</h5>
								<p className="card-text">More Explanation</p>
							</div>
						</div>
					</div>
					<h3 className="text-center pt-5">Other Services</h3>
					<div className="other_services">
						<div className="other_services_left">
							<h4>Basic Computer Classes</h4>
							<ul>
								<li>HTML, CSS</li>
								<li>Web Designing</li>
								<li>MS Word, MS Excel</li>
								<li>C, C++, Java</li>
							</ul>
						</div>
						<div className="other_services_right">
							<h4>Tuition Classes</h4>
							<ul>
								<li>Class X<sup>th</sup></li>
								<ul>
									All Subjects
								</ul>

								<li>Class XI<sup>th</sup> XII<sup>th</sup></li>
								<ul>
									Maths, Accounts, Physics
								</ul>
							</ul>
						</div>
					</div>
                </div>
            </div>
        )
    }
}

export default Home ;
