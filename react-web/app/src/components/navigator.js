import React, { Fragment } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import PeopleIcon from "@material-ui/icons/People"
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "react-router-dom"

import { categories } from "../app-config"

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
})

const Navigator = (props) => {
  const { classes, ...other } = props

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          React Web Components 
        </ListItem>
        {categories.map((category) => (
          <Fragment key={category.name}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {category.title}
              </ListItemText>
            </ListItem>
            {category.pages.map((page, active) => (
              <ListItem
                component={Link} 
                to={page.url} 
                key={page.name}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{page.icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {page.title}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </Fragment>
        ))}
      </List>
    </Drawer>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigator)
