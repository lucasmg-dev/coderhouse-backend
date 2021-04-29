const PIXEL_SIZE = 4
const SCREEN_SIZE = 1280

class Pixel {
    constructor(x, y, r, g, b) {
        this.x = (Math.trunc(x / PIXEL_SIZE) * PIXEL_SIZE)
        this.y = (Math.trunc(y / PIXEL_SIZE) * PIXEL_SIZE)
        this.w = PIXEL_SIZE
        this.h = PIXEL_SIZE
        this.r = r
        this.g = g
        this.b = b
    }
}

class PixelMatrix {
    constructor() {
        this.pixelMatrix = new Array(SCREEN_SIZE);
        this.reset()
    }

    reset() {
        for (let i = 0; i < SCREEN_SIZE; i++) {
            this.pixelMatrix[i] = new Array(SCREEN_SIZE);
        }
    }

    paintPixel({ x, y, r, g, b }) {
        const pixel = new Pixel(x, y, r, g, b)
        this.pixelMatrix[x][y] = pixel
        return pixel
    }

    asArray() {
        const array = []
        for (let x = 0; x < this.pixelMatrix.length; x++) {
            for (let y = 0; y < this.pixelMatrix[x].length; y++) {
                const r = this.pixelMatrix[x][y];
                if (r != null) {
                    array.push(r);
                }
            }
        }
        return array
    }
}

module.exports = PixelMatrix