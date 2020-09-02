import React ,{Component} from  "react"
import Hero from "./Hero";

class Heroes extends Component {

    state = {};
        
    
    render( ) {
return (


 
   





    <div className="fixed-top">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-white h4">Collapsed content</h5>
        <span className="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  

  






    <div className="container">
<div className="row">
<div className="col">
    <Hero/>
</div>
<div className="col">
    <Hero/>
</div>
<div className="col">
    <Hero/>
</div>

</div>
 </div>



<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"/>
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  //</div></div>







    );
        }
    }
    
export default Heroes;