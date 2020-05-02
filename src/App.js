import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestArea from './components/TypingArea'
import Header from './components/Header'
function App() {
    return (
    <div className="">
        <Header/>
      <TestArea/>
      <div className={"text-center"}></div>
    </div>
  );
}

export default App;
