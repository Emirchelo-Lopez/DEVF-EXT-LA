const fs = require("fs");

fs.writeFileSync("./file.txt", "Hello from JS");

fs.appendFileSync("./file.txt", "\n\nThis is a new line");

const content = fs.readFileSync("./file.txt", "utf-8");
console.log(content);

fs.mkdirSync("./nodeFolder");
fs.writeFileSync("./nodeFolder/otherFile.txt", "Hello from JavaScript!");
