import React, { createRef, useEffect, useRef, useState } from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import { drawNode } from "./flow-node"
import { drawConnector } from "./flow-connector"
import { drawAnimation } from "./flow-animation"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  images: {
    display: "none",
  },
})

const CanvasComponent = ({ canvasState, nodes, connectors, animations }) => {
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const classes = useStyles()

  const canvasRef = useRef(null)
  const mirrorRef = useRef(null)

  useEffect(() => {
    // Load canvas
    if(!canvasLoaded) {
      setCanvasLoaded(true)
      updateCanvas()
    }
  }, [canvasLoaded])

  let requestId = null

  const updateCanvas = () => {
    const canvas = canvasRef.current

    if(canvas) {
      const ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()

      // Set pan
      ctx.translate(canvasState.pan.x, canvasState.pan.y)

      // Set scale
      ctx.scale(canvasState.scale, canvasState.scale)

      // Draw Nodes
      nodes.forEach((node) => {
        if(node.type === "node") {
          drawNode(node, ctx)
        }
      })

      // Draw Connectors
      connectors.forEach((connector) => {
        drawConnector(connector, ctx)
      })

      // Draw Animations
      animations.forEach((animation) => {
        if(animation.isActive) {
          drawAnimation(animation, ctx)
        }
      })
 
      // Reset scale
      ctx.setTransform(1, 0, 0, 1, 0, 0)

      // Draw Controls
      nodes.forEach((node) => {
        if(node.type === "control") {
          drawNode(node, ctx)
        }
      })

      requestId = requestAnimationFrame(updateCanvas)

      return () => {
        cancelAnimationFrame(requestId)
      }
    }
  }

  const contains = (point, node) => {
    let doesContain = false

    if(node.type == "control") {
      // Controls are never scaled
      if((point.x >= node.x && point.x <= node.x + node.width) &&
         (point.y >= node.y && point.y <= node.y + node.height)) {
        doesContain = true
      }
    }
    else {
      // Handle canvas scale for all other nodes
      let nodeX = (node.x * canvasState.scale) + canvasState.pan.x
      let nodeY = (node.y * canvasState.scale) + canvasState.pan.y
      let nodeWidth = node.width * canvasState.scale
      let nodeHeight = node.height * canvasState.scale

      if((point.x >= nodeX && point.x <= nodeX + nodeWidth) &&
         (point.y >= nodeY && point.y <= nodeY + nodeHeight)) {
        doesContain = true
      }
    }

    return doesContain
  }

  const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const point = getPoint(event)

    nodes.forEach((node) => {
      if(node.addButton && contains(point, node.addButton)) {
        console.log(node)
        if(node.handleAddClick) {
          node.handleAddClick()
        }
      }
      else if(node.deleteButton && contains(point, node.deleteButton)) {
        console.log(node)
        if(node.handleDeleteClick) {
          node.handleDeleteClick()
        }
      }
      else if(contains(point, node)) {
        console.log(node.name)
        if(node.handleClick) {
          node.handleClick()
        }
      }
    })
  }

  const handleMouseDown = (event) => {
    event.preventDefault()
    event.stopPropagation()

    canvasState.mousePosition = getPoint(event)
    canvasState.isDown = true
  }

  const handleMouseUp = (event) => {
    event.preventDefault()
    event.stopPropagation()

    canvasState.isDown = false
  }

  const handleMouseOut = (event) => {
    event.preventDefault()
    event.stopPropagation()

    canvasState.isDown = false
  }

  const handleMouseMove = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const point = getPoint(event)

    if(canvasState.isDown){
      // Get the delta (change) in mousePosition
      let deltaX = point.x - canvasState.mousePosition.x
      let deltaY = point.y - canvasState.mousePosition.y

      canvasState.pan.x += deltaX
      canvasState.pan.y += deltaY
    }

    // Update canvasState.mousePosition to current point
    canvasState.mousePosition = point

    // Set isHovering for nodes affected
    nodes.forEach((node) => {
      if(contains(point, node)) {
        node.isHovering = true
      }
      else {
        node.isHovering = false
      }
    })
  }

  const takeScreenshot = () => {
    const canvas = canvasRef.current
    const mirror = mirrorRef.current
    var dataURL = canvas.toDataURL("image/png")
    mirror.src = dataURL

    var link = document.createElement("a")
    link.download = "screenshot.png"
    link.href = mirror.src
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    mirror.src = ""
  }

  const getPoint = (event) => {
    const canvas = canvasRef.current
    const canvasRect = canvas.getBoundingClientRect()

    const x = event.clientX - canvasRect.left
    const y = event.clientY - canvasRect.top

    const point = {
      x: x,
      y: y,
    }

    return point
  }

  return (
    <>
      <div style={{position: "relative", margin: 0, padding: 0, width: 1000, height: 1000}}>
        <img 
          ref={mirrorRef}
          style={{position: "absolute", left: 0, top: 0}}
          width={1000}
          height={1000}/>

        <canvas 
          ref={canvasRef}
          style={{position: "absolute", left: 0, top: 0}}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseOut}
          onMouseMove={handleMouseMove}
          width={1000}
          height={1000}/>
      </div>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={() => { takeScreenshot() }}>Take Screenshot</Button>
      </Grid>
    </>
  )
}

export default CanvasComponent
