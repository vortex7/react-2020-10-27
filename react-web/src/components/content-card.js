import React from "react"
import Container from "@material-ui/core/Container"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


import squareBackgroundImage from "../images/square-background.png"
// import hexagonBackgroundImage from "../images/hexagon-white.svg"


const useStyles = makeStyles({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    textAlign: "center",
    height: "370px",
    width:"85%",
    padding:0,
    position:"relative"
  },
  spacer: {
    height: "45%",
  },
  title: {
    color: "#4696c8",
    fontWeight: 450,
    fontSize:20
  },
  text: {
    color: "black",
    fontSize:12
  },
  icon: {
    width: "100%",
    height: "100%"
  },
  hexagon:{
    marginTop:8
  },
  div:{
    position: "absolute",
    left: 0,
  }
})



const ContentCard = ({options}) => {
  const classes = useStyles()

  const backgroundImage = options.image === "square" ? squareBackgroundImage : options.icon

  return (
    <Container style={{backgroundImage: `url(${backgroundImage})`}} className={classes.root} onClick={event => { options.click() }}>
      <div className={classes.spacer} ></div>
      {/* <Grid container className={classes.hexagon} > */}
        <div className={classes.div}>
           <Typography className={classes.title}>{options.title}</Typography>
           <Typography className={classes.text}>{options.text}</Typography>
        </div>
      {/* </Grid> */}
     
     </Container>
  )
}

export default ContentCard
