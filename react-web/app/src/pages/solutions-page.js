import React from "react"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px"
  },
  paper: {
    padding: "10px"
  },
}))

const SolutionsPage = () => {
  const classes = useStyles();

  console.log("Solutions")

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        Solutions
      </Paper>
    </Container>
  )
}

export default SolutionsPage
