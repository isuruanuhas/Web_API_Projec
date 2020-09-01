import React ,{Component} from  "react"
import Hero from "./Hero";

class Heroes extends Component {

    state = {};
        
    
    render( ) {
return (

    <div class="container">
    <div class="row">
    <div class="col">
        <Hero/>
    </div>
    <div class="col">
        <Hero/>
    </div>
    <div class="col">
        <Hero/>
    </div>
    </div>
     </div>

);
      


 
    


    };  
}
    
export default Heroes;