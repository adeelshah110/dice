import React from 'react'
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Login from "./Login/Login.js"
import Signup from "./Signup/Signup.js"
import Home from "./Home/Home.js"

const App = () => {
  return (
    <Router>
      <Routes>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/" exact ={true}>
      <Home />
    </Route>
  </Routes>
</Router>
  )
}

export default App