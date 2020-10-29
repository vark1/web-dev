import React from "react";
import "./App.css"

//to use the dynamic props that we added in the app.js, we need use the parameter props here
function Tweet({name, message}){
   return (
      <div className="tweet">
         <h3>{name}</h3>
         <p>{message}</p>
         <h3>Number of likes</h3>
      </div>
   )
}
// function Tweet(props){
//    return (
//       <div className="tweet">
//          <h3>{props.name}</h3>
//          <p>{props.message}</p>
//          <h3>Number of likes</h3>
//       </div>
//    )
// }
//both are the same, the commented out one just uses old syntax. {name, message} one is using ES6

export default Tweet;