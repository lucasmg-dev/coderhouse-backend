// author: Nicolas Caballero (GRACIAS)
import fs from "fs";

fs.promises
  .readFile("./archivos/info.txt", "utf-8")
  .then((cont) => {
    /* EJERCICIO A) */
    let info = JSON.parse(cont);
    /* EJERCICIO B) */
    console.log(info);
    /* EJERCICIO C) */
    info.contenidoObj.author = `CoderHouse`;
    async function writeFile() {
      try {
        fs.promises.writeFile(
          "../package.json.coder",
          JSON.stringify(info.contenidoObj, null, "\t")
        );
        console.log(`File successfully written and author modified!`, info);
      } catch (error) {
        console.log(`Oops! couldn't write file!`, error);
      }
    }
    writeFile();
  })
  .catch((err) => {
    console.log(`Oops! couldn't read file!`, err);
  });
