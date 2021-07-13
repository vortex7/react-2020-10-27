import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import ContentCard from "./content-card"

import heroBannerImage from "../images/hero-bg[1].svg"
import ARBCalendar from "../images/bucket1.svg"
import LTAGCalendar from "../images/bucket2.svg"
import ReUseability from "../images/bucket3.svg"
import DataFlow from "../images/bucket4.svg"

const useStyles = makeStyles({
  root: {
    width: "100%",
    height:400,
    backgroundImage: `url(${heroBannerImage})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
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
      icon: ARBCalendar,
      title: "ARB Calendar",
      text: "Keep up-to-date with our ARB Calendar. Know what's coming.",
      link:'here',
      // click: () => {
      //   alert("ARB Calendar")  
      // },
    },
    {
      image: "hexagon",
      icon: LTAGCalendar,
      title: "LTAGCalendar",
      text: "Don't miss out on any Future Direction Updates.",
      link:"View here",
      click: () => {
        alert("Content Two")  
      },
    },
    {
      image: "hexagon",
      icon: ReUseability,
      title: "ReUseability",
      text: "Answers on ReUseability",
      click: () => {
        alert("Content Three")  
      },
    },
    {
      image: "hexagon",
      icon: DataFlow,
      title: "Data Flow",
      text: "Blah, blah, blah",
      click: () => {
        alert("Content Four")  
      },
    },
  ]
  
  const squares = [
    // {
    //   image: "square",
    //   icon: "date_range",
    //   title: "Content One",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content One")  
    //   },
    // },
    // {
    //   image: "square",
    //   icon: "sync",
    //   title: "Content Two",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content Two")  
    //   },
    // },
    // {
    //   image: "square",
    //   icon: "restore_page",
    //   title: "Content Three",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content Three")  
    //   },
    // },
    // {
    //   image: "square",
    //   icon: "calendar_today",
    //   title: "Content Four",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content Four")  
    //   },
    // },
  ]

  return (
    <Container className={classes.root} minWidth={false} maxWidth={false} >
      
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
      </Grid>


    </Container>
  )
}

export default HeroBanner
