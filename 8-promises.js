import fs from "fs";

fs.promises
  .readFile("./archivos/fyh.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("END");
