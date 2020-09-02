import React ,{Component} from  "react"

class ItemOrderView extends Component {

    state = { heroId: -189 };
    
    render() {
return (

<div className="card" style= {{width: "18rem"}}>
  <img src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">One Plus</h5>
    <p className="card-text">One Plus 7T with Gobal version  </p>
   
    <button className="btn btn-info" onClick={()=> {this.likeAvenger(1)}} >
        Like{""}
        <span className="badge badge-light">{this.state.likecount} </span>
    </button>
  </div> 
</div>


);
    }
    isItemOrderView(){
        return this.state.heroId < 0 ? "Not an avenger" :"Not happy avenger";
    }
    likeAvenger =(likecounter)=>{
this.setState({likecount: this.state.likecount + likecounter});
    };
    }

export default ItemOrderView;
