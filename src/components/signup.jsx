import react , {Component, useState} from "react" ;
import ReactDOM, { render } from "react-dom" ;
import {Link , withRouter} from "react-router-dom" ;
import axios from "axios" ;
// import image from "./corona.jpg" ;

class Signup extends Component {

    constructor(props){
        super(props) ;
        this.state = {
            name : "" ,
            email : "" ,
            password : "" ,
            alertmessage : "none" ,
        }
    }

    onSubmit = (event) => {
        event.preventDefault() ;
        // let name = this.state.name == "" ? "Name Not Provided" : this.state.name ;
        const User = {
            name : this.state.name ,
            email : this.state.email ,
            password : this.state.password ,
        }
        console.log(User) ;
        axios({
            'method' : 'POST' ,
            'url' : 'http://localhost:5000/englishguru/signup/add' ,
            'data' : User
        }).then((res) => {
            console.log(res.data) ;
            this.setState({alertmessage : res.data.message}) ;
            console.log(this.state.alertmessage) ;
            if(this.state.alertmessage === "none")
                this.props.history.push("/englishguru/login") ;

        })
        .catch(err => console.log(err)) ;

    }

    handleChange = (event) => {
        event.target.type === "checkbox"
        ? this.setState({[event.target.name] : event.target.checked})
        : this.setState({[event.target.name] : event.target.value}) ;
        this.setState({alertmessage : "none"})

    }
    render(){
        return(
                <div className="container-fluid" style={{backgroundSize:"cover" , minHeight:"100vh" }}>
                    <div className="row justify-content-center mt-10">
                        <div className="col-md-7">
                        {/* {
                            this.state.alertmessage !== "none" &&
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {this.state.alertmessage}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        } */}
                            <h4 className="text-center h2">Sign Up</h4>
                            <form onSubmit={this.onSubmit} className=" p-5 h6">
                                {/* user type wale mein radio button lagana hai */}
                                <div className="form-group h6">
                                    <label>Name :</label>
                                    <input placeholder="Enter Your Name" onChange={this.handleChange} className="form-control" required name="name" value={this.state.name} />
                                </div>
                                <div className="form-group h6">
                                    <label>E-Mail :</label>
                                    <input placeholder="Enter Your Email" onChange={this.handleChange} type="email" className="form-control" required name="email" value={this.state.email} />
                                </div>
                                <div className="form-group h6">
                                    <label>Password :</label>
                                    <input placeholder="Enter Password" onChange={this.handleChange} type="password" className="form-control" required name="password" value={this.state.password} />
                                </div>
                                <div className="form-group">
                                    <input onSubmit={this.onSubmit} type="submit" className="form-control btn btn-primary" value="Signup" />
                                </div>
                                <div style={{display:"flex" , flexDirection:"column"}}>
                                    <p>Already have an account <a href="/englishguru/login" style={{color:"red"}}>Login here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        ) ;
    }
}

export default withRouter (Signup) ;