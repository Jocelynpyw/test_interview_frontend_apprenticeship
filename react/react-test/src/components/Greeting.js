import React from "react";
import "../App.css";

const Greeting = ({ name }) => {
  return <h1 className="hello-title">Hello, {name}!</h1>;
};

export default Greeting;
