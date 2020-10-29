import React from "react";
//new component
//just export it and import it in the file using import Hello from './sayHello';
//(first letter of the component should be capital)
//then use the component using JSX, ie <Hello/>
function Hello(){
   const sayHello = () => {
    console.log("HEllo")
  }
   //<button onClick= --------> {sayHello} <------- >...</button>, curly braces is used to access javascript
   //use curly braces to access javascript inside jsx
   return (
      <div>
      <h3>This is the Hello component</h3>
               <button onClick={sayHello}>Hello in console</button>
      </div>
   )
}

export default Hello;