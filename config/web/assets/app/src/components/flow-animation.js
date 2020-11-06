const drawAnimation = (animation, ctx) => {
  ctx.globalAlpha = animation.alpha
  ctx.fillStyle = animation.color
  ctx.fillRect(animation.x, animation.y, animation.width, animation.height)

  // Compute the x,y en-route to destination
  let distance = getDistance(animation.from, animation.to)

  let angle = Math.atan2(animation.to.y - animation.from.y, animation.to.x - animation.from.x)

  let perFrameDistance = 2
  let sin = Math.sin(angle) * perFrameDistance
  let cos = Math.cos(angle) * perFrameDistance

  animation.x += cos
  animation.y += sin

  if(animation.x > animation.to.x) {
    animation.x = animation.from.x
    animation.y = animation.from.y
  }

  ctx.globalAlpha = 1.0
}

const getDistance = (point1, point2) => {
  return Math.hypot(point2.x - point1.x, point2.y - point1.y)
}

export { drawAnimation }
