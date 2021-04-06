import fs from "fs";

const write = () => {
  fs.writeFile("./archivos/1.txt", "Archivo escrito desde nodejs\n", (err) => {
    if (err) return console.log(err);

    console.log("Guardado");
  });
};

const append = () => {
  fs.appendFile("./archivos/1.txt", "Archivo editado desde nodejs\n", (err) => {
    if (err) return console.log(err);

    console.log("Editado");
  });
};

const del = () => {
  fs.unlink("./archivos/1.txt", (err) => {
    if (err) return console.log(err);

    console.log("Borrado");
  });
};

const createDir = () => {
  fs.mkdir("./archivos/fromNode", (err) => {
    if (err) console.log(err);

    fs.mkdir("./archivos/fromNode/otraCarpeta", (err) => {
      if (err) console.log(err);
    });
  });
};

createDir();
