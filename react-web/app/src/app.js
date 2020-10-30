import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import "./app.css"
import { components, defaultPage, pages } from "./app-config"

// Components
import NavBar from "./components/nav-bar"

// Pages

export default function App() {
  return (
    <Router>
      <div>
        <NavBar title="Component Development" />
      </div>
      <div>
        <Switch>
          <Route path={defaultPage.url}>
            {React.createElement(components[defaultPage.name])}
          </Route>
          {pages.map((page, index) => (
            <Route key={index} path={page.url}>
              {React.createElement(components[page.name])}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  )
}
