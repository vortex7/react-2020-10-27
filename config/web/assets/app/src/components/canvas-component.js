import React, { useContext, useEffect, useRef, useState } from "react"
import { drawNode } from "./flow-node"
import { drawConnector } from "./flow-connector"
import { drawAnimation } from "./flow-animation"

const CanvasComponent = ({ nodes, connectors, animations }) => {
  const [canvasLoaded, setCanvasLoaded] = useState(false)

  const canvasRef = useRef(null)

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
        drawAnimation(animation, ctx)
      })

      requestId = requestAnimationFrame(updateCanvas)

      return () => {
        cancelAnimationFrame(requestId)
      }
    }
  }

  return (
    <canvas ref={canvasRef} width={1000} height={1000}/>
  )
}

export default CanvasComponent
