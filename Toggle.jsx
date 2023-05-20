import { Component } from 'react';
 
export class ToggleOld extends Component {
   constructor(props) {
       super(props);
       this.state = { isToggleOn: true };
       this.handleClick = this.handleClick.bind(this);
   }
 
   handleClick() {
       this.setState((prevState) => ({
           isToggleOn: !prevState.isToggleOn,
       }));
   }
 
   render() {
       return (
           <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
           </button>
       );
   }
}


// convert the above class component to function component:
import { useState } from 'react';

export const Toggle= () => {
  
  const [toggleOn, setToggleOn] = useState(true);
  
  const handleClick = () => {
    setToggleOn(!toggleOn);
  }
 
       return (
           <button onClick={handleClick}> { isToggleOn ? 'ON' : 'OFF'} </button>
       );
}
