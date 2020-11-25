import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

import {
  Switch,
  Route,
} from "react-router-dom"

import { components, pages } from "../app-config"

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
})

const Content = (props) => {
  return (
    <Switch>
      {getRoutes()}
    </Switch>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
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

export default withStyles(styles)(Content)
