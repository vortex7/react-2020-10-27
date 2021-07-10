import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import ContentCard from "./content-card"

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

  const hexagons = [
    {
      image: "hexagon",
      icon: "date_range",
      title: "Content One",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content One")  
      },
    },
    {
      image: "hexagon",
      icon: "sync",
      title: "Content Two",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Two")  
      },
    },
    {
      image: "hexagon",
      icon: "restore_page",
      title: "Content Three",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Three")  
      },
    },
    {
      image: "hexagon",
      icon: "calendar_today",
      title: "Content Four",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Four")  
      },
    },
  ]
  
  const squares = [
    {
      image: "square",
      icon: "date_range",
      title: "Content One",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content One")  
      },
    },
    {
      image: "square",
      icon: "sync",
      title: "Content Two",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Two")  
      },
    },
    {
      image: "square",
      icon: "restore_page",
      title: "Content Three",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Three")  
      },
    },
    {
      image: "square",
      icon: "calendar_today",
      title: "Content Four",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Four")  
      },
    },
  ]

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
            {hexagons.map((hexagonConfig, index) => {
              return (
                <Grid item xs={3}>
                  <ContentCard options={hexagonConfig} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {squares.map((squareConfig, index) => {
              return (
                <Grid item xs={3}>
                  <ContentCard options={squareConfig} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeroBanner
