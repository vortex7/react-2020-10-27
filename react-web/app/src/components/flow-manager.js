import React from "react"
import { withStyles } from "@material-ui/core/styles"

import { useState } from "react"

import CanvasComponent from "./canvas-component"

const styles = (theme) => ({
  root: {
  },
})


const nodes = [
  {
    "name": "node-1",
    "color": "#900C3F",
    "x": 100,
    "y": 100,
    "width": 25,
    "height": 25,
  },
  {
    "name": "node-2",
    "color": "#FF5733",
    "x": 150,
    "y": 150,
    "width": 25,
    "height": 25,
  },
  {
    "name": "node-3",
    "color": "#9F0C3F",
    "x": 150,
    "y": 50,
    "width": 25,
    "height": 25,
  },
]

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

const FlowManager = (props) => {

  return (
    <CanvasComponent nodes={nodes} connectors={connectors} />
  )
}

export default FlowManager
