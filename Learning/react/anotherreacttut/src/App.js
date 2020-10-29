//App.js is a component 
//A component is something which holds all the logic, HTML, styling in one file

import React from 'react';
import Tweet from "./Tweet";
import "./App.css";

function App(){

  return(
    <div className="app">
      {/* 
//Now to use dynamic values, we add props. The name that we added to the tweet is a prop
      <Tweet name="VARUN" message="yoyoyo"/>
      <Tweet name="VISHAL" message="fsdfsdfsdfo"/>
      <Tweet name="TIWARI" message="yewrewrwerwerwerw"/>
      <Tweet name="AMAN" message="ynvbnbvnvbnvbnvbo"/> 
      */}
    </div>
  );
}

export default App;