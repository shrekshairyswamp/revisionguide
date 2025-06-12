// Define player object
const player = {
  x: CANVAS_WIDTH / 2,
  y: CANVAS_HEIGHT / 2,
  width: BLOCK_SIZE,
  height: BLOCK_SIZE,
  color: "#FF0000",
  speed: 5,
  moveUp: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
};

// Handle touch events
canvas.addEventListener("touchstart", function (event) {
  event.preventDefault();
  var touch = event.touches[0];
  if (touch.pageY < CANVAS_HEIGHT / 2) {
    player.moveUp = true;
  } else {
    player.moveDown = true;
  }
  if (touch.pageX < CANVAS_WIDTH / 2) {
    player.moveLeft = true;
  } else {
    player.moveRight = true;
  }
});

canvas.addEventListener("touchend", function (event) {
  event.preventDefault();
  player.moveUp = false;
  player.moveDown = false;
  player.moveLeft = false;
  player.moveRight = false;
});

// Handle player input
document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 87: // W key
      player.moveUp = true;
      break;
    case 65: // A key
      player.moveLeft = true;
      break;
    case 83: // S key
      player.moveDown = true;
      break;
    case 68: // D key
      player.moveRight = true;
      break;
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    case 87: // W key
      player.moveUp = false;
      break;
    case 65: // A key
      player.moveLeft = false;
      break;
    case 83: // S key
      player.moveDown = false;
      break;
    case 68: // D key
      player.moveRight = false;
      break;
  }
});
