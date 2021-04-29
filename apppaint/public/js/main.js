const socket = io.connect();

// aca voy a mostrar info y valores de coordenadas de mis clicks
const addressBlock = document.getElementById("address");
const informationBlock = document.getElementById("information");

// aca obtenemos detalles sobre el area dibujable de la pantalla
const theField = document.getElementById("playingfield");
const ctx = theField.getContext("2d");
const box = theField.getBoundingClientRect();

// aca me traigo las referencias de los checks para
// ver qué color esta seleccionado
const blackCheck = document.getElementById("blackCheck")
const blueCheck = document.getElementById("blueCheck");
const redCheck = document.getElementById("redCheck");
const greenCheck = document.getElementById("greenCheck");

// aca agrego el manejador de eventos para registrar los cambios de color
blackCheck.addEventListener("change", () => { setActiveColor(0, 0, 0) })
blueCheck.addEventListener("change", () => { setActiveColor(0, 0, 255) })
redCheck.addEventListener("change", () => { setActiveColor(255, 0, 0) })
greenCheck.addEventListener("change", () => { setActiveColor(0, 255, 0) })

// color inicial por defecto: negro!
blackCheck.checked = true;

// variable para registrar el click del mouse
let bMouseDown = false;

// cuando cargo la pagina, aviso al servidor
// para recibir los trazos realizados hasta el momento
window.addEventListener("load", function () {
    socket.emit('pageLoaded');
});

// acá me guardo el color activo, para evitar tener que mirar
// los checks a cada rato
const activeColor = { r: 0, g: 0, b: 0 }


socket.on('nuevoPunto', pixel => {
    updateInformationBlock(pixel.x, pixel.y)
    drawPixel(pixel)
})

socket.on('listaDePuntos', pixels => {
    informationBlock.innerHTML = "Received UpTo Date Data from Server";
    clearCanvas()
    for (const pixel of pixels) {
        drawPixel(pixel)
    }
})

socket.on('address', address => {
    addressBlock.innerHTML = address;
})

function setActiveColor(r, g, b) {
    activeColor.r = r
    activeColor.g = g
    activeColor.b = b
}

function updateInformationBlock(x, y, r, g, b) {
    let info = `x: ${parseInt(x)} - y: ${parseInt(y)}`;
    if (!isNaN(Number(r)) && !isNaN(Number(g)) && !isNaN(Number(b))) {
        info += ` @ R: ${parseInt(r)} - G: ${parseInt(g)} - B: ${parseInt(b)}`;
    }
    informationBlock.innerHTML = info;
}

function drawPixel({ x, y, w, h, r, g, b }) {
    // configuro la herramienta para dibujar sobre la pantalla
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    // dibujo el nuevo punto en la pantalla
    ctx.fillRect(x - w / 2, y - h / 2, w, h);
}

function clearCanvas() {
    ctx.clearRect(0, 0, 1280, 768);
}

function manejarEventoDeMouse(x, y) {
    const X = x - box.left;
    const Y = y - box.top;
    socket.emit('nuevoPunto', { x: X, y: Y, ...activeColor });
}

function onMouseDown({ clientX: x, clientY: y }) {
    bMouseDown = true;
    manejarEventoDeMouse(x, y)
    updateInformationBlock(x, y, activeColor.r, activeColor.g, activeColor.b)
}

function onMouseMove({ clientX: x, clientY: y }) {
    if (bMouseDown) {
        manejarEventoDeMouse(x, y)
        updateInformationBlock(x, y, activeColor.r, activeColor.g, activeColor.b)
    }
}

function onMouseUp(e) {
    bMouseDown = false;
}

function onMouseLeave(e) {
    bMouseDown = false;
}
