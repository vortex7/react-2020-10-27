import React from "react"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import HeroBanner from "../components/hero-banner"

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
      <HeroBanner/>
    </Container>
  )
}

export default AboutPage
