import React, {Component} from 'react';
import fire from '../src/config/fire';
import LoginRegister from '../src/components/LoginRegister';
import View from './components/mainview/view';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<View />) : (<LoginRegister />)}
        </div>
    );
  }
}

export default App;