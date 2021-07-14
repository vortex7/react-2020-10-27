import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { Icon, Paper, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import InfographicsImg from "../images/Infographics-Articles.png"


const useStyles = makeStyles({
  root: {
    height: '500px',
    textAlign: "center",
    marginTop:200,
    backgroundColor:"#FAFAFA",
    padding:50

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
    height: '500px',
    // width: '100vh',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat, repeat",
    backgroundImage: `url(${InfographicsImg})`,
  }
})

const InfoGraphics = (props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>

      <Grid container spacing={2}>

        <Grid item xs={6}>
         <div className={classes.image}/>
        </Grid>
        
        <Grid item xs={6}>
          <Typography className={classes.title}>
            New and Popular Articles
          </Typography>
        </Grid>
      </Grid>

    </Paper>
  )
}

export default InfoGraphics
