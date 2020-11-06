const drawConnector = (connector, ctx) => {
  ctx.strokeStyle = connector.color
  ctx.moveTo(connector.from.x + (connector.from.width / 2), connector.from.y + (connector.from.height / 2))
  ctx.lineTo(connector.to.x + (connector.to.width / 2), connector.to.y + (connector.to.height / 2))
  ctx.stroke()
}

export { drawConnector }
