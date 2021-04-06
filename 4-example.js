import fs from "fs";

const FILEPATH = "./archivos/fyh.txt";
const CREATED = new Date();

try {
  fs.appendFileSync(FILEPATH, `${CREATED}\n`);
} catch (err) {
  if (err.code === "ENOENT") {
    fs.writeFileSync(FILEPATH, `${CREATED}\n`);
  } else {
    console.log(err);
  }
}
