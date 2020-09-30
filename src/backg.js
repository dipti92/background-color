import React from 'react';
import './backg.css';

class Background extends React.Component{

constructor(props){
    super(props)
    this.state = {
        selectedcolor:"white"

    };
};

    changecolor=(event) =>{
        console.log( event.target.value)
          
        this.setState({
          
            selectedcolor :event.target.value
        });
     } ;


    
     render =() => {
        return (

        <div style = {{
            backgroundColor:this.state.selectedcolor
        }}
        className="background">
            <div className ="colorbox">
                <h1>Choose a Color </h1>
                <input type= 'color' onChange={this.changecolor}></input>
                <p>{this.state.selectedcolor}</p>
            </div>
        </div>
        )
    }
}

export default Background;