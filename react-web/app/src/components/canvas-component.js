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

const CanvasComponent = ({ canvasOptions, images, nodes, connectors, animations }) => {
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const classes = useStyles()

  const canvasRef = useRef(null)

  images.forEach((image) => {
    image.ref = createRef()
  })

  useEffect(() => {
    // Load canvas
    console.log("Loading canvas...")

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

      // Set scale
      ctx.scale(canvasOptions.scale, canvasOptions.scale)

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
 
      // Reset current transformation matrix to the identity matrix
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
      if((point.x >= (node.x * canvasOptions.scale) && point.x <= (node.x * canvasOptions.scale) + (node.width * canvasOptions.scale)) &&
         (point.y >= (node.y * canvasOptions.scale) && point.y <= (node.y * canvasOptions.scale) + (node.height * canvasOptions.scale))) {
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
    const canvas = canvasRef.current
    const canvasRect = canvas.getBoundingClientRect()

    const x = event.clientX - canvasRect.left
    const y = event.clientY - canvasRect.top

    const point = {
      x: x,
      y: y,
    }

    nodes.forEach((node) => {
      if(contains(point, node)) {
        console.log(node.name)
        if(node.handleClick) {
          node.handleClick()
        }
      }
    })
  }

  return (
    <>
      {images.map((image, index) => (
        <img src={imagePath(`./${image.src}`)} ref={image.ref} key={index} className={classes.images} alt={image.name} />
      ))}
        
      <canvas ref={canvasRef} onClick={handleClick} width={1000} height={1000}/>
    </>
  )
}

export default CanvasComponent
