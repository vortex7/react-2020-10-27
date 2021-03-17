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

let canvasState = {
  scale: 1.0,
  isDown: false,
  mousePosition: {
    x: 0,
    y: 0,
  },
  pan: {
    x: 0,
    y: 0,
  }
}

// Create nodes array
const nodes = [
  {
    "name": "node-1",
    "type": "node",
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
    "isHovering": false,
    "handleClick": () => {
      alert("node-1")
    },
    "handleAddClick": () => {
      alert("node-1 add")
    },
    "handleDeleteClick": () => {
      alert("node-1 delete")
    },
  },
  {
    "name": "node-2",
    "type": "node",
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
    "isHovering": false,
    "handleClick": () => {
      alert("node-2")
    },
    "handleAddClick": () => {
      alert("node-2 add")
    },
    "handleDeleteClick": () => {
      alert("node-2 delete")
    },
  },
  {
    "name": "node-3",
    "type": "node",
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
    "isHovering": false,
    "handleClick": () => {
      alert("node-3")
    },
    "handleAddClick": () => {
      alert("node-3 add")
    },
    "handleDeleteClick": () => {
      alert("node-3 delete")
    },
  },
  {
    "name": "zoom-in",
    "type": "control",
    "title": {
      "align": "center",
      "color": "#333333",
      "font": "18px Arial",
      "text": "Zoom In",
    },
    "color": "#FFFFFF",
    "x": 900,
    "y": 0,
    "width": 100,
    "height": 100,
    "isHovering": false,
    "handleClick": () => {
      console.log("zoom in")
      canvasState.scale = canvasState.scale * 1.2
      console.log(canvasState.scale)
    },
  },
  {
    "name": "zoom-out",
    "type": "control",
    "title": {
      "align": "center",
      "color": "#333333",
      "font": "18px Arial",
      "text": "Zoom Out",
    },
    "color": "#FFFFFF",
    "x": 900,
    "y": 100,
    "width": 100,
    "height": 100,
    "isHovering": false,
    "handleClick": () => {
      console.log("zoom out")
      canvasState.scale = canvasState.scale * 0.8333
      console.log(canvasState.scale)
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
          <CanvasComponent canvasState={canvasState} nodes={nodes} connectors={connectors} animations={animations} />
        </Grid>
      </Grid>
    </>
  )
}

export default FlowManager
