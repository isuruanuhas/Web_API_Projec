import React, {Component} from 'react';
import fire from '../../config/Fire';



class View extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>Add New Product</h1>

<form>
               
<div class="form-group">
<label for="ProductID">ProductID</label>
<input type="text" class="form-control" id="ProductID" aria-describedby="texthelp" placeholder="ProductID"></input>
</div>
    

<div class="form-group">
<label for="ProductName">ProductName</label>
<input type="text" class="form-control" id="ProductName" aria-describedby="texthelp" placeholder="ProductName"></input>
</div>
                    
<div class="form-group">
<label for="ProductPrice">ProductPrice</label>
<input type="text" class="form-control" id="ProductPrice" aria-describedby="texthelp" placeholder="ProductPrice"></input>
</div>

<div class="form-group">
<label for="ProductQuantity">ProductQuantity</label>
<input type="text" class="form-control" id="ProductQuantity" aria-describedby="texthelp" placeholder="ProductQuantity"></input>
</div>


<div class="input-group mb-3">
<div class="custom-file">
<input type="file" class="custom-file-input" id="inputGroupFile02"></input>
<label class="custom-file-label" for="inputGroupFile02">Choose file</label>
</div>
<div class="input-group-append">
<span class="input-group-text" id="">Upload</span>   
</div>
</div>

</form>
 <button type="button" class="btn btn-primary">Add Product</button>
    <button onClick={this.logout}>Logout</button>
            </div>  
               
                  
            
        )
    }
}

export default View;