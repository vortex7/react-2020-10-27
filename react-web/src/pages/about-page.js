import React from "react"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import conceptualReactArchitectureImage from "../images/react-conceptual-architecture.jpg"
import reactBuildProcessImage from "../images/react-build-process.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px"
  },
  paper: {
    padding: "10px"
  },
}))

const AboutPage = () => {
  const classes = useStyles()

  console.log("About")

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        React Web Components
      </Typography>
      <Typography variant="body1" gutterBottom>
        A collection of configurable react components installed as separate NPM packages.
      </Typography>
      <img src={ conceptualReactArchitectureImage } width="100%" />
      <img src={ reactBuildProcessImage } width="100%" />
    </Container>
  )
}

export default AboutPage
