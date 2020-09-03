import React, {Component} from 'react';
import fire from '../config/Fire';
import '../App.css';


class LoginRegister extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email : '',
            password : '',
            fireErrors : '',
            formTitle : "Login",
            loginBtn : true
        };
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

render()
{

    let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;
    return(
        <div className="form_block">
            <div id="title">Login</div>
            <div className="body">
            {errorNotification}
                <form>
                    <input type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name='email' />

                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name='password' />

                    <input type="submit" className="LoginBtn" onClick={this.login} value="Enter" />
                </form>
            </div> 
                    
        </div> 
    );
}


}

export default LoginRegister;