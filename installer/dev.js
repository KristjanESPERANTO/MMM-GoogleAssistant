/*
 * Install src code without minify
 * @busgounet
*/

const path = require("node:path");
const { symlinkSync, existsSync, unlinkSync } = require("node:fs");
const { globSync } = require("glob");

var files = [];

let project = require("../package.json").name;

/**
 * search all javascript files
 */
function searchFiles () {
  let components = globSync("../src/**/*.js");
  files = files.concat(components);
  console.log(`Found: ${files.length} files to install\n`);
}

/**
 * Install all files in array with Promise
 */
async function installFiles () {
  searchFiles();
  await Promise.all(files.map((file) => { return install(file); }));
}

/**
 * Install filename with Symbolic Link from src
 * @param {string} file to install
 * @returns {boolean} resolved with true
 */
function install (file) {
  let FileName = file.replace("../src/", "../");
  let GAFileName = `${project}/${FileName.replace("../", "")}`;
  let pathInResolve = path.resolve(__dirname, file);
  let pathOutResolve = path.resolve(__dirname, FileName);
  console.log("Process File:", GAFileName);
  return new Promise((resolve) => {
    if (existsSync(pathOutResolve)) unlinkSync(pathOutResolve);
    symlinkSync(pathInResolve, pathOutResolve);
    resolve(true);
  });
}

console.log("⚠ This Tools is reserved for develop only ⚠\n");
installFiles();
console.log("\n✅ All sources files are installed and ready for developing\n");
