import React, { useContext, useEffect, useRef, useState } from "react"
import { drawNode } from "./flow-node"
import { drawConnector } from "./flow-connector"
import { drawAnimation } from "./flow-animation"
import { makeStyles } from "@material-ui/core/styles"

import logo from '../images/logo192.png'

console.log(logo)

const useStyles = makeStyles({
  logo: {
    display: "none",
  },
})


const styles = (theme) => ({
  logo: {
    display: "none",
  },
})

const CanvasComponent = ({ nodes, connectors, animations }) => {
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const classes = useStyles()

  const canvasRef = useRef(null)
  const logoRef = useRef(null)


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
    const logo = logoRef.current

    if(canvas) {
      const ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()

      // Draw Nodes
      nodes.forEach((node) => {
        node.image = logo
        drawNode(node, ctx)
      })

      // Draw Connectors
      connectors.forEach((connector) => {
        drawConnector(connector, ctx)
      })

      // Draw Animations
      animations.forEach((animation) => {
        animation.image = logo
        drawAnimation(animation, ctx)
      })

      requestId = requestAnimationFrame(updateCanvas)

      return () => {
        cancelAnimationFrame(requestId)
      }
    }
  }

  return (
    <>
      <img src={logo} ref={logoRef} className={classes.logo} />
        
      <canvas ref={canvasRef} width={1000} height={1000}/>
    </>
  )
}

export default CanvasComponent
