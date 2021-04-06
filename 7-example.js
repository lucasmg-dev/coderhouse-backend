import fs from "fs";

fs.readFile("./package.json", "utf-8", (err, data) => {
  if (err) return console.log(err);
  const info = {
    contenidoStr: data,
    contenidoObj: JSON.parse(data),
  };
  fs.writeFile("./archivos/info.txt", JSON.stringify(info, null, 2), (err) => {
    if (err) return console.log(err);

    console.log("Guardado");
  });
});
