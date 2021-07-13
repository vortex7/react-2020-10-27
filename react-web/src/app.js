import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

import {
  BrowserRouter as Router,
} from "react-router-dom"

import Content from "./components/content"
import Header from "./components/header"
import Navigator from "./components/navigator"

import { components, pages } from "./app-config"
import { theme } from "./theme"

const drawerWidth = 256

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    // padding: theme.spacing(6, 4),
    // background: "#eaeff1",
  },
  footer: {
    padding: theme.spacing(2),
    // background: "#eaeff1",
  },
}

const App = (props) => {
  const { classes } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          {/* <CssBaseline /> */}
          {/* <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav> */}
          <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              <Content />
            </main>
            <footer className={classes.footer}>
            </footer>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
