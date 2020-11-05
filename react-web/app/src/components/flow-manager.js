import React from "react"
import { withStyles } from "@material-ui/core/styles"

import { Stage, Sprite } from "@inlet/react-pixi"

import { useState } from "react";

const styles = (theme) => ({
  root: {
  },
})

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
}

const FlowManager = (props) => {
  const [selected, setSelected] = useState(colors[0])

  return (
    <Stage>
      <Sprite image="/logo192.png" x={100} y={100} />
    </Stage>
  )
}

export default FlowManager
