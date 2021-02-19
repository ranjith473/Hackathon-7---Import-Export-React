import React, { Component, useState } from "react";
import '../styles/App.css';

import Heading from './Heading.js';
import SubHeading from './SubHeading.js';
import InputQuery from './InputQuery.js';
import SubmitButton from './SubmitButton.js';
import { render } from "enzyme";

 const App = () => {
   render(){
  return (
    <div id="main">
      <h1>{this.Heading()} </h1>
      <h1> {this.SubHeading()}</h1>
      <h1>{this.Inputquery()} </h1>
      <h1>{this.SubmitButton()} </h1>
    </div>
)
}};
export default App;

