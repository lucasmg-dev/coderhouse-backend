const getNum0a255 = () => Math.floor(Math.random() * 256)

const numero = 1

class Color {
    getRandom() {
        return `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
    }
}

const color = new Color()
console.log(color.getRandom())