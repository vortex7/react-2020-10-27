import React from "react"
import Container from "@material-ui/core/Container"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"


import squareBackgroundImage from "../images/square-background.png"
import hexagonBackgroundImage from "../images/hexagon-background.png"

const useStyles = makeStyles({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    textAlign: "center",
    height: "400px",
  },
  spacer: {
    height: "10%"
  },
  title: {
    color: "#4696c8"
  },
  text: {
    color: "black"
  },
})

const ContentCard = ({options}) => {
  const classes = useStyles()

  const backgroundImage = options.image === "square" ? squareBackgroundImage : hexagonBackgroundImage

  return (
    <Container style={{backgroundImage: `url(${backgroundImage})`}} className={classes.root} onClick={event => { options.click() }}>
      <Container className={classes.spacer}></Container>
      <Container><Icon style={{fontSize: "100px"}}>{options.icon}</Icon></Container>
      <Container><Typography className={classes.title}>{options.title}</Typography></Container>
      <Container><Typography className={classes.text}>{options.text}</Typography></Container>
    </Container>
  )
}

export default ContentCard
