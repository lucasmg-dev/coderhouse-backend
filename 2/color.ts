const getNum0a255 = ():number => Math.floor(Math.random() * 256)

class Color {
    getRandom():string {
        return `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
    }
}

const color:Color = new Color()
console.log(color.getRandom())