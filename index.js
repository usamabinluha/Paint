const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 50;

const context = canvas.getContext("2d");
context.strokeStyle = "#000000";
context.lineWidth = 5;

let x = null, y = null, draw = false;

window.addEventListener('mousedown', () => draw = true)
window.addEventListener('mouseup', () => draw = false)
window.addEventListener('mousemove', (event) => {
  if (x == null || y == null || !draw) {
    x = event.clientX;
    y = event.clientY;
    return
  }
  let currentX = event.clientX;
  let currentY = event.clientY;

  context.beginPath()
  context.moveTo(x,y)
  context.lineTo(currentX, currentY)
  context.stroke()

  x = currentX
  y = currentY
})

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height))

document.querySelectorAll('.color').forEach((button) => {
  button.addEventListener('click', (e) => {
    context.strokeStyle = e.target.style.backgroundColor
  })
})