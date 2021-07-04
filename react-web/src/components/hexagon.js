import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import hexagonBackgroundImage from "../images/hexagon-background.png"

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${hexagonBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    textAlign: "center",
    height: "400px"
  },
  spacer: {
    height: "40%"
  },
  title: {
    color: "#4696c8"
  },
  text: {
    color: "black"
  },
})

const Hexagon = ({options}) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Container className={classes.spacer}></Container>
      <Container className={classes.title}>{options.title}</Container>
      <Container className={classes.text}>{options.text}</Container>
    </Container>
  )
}

export default Hexagon
