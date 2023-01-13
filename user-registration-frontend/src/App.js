import './App.css';
import React, {useState} from "react";
import Register from './components/register/register'
import Login from './components/login/login'
import Home from './components/home/home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {

  const [currentView, setCurrentView] = useState("register");

  const handleCurrentViewState = (view) => {
    if(view === "register"){
      setCurrentView("register");
    }
    else if(view === "login"){
      setCurrentView("login");
    }
    else if(view === "home"){
      setCurrentView("home");
    } 
  } 

  return (
    <div className="App">
      {currentView === "login" ? 
      <Login handleCurrentViewState={handleCurrentViewState}/> : currentView === "register" ?
      <Register handleCurrentViewState={handleCurrentViewState}/> : 
      <Home handleCurrentViewState={handleCurrentViewState}/>}
    </div>
  );
}

export default App;
