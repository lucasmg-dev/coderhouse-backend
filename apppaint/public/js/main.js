const socket = io.connect();

//load socket.io-client and connect to the host that serves the page
const theField = document.getElementById("playingfield");
const ctx = theField.getContext("2d");
theField.addEventListener("touchstart", onTouchStart, false);
theField.addEventListener("touchmove", onTouchMove, false);
let bMouseDown = false;

const coords = { x: 0, y: 0 };

const activeColor = { r: 0, g: 0, b: 0 };

function setActiveColor(r, g, b) {
  activeColor.r = r;
  activeColor.g = g;
  activeColor.b = b;
}

window.addEventListener("load", () => {
  //when page loads
  document.getElementById("blackCheck").checked = true;

  socket.emit("refresh", "rectlist");
  document.getElementById("blackCheck").addEventListener("change", () => {
    setActiveColor(0, 0, 0);
  });
  document.getElementById("blueCheck").addEventListener("change", () => {
    setActiveColor(0, 0, 255);
  });
  document.getElementById("redCheck").addEventListener("change", () => {
    setActiveColor(255, 0, 0);
  });
  document.getElementById("greenCheck").addEventListener("change", () => {
    setActiveColor(0, 255, 0);
  });
});

socket.on("info", data => {
  document.getElementById("information").innerHTML = data;
});

function drawPixel(data) {
  ctx.fillStyle = "rgb(" + data.r + ", " + data.g + ", " + data.b + ")";
  ctx.fillRect(data.x - data.w / 2, data.y - data.h / 2, data.w, data.h);
}

socket.on("rect", data => {
  drawPixel(data);
  document.getElementById("information").innerHTML = "x: " + data.x + " - y: " + data.y;
});

socket.on("rectlistdata", datas => {
  document.getElementById("information").innerHTML = "Received UpTo Date Data from Server";
  ctx.clearRect(0, 0, 1280, 768);
  for (const data of datas) {
    if (data != null) {
      drawPixel(data);
    }
  }
});

socket.on("address", data => {
  document.getElementById("address").innerHTML = data;
});

function onMouseUp(e) {
  bMouseDown = false;
}

function onMouseLeave(e) {
  bMouseDown = false;
}

function onMouseDown(e) {
  bMouseDown = true;
  const coords = getMouseEventCoords(e);
  socket.emit("rect", { ...coords, ...activeColor });
  updateInfo(coords);
}

function onMouseMove(e) {
  if (bMouseDown) {
    const coords = getMouseEventCoords(event);
    socket.emit("rect", { ...coords, ...activeColor });
    updateInfo(coords);
  }
}

function getMouseEventCoords(event) {
  const box = theField.getBoundingClientRect();
  const x = event.clientX - box.left;
  const y = event.clientY - box.top;
  return { x, y };
}

function updateInfo({x, y}) {
  document.getElementById("information").innerHTML =
    "x: " +
    parseInt(x) +
    " - y:" +
    parseInt(y) +
    " @ " +
    "R: " +
    parseInt(activeColor.r) +
    " - G:" +
    parseInt(activeColor.g) +
    " - B:" +
    parseInt(activeColor.b);
}

function onTouchStart(e) {
  handleTouchEvent(e);
}

function onTouchMove(e) {
  handleTouchEvent(e);
}

function handleTouchEvent(e) {
  e.preventDefault();
  if (e.touches?.length >= 1) {
    const t = e.touches[0];
    const coords = getTouchEventCoords(t)
    socket.emit("rect", { ...coords, ...activeColor });
  }
}

function getTouchEventCoords(event){
    const box = theField.getBoundingClientRect();
    const x = event.pageX - box.left;
    const y = event.pageY - box.top; 
  return { x, y }
}
