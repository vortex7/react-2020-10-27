import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  root: {
    marginTop: "10px"
  },
  paper: {
    padding: "10px"
  },
})

const Component = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        About
      </Paper>
    </Container>
  )
}

export default Component
