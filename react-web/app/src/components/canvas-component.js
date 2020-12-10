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

const CanvasComponent = ({ canvasOptions, images, nodes, controls, connectors, animations }) => {
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
        drawNode(node, ctx)
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
      controls.forEach((control) => {
        drawNode(control, ctx)
      })

      requestId = requestAnimationFrame(updateCanvas)

      return () => {
        cancelAnimationFrame(requestId)
      }
    }
  }

  const contains = (point, node) => {
    if((point.x >= node.x && point.x <= node.x + node.width) &&
       (point.y >= node.y && point.y <= node.y + node.height)) {
      return true
    }
    else {
      return false
    }
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

    controls.forEach((control) => {
      if(contains(point, control)) {
        console.log(control.name)
        if(control.handleClick) {
          control.handleClick()
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
