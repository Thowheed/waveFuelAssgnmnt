import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GoolgeChart from "./Components/chart";
import DropDown from "./Components/dropdown";
import DashBoardComponent from "./Components/DashBoard";

function App() {

  const [currentState, setCurrentState] =useState(null)
  return (
    <div className="App">
      <DashBoardComponent  setCurrentState={setCurrentState}/>
      {/* <DropDown /> */}
      <GoolgeChart currentState={currentState} />
    </div>
  );
}

export default App;
