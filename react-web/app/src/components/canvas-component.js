import React, { createRef, useContext, useEffect, useRef, useState } from "react"
import { drawNode } from "./flow-node"
import { drawConnector } from "./flow-connector"
import { drawAnimation } from "./flow-animation"
import { makeStyles } from "@material-ui/core/styles"

const imagePath = require.context("../images", true, /.png$/);

const useStyles = makeStyles({
  images: {
    display: "none",
  },
})

const CanvasComponent = ({ images, nodes, connectors, animations }) => {
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
  })

  let requestId = null

  const updateCanvas = () => {
    const canvas = canvasRef.current

    if(canvas) {
      const ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()

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

      requestId = requestAnimationFrame(updateCanvas)

      return () => {
        cancelAnimationFrame(requestId)
      }
    }
  }

  return (
    <>
      {images.map((image) => (
        <img src={imagePath(`./${image.src}`)} ref={image.ref} className={classes.images} />
      ))}
        
      <canvas ref={canvasRef} width={1000} height={1000}/>
    </>
  )
}

export default CanvasComponent
