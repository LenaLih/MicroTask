import React, { useState } from "react";
import "./App.css";
import Component1 from "./components/component1";

function App() {
  const [allGreen , setAllGreen] = useState(false);


  const callBack = () => {setAllGreen(true)};

  return (
    <div className="App">
      <h1>MicroTasks Callback</h1>
      <div className="container">
        <Component1  
        callBack = {callBack}
        />
      </div>
    </div>
  );
}

export default App;
