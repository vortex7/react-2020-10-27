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
    /*
    let x = node.x + (node.width / 10)
    let y = node.y + ((node.height / 10) + 10)
    ctx.drawImage(node.image, x, y)
    let image = new Image()
    image.onload = () => {
      // let x = node.x + (node.width / 10)
      // let y = node.y + ((node.height / 10) + 10)
      let x = node.x
      let y = node.y

      //ctx.drawImage(image, x, y)
      ctx.drawImage(image, 50, 50)
    }
    image.src = node.image.src
    */
  }
}

export { drawNode }

/*
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}
*/
