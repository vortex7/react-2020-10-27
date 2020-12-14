const drawNode = (node, ctx) => {
  ctx.fillStyle = node.color
  ctx.shadowBlur = 5
  ctx.shadowColor = "black"
  ctx.fillRect(node.x, node.y, node.width, node.height)

  // Reset some things
  ctx.shadowBlur = 0

  // Title
  if (node.title) {
    ctx.font = node.title.font
    ctx.fillStyle = node.title.color
    ctx.textAlign = node.title.align

    let x = node.x + (node.width / 2)
    let y = node.y + (node.height / 8)

    ctx.fillText(node.title.text, x, y)
  }

  if(node.image) {
    let width = node.width - (node.width / 10)
    let height = node.height - (node.height / 10)

    let x = node.x + ((node.height / 10) / 2)
    let y = node.y + (node.height / 10)
    
    ctx.drawImage(node.image.ref.current, x, y, width, height)
  }

  if(node.isHovering) {
    console.log(`Hovering over ${node.name}`)
  }
}

export { drawNode }
