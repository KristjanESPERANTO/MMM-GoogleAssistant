/*
 * Install src code without minify
 * @busgounet
*/

const path = require("node:path");
const { copyFileSync } = require("node:fs");
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
 * Minify all files in array with Promise
 */
async function installFiles () {
  searchFiles();
  await Promise.all(files.map((file) => { return install(file); })).catch(() => process.exit(255));
}

/**
 * Minify filename with esbuild
 * @param {string} file to minify
 * @returns {boolean} resolved with true
 */
function install (file) {
  let FileName = file.replace("../src/", "../");
  let GAFileName = `${project}/${FileName.replace("../", "")}`;
  let pathInResolve = path.resolve(__dirname, file);
  let pathOutResolve = path.resolve(__dirname, FileName);
  console.log("Process File:", GAFileName);
  return new Promise((resolve, reject) => {
    try {
      copyFileSync(pathInResolve, pathOutResolve);
      resolve(true);
    } catch {
      reject();
    }
  });
}

installFiles();
