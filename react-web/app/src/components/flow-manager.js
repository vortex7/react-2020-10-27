import React from "react"
import { withStyles } from "@material-ui/core/styles"

import { useState } from "react"

import CanvasComponent from "./canvas-component"

const styles = (theme) => ({
  root: {
  },
})

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
    "from": nodesByName["node-1"],
    "to": nodesByName["node-2"],
    "color": "#6600ff",
    "image": imagesByName["logo192"],
    "width": 25,
    "height": 25,
    "alpha": 0.5,
  },
  {
    "from": nodesByName["node-1"],
    "to": nodesByName["node-3"],
    "color": "#6600ff",
    "image": imagesByName["logo192"],
    "width": 25,
    "height": 25,
    "alpha": 0.5,
  },
]

const FlowManager = (props) => {

  return (
    <CanvasComponent images={images} nodes={nodes} connectors={connectors} animations={animations} />
  )
}

export default FlowManager
