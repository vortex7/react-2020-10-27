import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import heroBannerImage from "../images/hero-banner.jpg"
import hexagonBackgroundImage from "../images/hexagon-background.png"

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
  hexagon: {
    backgroundImage: `url(${hexagonBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    textAlign: "center",
    height: "400px"
  },
})

const HeroBanner = (props) => {
  const classes = useStyles()

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
            <Grid className={classes.hexagon} item xs={3}>
              <Typography variant="h4" className={classes.text}>
                Blah
              </Typography>
            </Grid>
            <Grid className={classes.hexagon} item xs={3}>
              <Typography variant="h4" className={classes.text}>
                Blah
              </Typography>
            </Grid>
            <Grid className={classes.hexagon} item xs={3}>
              <Typography variant="h4" className={classes.text}>
                Blah
              </Typography>
            </Grid>
            <Grid className={classes.hexagon} item xs={3}>
              <Typography variant="h4" className={classes.text}>
                Blah
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeroBanner
