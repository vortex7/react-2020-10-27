import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { Icon, Paper, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import TeamImg from "../images/Team.png"


const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop:200,
    padding:20
    
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
  image:{
    height: '800px',
    // width: '100vh',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat, repeat",
    backgroundImage: `url(${TeamImg})`,
  }
})

const OrgChart = (props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="h2">
        Meet The Team
      </Typography>

      <Typography className={classes.image}></Typography>
    </Paper>
  )
}

export default OrgChart
