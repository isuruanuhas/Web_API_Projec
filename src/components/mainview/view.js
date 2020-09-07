import React, {Component} from 'react';
import fire from '../../config/Fire';
import 'bootstrap/dist/css/bootstrap.css';



class View extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(


                

<form>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


<div class="row">
  <div class="column" >


<div class="container">

<h3>Add New Product</h3>

<div class="form-group">
<label for="ProductID">Product ID</label>
<input type="text" className="form-control" id="ProductID" aria-describedby="texthelp" placeholder="ProductID"></input>
</div>
    

<div class="form-group">
<label for="ProductName">Product Name</label>
<input type="text" className="form-control" id="ProductName" aria-describedby="texthelp" placeholder="ProductName"></input>
</div>
                    
<div className="form-group">
<label for="ProductPrice">Product Price</label>
<input type="text" className="form-control" id="ProductPrice" aria-describedby="texthelp" placeholder="ProductPrice"></input>
</div>

<div className="form-group">
<label for="ProductQuantity">Product Quantity</label>
<input type="text" className="form-control" id="ProductQuantity" aria-describedby="texthelp" placeholder="ProductQuantity"></input>
</div>


<div className="input-group mb-3">
<div className="custom-file">
<input type="file" class="custom-file-input" id="inputGroupFile02"></input>
<label className="custom-file-label" for="inputGroupFile02">Choose file</label>
</div>
<div className="input-group-append" />
<span classn    ="input-group-text" id="" />
</div>


<button type="button" className="btn btn-primary">Add Product</button> &nbsp;
    <button type="button" className="btn btn-primary" onClick={this.logout}>Logout</button>
</div>
 </div>
<div class="column">
  


<div class="container">

<h3>Update Product</h3>


<div class="form-group">
<label for="ProductID">Product ID</label>
<input type="text" className="form-control" id="ProductID" aria-describedby="texthelp" placeholder="ProductID"></input>
</div>
    

<div class="form-group">
<label for="ProductName">Product Name</label>
<input type="text" className="form-control" id="ProductName" aria-describedby="texthelp" placeholder="ProductName"></input>
</div>
                    
<div className="form-group">
<label for="ProductPrice">Product Price</label>
<input type="text" className="form-control" id="ProductPrice" aria-describedby="texthelp" placeholder="ProductPrice"></input>
</div>

<div className="form-group">
<label for="ProductQuantity">Product Quantity</label>
<input type="text" className="form-control" id="ProductQuantity" aria-describedby="texthelp" placeholder="ProductQuantity"></input>
</div>


<div className="input-group mb-3">
<div className="custom-file">
<input type="file" class="custom-file-input" id="inputGroupFile02"></input>
<label className="custom-file-label" for="inputGroupFile02">Choose file</label>
</div>
<div className="input-group-append" />
<span classn    ="input-group-text" id="" />
</div>


<button type="button" className="btn btn-primary">Update Product</button> &nbsp;
    <button type="button" className="btn btn-primary" onClick={this.logout}>Logout</button>
</div>




  </div>
</div>








</form>










 
               
                  
            
        )
    }
}

export default View;