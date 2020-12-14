import React, { createRef, useEffect, useRef, useState } from "react"
import { drawNode } from "./flow-node"
import { drawConnector } from "./flow-connector"
import { drawAnimation } from "./flow-animation"
import { makeStyles } from "@material-ui/core/styles"

const imagePath = require.context("../images", true, /.png$/)

const useStyles = makeStyles({
  images: {
    display: "none",
  },
})

const CanvasComponent = ({ canvasState, images, nodes, connectors, animations }) => {
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const classes = useStyles()

  const canvasRef = useRef(null)

  images.forEach((image) => {
    image.ref = createRef()
  })

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

    // Handle canvas scale for type "node"
    if(node.type == "node") {
      let nodeX = (node.x * canvasState.scale) + canvasState.pan.x
      let nodeY = (node.y * canvasState.scale) + canvasState.pan.y
      let nodeWidth = node.width * canvasState.scale
      let nodeHeight = node.height * canvasState.scale

      if((point.x >= nodeX && point.x <= nodeX + nodeWidth) &&
         (point.y >= nodeY && point.y <= nodeY + nodeHeight)) {
        doesContain = true
      }
    }

    // Controls are never scaled, so no scale required
    if(node.type == "control") {
      if((point.x >= node.x && point.x <= node.x + node.width) &&
         (point.y >= node.y && point.y <= node.y + node.height)) {
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
      if(contains(point, node)) {
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
      {images.map((image, index) => (
        <img src={imagePath(`./${image.src}`)} ref={image.ref} key={index} className={classes.images} alt={image.name} />
      ))}
        
      <canvas 
        ref={canvasRef}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
        width={1000}
        height={1000}/>
    </>
  )
}

export default CanvasComponent
