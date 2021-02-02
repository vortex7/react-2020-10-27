import React from "react"
import Container from "@material-ui/core/Container"

import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Switch from "@material-ui/core/Switch"

const Preferences = ({email, phone}) => {
  return (
    <Container>
      <FormControl component="fieldset">
      {email &&
        <>
          <FormLabel component="legend">Email Preferences</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="primary" name="paperlessMail" />}
              label="Paperless Mail"
              color="primary"
            />
            <FormControlLabel
              control={<Switch color="primary" name="receiveEmailOffers" />}
              label="Receive Email Offers"
            />
          </FormGroup>
        </>
      }
      {phone &&
        <>
          <FormLabel component="legend">Phone Preferences</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="primary" name="blah" />}
              label="Blah"
              color="primary"
            />
          </FormGroup>
        </>
      }
      </FormControl>
    </Container>
  )
}

export default Preferences
