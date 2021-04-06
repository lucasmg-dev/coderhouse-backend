import fs from "fs";

const FILEPATH = "./archivos/fyh.txt";
const CREATED = new Date();

try {
  if (fs.existsSync(FILEPATH)) {
    fs.appendFileSync(FILEPATH, `${CREATED}\n`);
  } else {
    fs.writeFileSync(FILEPATH, `${CREATED}\n`);
  }
} catch (err) {
  console.error(err);
}
