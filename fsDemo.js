// import fs from "fs";
import { write } from "fs";
import fs from "fs/promises";

// readFile() - Callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data);

// readFile() - Promise version
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - Async await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(`data: ${data}`);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello this file should be changed");
    console.log("File Has been written");
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("file appended to");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
