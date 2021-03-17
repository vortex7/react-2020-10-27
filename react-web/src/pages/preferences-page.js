import React from "react"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Preferences } from "preferences-component"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px"
  },
  paper: {
    padding: "10px"
  },
}))

const PreferencesPage = () => {
  const classes = useStyles()

  console.log("Preferences")

  const options = {
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

  const codeString = `
  const options = {
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
  }\

  return(
    <Preferences options={options}/>
  )
  `

  return (
    <Container className={classes.root}>
      <>
        <Typography variant="h4" gutterBottom>
          Preferences Component
        </Typography>
        <Typography variant="h6" gutterBottom>
          Display preferences based on a JSON configuration passed as a property.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Preferences component is a library of preferences that are entirely dynamic and re-usable.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The component takes JSON in order to render as many preferences as the user requires and changes the title, content and type of preference to be rendered.
        </Typography>
      </>
      <Paper className={classes.paper}>
        Preferences
        <Preferences options={options}/>
      </Paper>
      <SyntaxHighlighter language="javascript" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </Container>
  )
}

export default PreferencesPage
