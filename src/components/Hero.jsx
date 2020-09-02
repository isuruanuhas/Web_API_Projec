import React ,{Component} from  "react"

class Hero extends Component {

    state = { heroId: -189 };
    
    render() {
return (

<div className="card" style= {{width: "18rem"}}>
  <img src={this.props.av} className="card-img-top" alt="..."/>
  <img src="https://sc02.alicdn.com/kf/Haa568d593dbc4d6eb612e438cde2ef20y.jpg" className="card-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">One Plus</h5>
    <p className="card-text">One Plus 7T with Gobal version  </p>
    <div>price</div>
   
    <button className="btn btn-info" onClick={()=> {this.likeAvenger(1)}}  >
        Like{""} 
        <div>
            <button>
            new ori9ce
            </button>
           </div>
       
        
        <span className="badge badge-light">{this.state.likecount} </span>
    </button>
  </div> 
</div>


);
    }
    isHero(){
        return this.state.heroId < 0 ? "Not an avenger" :"Not happy avenger";
    }
    likeAvenger =(likecounter)=>{
this.setState({likecount: this.state.likecount + likecounter});
    };
    }

export default Hero;
