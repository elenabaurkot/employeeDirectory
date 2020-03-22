import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
  return (
    <div className= "jumbotron jumbotron-fluid">
      
        <h1 className="display-4">Fluid jumbotron</h1>
      
    </div>
  );
}

export default Jumbotron;
