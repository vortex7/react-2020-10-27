import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { Icon, Paper, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import ContentCard from "./content-card"

import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
import CareManagement from "../images/CareManagement.svg"
import Claims from "../images/Claims.svg"
import CoreSharedServices from "../images/CoreSharedService.svg"
import Enabling from "../images/Enabling.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"
// import AdvancedAnalytics from "../images/AdvancedAnalytics.svg"

import calendarImage from "../images/ARB-Calendar.svg"

const useStyles = makeStyles({
  root: {
    // width: "100%",
    // backgroundImage: `url(${heroBannerImage})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    textAlign: "center",
    marginTop:200
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10
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
  card:{

  }
})

const ChooseCard = (props) => {
  const classes = useStyles()

  // const hexagons = [
  //   {
  //     image: "hexagon",
  //     icon: calendarImage,
  //     title: "Content One",
  //     text: "Blah, blah, blah",
  //     click: () => {
  //       alert("Content One")  
  //     },
  //   },
    // {
    //   image: "hexagon",
    //   icon: "sync",
    //   title: "Content Two",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content Two")  
    //   },
    // },
    // {
    //   image: "hexagon",
    //   icon: "restore_page",
    //   title: "Content Three",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content Three")  
    //   },
    // },
    // {
    //   image: "hexagon",
    //   icon: "calendar_today",
    //   title: "Content Four",
    //   text: "Blah, blah, blah",
    //   click: () => {
    //     alert("Content Four")  
    //   },
    // },
  // ]
  
  const cards = [
    {
      icon: AdvancedAnalytics,
      title: "Advanced Analytics",
      text: "Blah, blah, blah",
      click: () => {
        alert("Advanced Analytics")  
      },
    },
    {
      icon: CareManagement,
      title: "Care Management",
      text: "Blah, blah, blah",
      click: () => {
        alert("Care Management")  
      },
    },
    {
      icon: Claims,
      title: "Claims",
      text: "Blah, blah, blah",
      click: () => {
        alert("Claims")  
      },
    },
    {
      icon: CoreSharedServices,
      title: "Core Shared Services",
      text: "Blah, blah, blah",
      click: () => {
        alert("Core Shared Services")  
      },
    },
  ]

  return (
    <Container className={classes.root}>

      <Typography className={classes.title} variant="h5" gutterBottom> Need work done? Choose your Domain </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {cards.map((cardConfig, index) => {
              return (
                <Grid item xs={3}>
                  {/* <ContentCard options={squareConfig} />*/}
                  <Card className={classes.card}>
                    <CardContent>
                      <Icon>
                        <img src={cardConfig.icon}/>
                      </Icon>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {cardConfig.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                  </Card>

                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>


    </Container>
  )
}

export default ChooseCard
