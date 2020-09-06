
import React, {Component} from 'react';
import fire from '../config/fire';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';


class LoginRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" onClick={this.login} value="Login" />) : 
            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

            let login_register = this.state.loginBtn ?
            (<button class="btn btn-secondary" onClick={() => this.getAction('reg')}>Register</button>) : 
            (<button class="btn btn-primary" onClick={() => this.getAction('login')}>Login</button>);

        return(
            <div class="modal-body">
            <nav class="navbar navbar-dark bg-dark">
               <h2>
               <p class="text-white bg-dark">
                <div id="title">{this.state.formTitle}</div>
                </p>
                </h2>
                </nav>

                <div>
                        <img class="mb-4" src="https://cdn4.vectorstock.com/i/1000x1000/60/28/swoosh-smart-mobile-phone-logo-icon-vector-23676028.jpg" alt="" width="72" height="72" />
                        
                        </div>


                <div className="body">
                    {errorNotification}
                    <form class="form-signin">
                    <div class="input-group mb-3">
  
  <span class="input-group-text" id="basic-addon1">Email</span>
                        <input type="text"  autofocus="" class="form-control" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />
                        </div>

                        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon2">Password</span>
                        <input type="password" autofocus="" class="form-control" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />
                        </div>

                        <div class="input-group mb-3">
                        {submitBtn}
                        </div>
                        
                    </form>
                    <div class="input-group mb-3">
                    {login_register}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default LoginRegister;