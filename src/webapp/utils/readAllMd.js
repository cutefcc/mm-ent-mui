const chokidar = require("chokidar");
const model = require("./readDirRecursive.js");
const fs = require("fs");
const path = require("path");
const transMd2Jsx = require("./transMd2Jsx.js");
const monit = process.argv[2] === "monit"; // 是否监控md文件的变化
monit &&
  chokidar
    .watch(path.resolve(__dirname, "../mmEntUi/**/*.md"))
    .on("all", (event, path) => {
      event === "change" && console.log(`${path} has changed`);
      event === "change" && openMdAndTrans();
    });

openMdAndTrans();

function openMdAndTrans() {
  const files = model.readDirRecursive(path.resolve(__dirname, "../mmEntUi"));

  // const fd = fs.openSync(path.resolve(__dirname, "../md_trans/allMdFiles.json"), "w");
  // fs.writeFileSync(fd, JSON.stringify(files));
  // fs.closeSync(fd);
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
}
