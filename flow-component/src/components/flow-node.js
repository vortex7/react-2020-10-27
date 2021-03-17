const drawNode = (node, ctx) => {
  ctx.fillStyle = node.color
  ctx.shadowBlur = 5
  ctx.shadowColor = "black"
  ctx.fillRect(node.x, node.y, node.width, node.height)

  // Reset some things
  ctx.shadowBlur = 0

  if(node.type == "node" && node.isHovering) {
    ctx.globalAlpha = 0.3
    ctx.fillStyle = "#000000"
    ctx.fillRect(node.x, node.y, node.width, node.height)

    ctx.globalAlpha = 1.0

    // Add Button
    node.addButton = createAddButton(node, ctx)
    drawImage(node.addButton, ctx, false)

    // Delete Button
    node.deleteButton = createDeleteButton(node, ctx)
    drawImage(node.deleteButton, ctx, false)
  }

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
    drawImage(node, ctx, true)
  }
}

const drawImage = (node, ctx, withTitle) => {
  let width, height, x, y

  if(withTitle) {
    width = node.width - (node.width / 10)
    height = node.height - (node.height / 10)

    x = node.x + ((node.height / 10) / 2)
    y = node.y + (node.height / 10)
  }
  else {
    width = node.width
    height = node.height

    x = node.x
    y = node.y
  }
  
  // TODO: Fix this
  /*
  try {
    ctx.drawImage(node.image.ref.current, x, y, width, height)
  }
  catch(e) {
    // console.log(e)
  }
  */
}

const createAddButton = (node, ctx) => {
  let width = node.width / 4
  let height = width

  let x = node.x
  let y = node.y

  return {
    "title": {
      "align": "center",
      "color": "#FFFFFF",
      "font": "30px Arial",
      "text": "Add",
    },
    width: width,
    height: height,
    x: x,
    y: y,
  }
}

const createDeleteButton = (node, ctx) => {
  let width = node.width / 4
  let height = width

  let x = node.x + (node.width - width)
  let y = node.y

  return {
    "title": {
      "align": "center",
      "color": "#FFFFFF",
      "font": "30px Arial",
      "text": "Delete",
    },
    width: width,
    height: height,
    x: x,
    y: y,
  }
}

export { drawNode }
