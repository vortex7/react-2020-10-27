import React from "react"
import Container from "@material-ui/core/Container"

import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Switch from "@material-ui/core/Switch"

const Preferences = ({options}) => {
  console.log(options)

  return (
    <Container>
      <FormControl component="fieldset">
      {options.email &&
        <>
          <FormLabel component="legend">{options.email.label}</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="primary" name="paperlessMail" />}
              label={options.email.paperless.label}
              color="primary"
            />
            <FormControlLabel
              control={<Switch color="primary" name="receiveEmailOffers" />}
              label={options.email.offers.label}
            />
          </FormGroup>
        </>
      }
      {options.phone &&
        <>
          <FormLabel component="legend">{options.phone.label}</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="primary" name="primaryPhone" />}
              label={options.phone.primary.label}
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
