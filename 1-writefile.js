// import fs from "fs";
const fs = require("fs");

const write = () => {
  fs.writeFileSync("./archivos/1.txt", "Archivo escrito desde nodejs\n");
};

const append = () => {
  fs.appendFileSync("./archivos/1.txt", "Archivo editado desde nodejs\n");
};

const del = () => {
  fs.unlinkSync("./archivos/1.txt");
};

write();
