import react , {Component, useState} from "react" ;
import ReactDOM, { render } from "react-dom" ;
import {Link , withRouter} from "react-router-dom" ;
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios" ;

import Navbar from "./navbar" ;

class Registration extends Component {

    constructor(props){
        super(props) ;
        this.state = {
            firstname : "" ,
            lastname : "" ,
            phone : 0 ,
            dateOfBirth : new Date(),
            email : "" ,
            gender : "" ,
            address : "" ,
            city : "" ,
        }
    }

    onSubmit = (event) => {
        event.preventDefault() ;
        //console.log(this.state.usertype) ;
        //console.log("updated health record") ;
        const registrationInfo = {
            firstname : this.state.firstname ,
            lastname : this.state.lastname ,
            phone : this.state.phone ,
            dateOfBirth : this.state.dateOfBirth ,
            email : this.state.email ,
            gender : this.state.gender ,
            address : this.state.address ,
            city : this.state.city ,
        }
        console.log("Hello there in registraion frontend") ;
        console.log(registrationInfo) ;
        axios({
            'method' : 'POST' ,
            'url' : 'http://localhost:5000/englishguru/register/add' ,
            'data' : registrationInfo ,
        }).then((res) => {
            console.log(res.data) ;
            this.props.history.push("/englishguru/home") ;  
            //window.location("/") ;

        })
        .catch(err => console.log(err)) ;
        //this.props.history.push("/englishguru/admin/home") ;  
    }

    handleDateChange = (date) => {
        this.setState({  
            dateOfBirth: date
        })  
    }  
    handleChange = (event) => {
        event.target.type === "checkbox"
        ? this.setState({[event.target.name] : event.target.checked})
        : this.setState({[event.target.name] : event.target.value}) ;

        //console.log(event.target.name , event.target.checked) ;
    }
    // Usertype*, name* , regno*, staffid*, batch*, dept* ,admin*, age* , email*, contact* ,branch* ,gender* , password
    render(){
        return(
            <div>
                <Navbar/>
                <div style={{backgroundSize:"cover" , minHeight:"100vh" , paddingTop:"100px"}}>
                    <div className="container" >
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-dark">
                                <h4 className="text-center">Registration Form</h4>
                                <form onSubmit={this.onSubmit} className="p-5">
                                    {/* user type wale mein radio button lagana hai */}
                                    <div className="form-group">
                                        <label>First Name :</label>
                                        <input placeholder="Enter Your First Name" onChange={this.handleChange} className="form-control" required name="firstname" value={this.state.firstname} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name :</label>
                                        <input placeholder="Enter Your Last Name" onChange={this.handleChange} className="form-control" required name="lastname" value={this.state.lastname} />
                                    </div>
                                    <div className="form-group text-dark">
                                        <label>DOB :</label>
                                        <DatePicker  
                                            selected={ this.state.dateOfBirth }  
                                            onChange={ this.handleDateChange }  
                                            name="dateOfBirth"  
                                            dateFormat="dd/MM/yyyy"  
                                        />  
                                    </div>
                                    <div className="form-group">
                                        <label>E-Mail :</label>
                                        <input placeholder="Enter Your Email" onChange={this.handleChange} type="email" className="form-control" required name="email" value={this.state.email} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone No. :</label>
                                        <input placeholder="Enter Your Phone Number" onChange={this.handleChange} type="tel" pattern="[0-9]{10}" className="form-control" required name="phone" value={this.state.phone} />
                                    </div>
                                    <p>Gender :</p>
                                    <div className="form-check form-check-inline">
                                        <label>
                                            <input onChange={this.handleChange} type="radio" className="form-check-input" name="gender" value="male" />
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label>
                                            <input onChange={this.handleChange} type="radio" className="form-check-input" name="gender" value="female" />
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>Address :</label>
                                        <input placeholder="Enter Your Address" onChange={this.handleChange} className="form-control" required name="address" value={this.state.address} />
                                    </div>
                                    <div className="form-group">
                                        <label>City :</label>
                                        <input placeholder="Enter Your City" onChange={this.handleChange} className="form-control" required name="city" value={this.state.city} />
                                    </div>
                                    
                                    <div className="form-group" >
                                        <input onSubmit={this.onSubmit} type="submit" className="form-control btn btn-outline-primary" style={{marginTop : 10 ,marginBottom: 10}} value="Submit" />
                                        <input onSubmit={this.onSubmit} type="reset" className="form-control btn btn-outline-danger" value="Reset" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) ;
    }
}

export default withRouter (Registration) ;