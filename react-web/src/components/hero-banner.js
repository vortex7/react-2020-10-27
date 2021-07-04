import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Hexagon from "./hexagon"

import heroBannerImage from "../images/hero-banner.jpg"

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundImage: `url(${heroBannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    paddingTop: "50px"
  },
  title: {
    color: "white"
  },
  text: {
    color: "#4696c8"
  },
  banner: {
    width: "100%",
  },
  search: {
    color: "white",
    backgroundColor: "white",
    width: "50%",
  },
})

const HeroBanner = (props) => {
  const classes = useStyles()

  const hexagons = {
    contentOne: {
      image: "",
      title: "Content One",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content One")  
      },
    },
    contentTwo: {
      image: "",
      title: "Content Two",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Two")  
      },
    },
    contentThree: {
      image: "",
      title: "Content Three",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Three")  
      },
    },
    contentFour: {
      image: "",
      title: "Content Four",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Four")  
      },
    },
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            Hi! How can we help?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField id="search" label="Search..." type="search" variant="filled" className={classes.search} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Hexagon options={hexagons.contentOne} />
            </Grid>
            <Grid item xs={3}>
              <Hexagon options={hexagons.contentTwo} />
            </Grid>
            <Grid item xs={3}>
              <Hexagon options={hexagons.contentThree} />
            </Grid>
            <Grid item xs={3}>
              <Hexagon options={hexagons.contentFour} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeroBanner
