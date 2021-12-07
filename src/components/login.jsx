import react , {Component, useState} from "react" ;
import ReactDOM, { render } from "react-dom" ;
import {Link} from "react-router-dom" ;
import {withRouter} from "react-router-dom" ;
import axios from "axios" ;


class Login extends Component {

    constructor(props){
        super(props) ;
        this.state = {
            email : "" ,
            password : "" ,
            alertmessage : "none" ,
        }
        console.log("withRoute" , this.props) ;

    }

    onSubmit = (event) => {
        event.preventDefault() ;

        console.log(this.state.password) ;
        const User = {
            password : this.state.password ,
            email : this.state.email ,
        }
        //console.log("Hello") ;
        //console.log(User) ;
        axios({
            'method' : 'POST' ,
            'url' : 'http://localhost:5000/englishguru/login/validate' ,
            'data' : User
        }).then((res) => {
            //console.log(res.data) ;
            //window.location("/covidsaver") ;
            // console.log("withRoute" , this.props) ;

            this.setState({alertmessage : res.data.message}) ;
            console.log("hello aditya login frontend" ,res.data) ;
            if(res.data.success === true){
                window.localStorage.setItem("name" , res.data.name) ;
                this.props.history.push("/englishguru/home") ;
            }
         })
        .catch(err => console.log(err)) ;
    }

    handleChange = (event) => {
        event.target.type === "checkbox"
        ? this.setState({[event.target.name] : event.target.checked})
        : this.setState({[event.target.name] : event.target.value}) ;
    }


    render() {
        return (
            <div>
                <div className="container-fluid" style={{ backgroundSize:"cover" , minHeight:"100vh" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-7 mt-10">
                        {/* {
                            this.state.alertmessage !== "none" &&
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {this.state.alertmessage}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        } */}
                            <h4 className="text-center text-light h2">Login</h4>
                            <form onSubmit={this.onSubmit} className="p-5 h6">
                                <div className="form-group">
                                    <label>E-Mail :</label>
                                    <input placeholder="Enter Your Email" onChange={this.handleChange} type="email" className="form-control" required name="email" value={this.state.email} />
                                </div>
                                <div className="form-group">
                                    <label>Password :</label>
                                    <input placeholder="Enter Your Password" onChange={this.handleChange} type="password" className="form-control" required name="password" value={this.state.password} />
                                </div>
                                <div className="form-group">
                                    <input onSubmit={this.onSubmit} type="submit" className="form-control btn btn-primary" value="Login" />
                                </div>
                                <div style={{display:"flex" , flexDirection:"column"}}>
                                    <p>Don't have an account <a href="/englishguru/signup" style={{color:"red" , textAlign:"center"}}>Signup here</a></p>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter (Login) ;