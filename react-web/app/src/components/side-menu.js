import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"

import { Link } from "react-router-dom"

import { pages } from "../app-config"

const useStyles = makeStyles({
  Menu: {
    width: 250,
  },
  fullMenu: {
    width: "auto",
  },
})

console.log(pages)

export default function SideMenu() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const Menu = (anchor) => (
    <div
      className={clsx(classes.Menu, {
        [classes.fullMenu]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuList>
      {pages.map((page, index) => (
        <MenuItem key={index} component={Link} to={page.url}>{page.name}</MenuItem>
      ))}
      </MenuList>
    </div>
  )

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} color="inherit"><MenuIcon /></IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {Menu(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
