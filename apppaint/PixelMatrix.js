class PixelMatrix {
  constructor() {
    this.rectangleMap = new Array(1280);
    this.iniMap();
  }
  iniMap() {
    for (let i = 0; i < 1280; i++) {
      this.rectangleMap[i] = new Array(1280);
    }
  }
  asArray() {
    const array = [];
    for (let x = 0; x < this.rectangleMap.length; x++) {
      for (let y = 0; y < this.rectangleMap[x].length; y++) {
        const r = this.rectangleMap[x][y];
        if (r != null) {
          array.push(r);
        }
      }
    }
    return array;
  }
  setPixel({ x: _x, y: _y }, { r, g, b }) {
    const Size = 4;
    const x = Math.trunc(_x / Size) * Size;
    const y = Math.trunc(_y / Size) * Size;
    const pixel = { x, y, w: Size, h: Size, r, g, b };
    this.rectangleMap[x][y] = pixel;
    return pixel;
  }
}

module.exports = PixelMatrix