const model = require("./readDirRecursive.js");
const fs = require("fs");
const path = require("path");
const transMd2Jsx = require("./transMd2Jsx.js");

const files = model.readDirRecursive(path.resolve(__dirname, "../mmEntUi"));

const fd = fs.openSync(path.resolve(__dirname, "../md_trans/allMdFiles.json"), "w");
fs.writeFileSync(fd, JSON.stringify(files));
fs.closeSync(fd);
files
  .filter((item) => item.fileName.endsWith(".md"))
  .forEach((item) => {
    fs.readFile(item.path, "utf8", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        transMd2Jsx(data, item);
      }
    });
  });
console.log(" 🐭 md文件转换完成!");
