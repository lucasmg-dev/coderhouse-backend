import fs from "fs";

const data = fs.readFileSync("./archivos/1.txt", "utf-8");
console.log(data);
