import React from "react"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

// import FlowManager from "../components/flow-manager"
import { FlowManager } from "flow-component"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px"
  },
  paper: {
    padding: "10px"
  },
}))

const FlowPage = () => {
  const classes = useStyles();

  console.log("Flow")

  const codeString = `
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

  return(
    <FlowComponent nodes={nodes} connectors={connectors} animations={animations} />
  )
  `

  return (
    <Container className={classes.root}>
      <>
        <Typography variant="h4" gutterBottom>
          Flow Component
        </Typography>
        <Typography variant="h6" gutterBottom>
          Display interactive diagrams based on a JSON configuration passed as a property.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Flow animation canvas that leverages HTML Canvas to display node connections and animations.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The component allows you to freely manipulate the canvas using drag, zoom-in, zoom-out, as well as taking screenshots.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Using JSON as a schema it allows you to dynamically create new nodes and connections.
        </Typography>
      </>
      <FlowManager />
      <SyntaxHighlighter language="javascript" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </Container>
  )
}

export default FlowPage
