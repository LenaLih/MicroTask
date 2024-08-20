import React, { useState } from "react";
import "./App.css";
import Component1 from "./components/component1";

function App() {
  const [allGreen , setAllGreen] = useState(false);
  const [title, setTitle] = useState("");


  const callBack = (title: string) => {
    setAllGreen(true)
    setTitle(title)
    console.log('App:', title);
  };
 
  return (
    <div className="App">
      <h1>MicroTasks Callback</h1>
      < div className="container">
        <Component1  
        callBack = {callBack}
        />
        
        </div>
        {/* {allGreen && <div>{'Yoo'}</div>} */}
        {allGreen && <p>{title}</p>}
    </div>
  );
}

export default App;
