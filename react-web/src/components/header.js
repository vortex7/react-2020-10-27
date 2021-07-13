import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { Paper, Icon, Link, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"


import EALogo from '../images/EA-logo.svg'; // Import using relative path

import { pages } from "../app-config"

import {
  Switch,
  Route,
} from "react-router-dom"

const lightColor = "rgba(255, 255, 255, 0.7)"

const styles = (theme) => ({
  root:{
    flexGrow: 1,
    padding: 20,
  },
  secondaryBar: {
    zIndex: 0,
    paddingRight: 65
  },
  iconButtonAvatar: {
    padding: 4,
  },
  defaultSpacing:{
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "#1891CC",
  },
  button: {
    borderColor: lightColor,
  },
})

const Header = (props) => {
  const { classes, onDrawerToggle } = props

  console.log(pages)

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="white"
        position="static"
        elevation={0}
      >
         <>
          <Grid container className={classes.root} spacing={2}>

            <Grid item xs={4} justify="flex-start">
                <img src={EALogo} />
            </Grid>

            <Grid item xs={8}>

                <Grid container className={classes.defaultSpacing} justify="flex-end" align-items="center" spacing={4}>
               
                  {pages.map((page, index) => (
                      <Grid key={index} item>
                        <Link
                          className={classes.link}
                          component="button"
                          variant="body2"
                          target="_blank"
                          onClick={() => {
                            console.info("I'm a button.");
                          }}
                        >
                          {page.title}
                        </Link>
                      </Grid>
                    ))}
                </Grid>
            </Grid>
          </Grid>
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
