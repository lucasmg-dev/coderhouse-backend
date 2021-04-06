import fs from "fs";

try {
  const data = fs.readFileSync("./archivos/noexiste.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
}

console.log("END");
