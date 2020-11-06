const drawNode = (node, ctx) => {
  ctx.fillStyle = node.color
  ctx.fillRect(node.x, node.y, node.width, node.height)
}

export { drawNode }
