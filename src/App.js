import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCounter from "./ButtonCounter"
import MouseHoverCounter from "./MouseHoverCounter"

function App() {
  return (
    <div className="App">
      <ButtonCounter />
      <MouseHoverCounter />
    </div>
  );
}

export default App;
