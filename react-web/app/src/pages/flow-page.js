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

const FlowPage = () => {
  const classes = useStyles();

  console.log("Flow")

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        Flow
      </Paper>
    </Container>
  )
}

export default FlowPage
