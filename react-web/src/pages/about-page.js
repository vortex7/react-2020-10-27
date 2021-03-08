import React from "react"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

import { Preferences } from "preferences-component"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px"
  },
  paper: {
    padding: "10px"
  },
}))

const AboutPage = () => {
  const classes = useStyles();

  console.log("About")

  let options = {
    "style": {
    },
    "email": {
      "label": "Email Preferences",
      "paperless": {
        "label": "Paperless Mail"
      },
      "offers": {
        "label": "Receive Email Offers"
      }
    },
    "phone": {
      "label": "Phone Preferences",
      "primary": {
        "label": "Primary Phone"
      }
    }
  }

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        About
        <Preferences options={options}/>
      </Paper>
    </Container>
  )
}

export default AboutPage
