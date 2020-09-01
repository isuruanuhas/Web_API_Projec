import React, {Component} from 'react';
import './App.css';
import fire from './config/Fire';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';

import "bootstrap/dist/css/bootstrap.css"  //Dinuka's update
import ItemOrderView from './components/ItemOrderView';   //Dinuka's update
import ReactDOM from 'react-dom';  //Dinuka's update

ReactDOM.render(<ItemOrderView/>, document.getElementById("root"));   //Dinuka's update

class App extends Component
{

  constructor()
  {
    
    super();
    this.state = {
      user :  null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener()
  {
    fire.auth().onAuthStateChanged((user) =>
    {
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    }); 
  }

  render()
  {
    return(
      <div>
        {this.state.user? (<Home />) : (<LoginRegister />)}
       
        </div>
    );
  }

}

export default App;
