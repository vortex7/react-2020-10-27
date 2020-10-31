import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { withStyles } from "@material-ui/core/styles"

import { pages } from "../app-config"

import {
  Switch,
  Route,
} from "react-router-dom"

const lightColor = "rgba(255, 255, 255, 0.7)"

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
})

const Header = (props) => {
  const { classes, onDrawerToggle } = props

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <>
          <Switch>
            {pages.map((page, index) => (
            <Route key={index} exact path={page.url}>
              <Tabs value={0} textColor="inherit">
                <Tab textColor="inherit" label={page.title} />
              </Tabs>
            </Route>
            ))}
          </Switch>
        </>
      </AppBar>
    </React.Fragment>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
