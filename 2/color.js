var getNum0a255 = function () { return Math.floor(Math.random() * 256); };
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.getRandom = function () {
        return "rgb(" + getNum0a255() + "," + getNum0a255() + "," + getNum0a255() + ")";
    };
    return Color;
}());
var color = new Color();
console.log(color.getRandom());
