import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import "./app.css"
import { components, pages } from "./app-config"

// Components
import NavBar from "./components/nav-bar"

const App = () => {

  return (
    <Router>
      <div>
        <NavBar title="Component Development" />
      </div>
      <div>
        <Switch>
          {getRoutes()}
        </Switch>
      </div>
    </Router>
  )
}

const getRoutes = () => {
  let routes = []

  pages.forEach((page, index) => {
    let component = React.createElement(components[page.name], null, null)

    let routeProps = {
      key: index,
      path: page.url
    }

    if(index === 0) {
      routeProps.exact = true
    }

    let route = React.createElement(Route, routeProps, component)
    routes.push(route)
  })

  return(routes)
}

export default App
