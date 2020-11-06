import React, { useContext, useEffect, useRef, useState } from "react"

const CanvasComponent = ({ nodes, connectors }) => {
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

  const updateCanvas = () => {
    const canvas = canvasRef.current

    if(canvas) {
      console.log("Drawing canvas...")

      const ctx = canvas.getContext("2d")
      console.log(ctx)

      // Draw Nodes
      nodes.forEach((node) => {
        ctx.fillStyle = node.color
        ctx.fillRect(node.x, node.y, node.width, node.height)
      })

      // Draw Connectors
      connectors.forEach((connector) => {
        ctx.strokeStyle = connector.color
        ctx.moveTo(connector.from.x + (connector.from.width / 2), connector.from.y + (connector.from.height / 2))
        ctx.lineTo(connector.to.x + (connector.to.width / 2), connector.to.y + (connector.to.height / 2))
        ctx.stroke()
      })
    }
  }

  return (
    <canvas ref={canvasRef} width={1000} height={1000}/>
  )
}

export default CanvasComponent
