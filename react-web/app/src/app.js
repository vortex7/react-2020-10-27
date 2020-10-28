import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import "./app.css"

// Components
import NavBar from "./components/nav-bar"

// Pages
import About from "./pages/about"

export default function App() {
  return (
    <Router>
      <div>
        <NavBar title="Component Development" />
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
