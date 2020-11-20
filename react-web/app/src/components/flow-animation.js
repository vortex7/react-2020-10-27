const drawAnimation = (animation, ctx) => {
  ctx.globalAlpha = animation.alpha
  ctx.fillStyle = animation.color
  ctx.fillRect(animation.x, animation.y, animation.width, animation.height)

  // TODO: Use distance and duration to compute perFrameDistance below
  let distance = getDistance(animation.from, animation.to)

  // Find center of target notes
  let fromNodeCenter = getCenter(animation.from)
  let toNodeCenter = getCenter(animation.to)
  let animationNodeCenter = getCenter(animation)

  if(!animation.x) {
    // Position animation x
    animation.x = fromNodeCenter.x - (animation.width / 2)
  }

  if(!animation.y) {
    // Position animation y
    animation.y = fromNodeCenter.y - (animation.height / 2)
  }

  // Compute angle between from/to nodes
  let angle = Math.atan2(toNodeCenter.y - fromNodeCenter.y, toNodeCenter.x - fromNodeCenter.x)

  // Move animation along path between nodes
  let perFrameDistance = 2
  let sin = Math.sin(angle) * perFrameDistance
  let cos = Math.cos(angle) * perFrameDistance

  animation.x += cos
  animation.y += sin

  // Reset animation position to the center of the from node
  if(animationNodeCenter.x > toNodeCenter.x) {
    animation.x = fromNodeCenter.x - (animation.width / 2)
    animation.y = fromNodeCenter.y - (animation.height / 2)
  }

  // Set transparency
  ctx.globalAlpha = 1.0
}

const getDistance = (point1, point2) => {
  return Math.hypot(point2.x - point1.x, point2.y - point1.y)
}

const getCenter = (node) => {
  let xMidpoint = node.x + (node.width / 2)
  let yMidpoint = node.y + (node.height / 2)

  return {
    x: xMidpoint,
    y: yMidpoint,
  }
}

export { drawAnimation }
