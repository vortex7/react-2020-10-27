import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

import { useState } from "react"

import CanvasComponent from "./canvas-component"

const styles = (theme) => ({
  root: {
  },
})

let canvasOptions = {
  scale: 1.0
}

// Create image array
const images = [
  {
    name: "logo192",
    src: "logo192.png",
  }
]

// Create imagesByName dictionary
const imagesByName = {}

images.forEach((image) => {
  imagesByName[image.name] = image
})

// Create nodes array
const nodes = [
  {
    "name": "node-1",
    "image": imagesByName["logo192"],
    "title": {
      "align": "center",
      "color": "#FFFFFF",
      "font": "30px Arial",
      "text": "Node 1",
    },
    "color": "#900C3F",
    "x": 100,
    "y": 300,
    "width": 200,
    "height": 200,
    "handleClick": () => {
      alert("node-1")
    },
  },
  {
    "name": "node-2",
    "image": imagesByName["logo192"],
    "title": {
      "align": "center",
      "color": "#FFFFFF",
      "font": "30px Arial",
      "text": "Node 2",
    },
    "color": "#FF5733",
    "x": 600,
    "y": 550,
    "width": 200,
    "height": 200,
    "handleClick": () => {
      alert("node-2")
    },
  },
  {
    "name": "node-3",
    "image": imagesByName["logo192"],
    "color": "#9F0C3F",
    "title": {
      "align": "center",
      "color": "#FFFFFF",
      "font": "30px Arial",
      "text": "Node 3",
    },
    "x": 600,
    "y": 50,
    "width": 200,
    "height": 200,
    "handleClick": () => {
      alert("node-3")
    },
  },
]

// Create controls array
const controls = [
  {
    "name": "zoom-in",
    "image": imagesByName["logo192"],
    "color": "#FFFFFF",
    "x": 900,
    "y": 0,
    "width": 100,
    "height": 100,
    "handleClick": () => {
      console.log("zoom in")
      canvasOptions.scale = canvasOptions.scale * 2
      console.log(canvasOptions.scale)
    },
  },
  {
    "name": "zoom-out",
    "image": imagesByName["logo192"],
    "color": "#FFFFFF",
    "x": 900,
    "y": 100,
    "width": 100,
    "height": 100,
    "handleClick": () => {
      console.log("zoom out")
      canvasOptions.scale = canvasOptions.scale * 0.5
      console.log(canvasOptions.scale)
    },
  },
]

// Create nodesByName dictionary
const nodesByName = {}

nodes.forEach((node) => {
  nodesByName[node.name] = node
})

const connectors = [
  {
    "from": nodesByName["node-1"],
    "to": nodesByName["node-2"],
    "color": "#6600ff",
  },
  {
    "from": nodesByName["node-1"],
    "to": nodesByName["node-3"],
    "color": "#6600ff",
  },
]

// Create animations array
const animations = [
  {
    "name": "node-1-to-node-2",
    "from": nodesByName["node-1"],
    "to": nodesByName["node-2"],
    "color": "#6600ff",
    "image": imagesByName["logo192"],
    "width": 25,
    "height": 25,
    "alpha": 0.5,
    "isActive": false,
  },
  {
    "name": "node-1-to-node-3",
    "from": nodesByName["node-1"],
    "to": nodesByName["node-3"],
    "color": "#6600ff",
    "image": imagesByName["logo192"],
    "width": 25,
    "height": 25,
    "alpha": 0.5,
    "isActive": false,
  },
]

const handleAnimationStart = (animationName) => {
  animations.forEach((animation) => {
    if(animation.name === animationName) {
      animation.isActive = true
    }
  })
}

const handleAnimationStop = (animationName) => {
  animations.forEach((animation) => {
    if(animation.name === animationName) {
      animation.isActive = false
    }
  })
}

const FlowManager = (props) => {

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={() => { handleAnimationStart("node-1-to-node-3") }}>Start Animation One</Button>
          <Button variant="contained" color="secondary" onClick={() => { handleAnimationStop("node-1-to-node-3") }}>Stop Animation One</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={() => { handleAnimationStart("node-1-to-node-2") }}>Start Animation Two</Button>
          <Button variant="contained" color="secondary" onClick={() => { handleAnimationStop("node-1-to-node-2") }}>Stop Animation Two</Button>
        </Grid>
        <Grid item xs={12}>
          <CanvasComponent canvasOptions={canvasOptions} images={images} nodes={nodes} controls={controls} connectors={connectors} animations={animations} />
        </Grid>
      </Grid>
    </>
  )
}

export default FlowManager
