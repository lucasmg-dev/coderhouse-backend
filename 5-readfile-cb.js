import fs from "fs";

fs.readFile("./archivos/1.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

console.log("END");
