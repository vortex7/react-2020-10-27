import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import SideMenu from "./side-menu"

import { Link } from "react-router-dom"

import { defaultPage } from "../app-config"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "white",
    flexGrow: 1,
  },
}))

export default function NavBar(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu />
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
          <Button component={Link} to={defaultPage.url} color="inherit">{defaultPage.title}</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
