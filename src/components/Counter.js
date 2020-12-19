import React from 'react';

export class Counter extends React.Component{
    
    render(){
      return(
          <div>
              <div>Count: {this.props.count}</div>
              <button title="decrement" onClick={this.props.decrement} >Decrement</button>
              <button title="increment" onClick={this.props.increment} >Increment</button>
          </div>
      )
    }
}