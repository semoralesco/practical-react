import React, { Component } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import FetchRandomUser from './components/FetchRandomUser';
import ImageSlider from './components/ImageSlider';
import MyForm from './components/MyForm';
import ValidationForm from './components/ValidationForm';


class App extends Component{
/*
  constructor(props){
    super(props)

    this.state={
      visible: true,
      whichComponentToShow: "ImageSlider"
    }
  }
*/

state={
  count: 0
}

decrement = () => {
  this.setState({
      count: this.state.count - 1
  })
}

increment = () => {
  this.setState({
      count: this.state.count + 1
  })
}

  render(){
    /*
    if(this.state.whichComponentToShow === "ImageSlider"){
      return(
        <div className="App">
          <ImageSlider/>
          <button onClick={() => {this.setState({whichComponentToShow: "Counter"})}}>Show counter</button>
        </div>
      )
    }
    else if(this.state.whichComponentToShow === "Counter"){
      return(
        <div className="App"><Counter initialCount={0}/></div>
      )
    }
    return null;
    */
   /*
    const buttonText = this.state.visible ? "Hide" : "Show";
    const slider = this.state.visible ? <ImageSlider /> : <div><Counter initialCount={0}/></div>
    return (
      <div className="App">
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter initialCount={0}/>
        </div>
        <button onClick={() => {this.setState({visible: !this.state.visible})}}>{buttonText}</button>
      </div>
    );
    */
      
    return(
      <div className="App">
        <Counter
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
        />
        <Counter
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
        />
      </div>
    )
  }
}

export default App;
