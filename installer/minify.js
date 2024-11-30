/*
 * Code minifier
 * @busgounet
*/

const path = require("path");
const { globSync } = require("glob");
const esbuild = require("esbuild");

var files = [];

let project = require("../package.json").name;
let revision = require("../package.json").rev;
let version = require("../package.json").version;

let commentIn = "/**";
let commentOut = "**/";

/**
 * search all javascript files
 */
function searchFiles () {
  let components = globSync("../src/**/*.js");
  files = files.concat(components);
  console.log(`Found: ${files.length} files to install and minify\n`);
}

/**
 * Minify all files in array with Promise
 */
async function minifyFiles () {
  searchFiles();
  await Promise.all(files.map((file) => { return minify(file); })).catch(() => process.exit(255));
}

/**
 * Minify filename with esbuild
 * @param {string} file to minify
 * @returns {boolean} resolved with true
 */
function minify (file) {
  let pathInResolve = path.resolve(__dirname, file);
  let pathOutResolve = path.resolve(__dirname, file.replace("../src/", "../"));
  let FileName = path.parse(file).base;
  console.log("Process File:", file.replace("../src/", ""));
  return new Promise((resolve, reject) => {
    try {
      esbuild.buildSync({
        entryPoints: [pathInResolve],
        allowOverwrite: true,
        minify: true,
        outfile: pathOutResolve,
        banner: {
          js: `${commentIn} ${project}\n  * File: ${FileName}\n  * Version: ${version}\n  * Revision: ${revision}\n ${commentOut}`
        },
        footer: {
          js: `${commentIn} Coded With Heart by bugsounet ${commentOut}`
        }
      });
      resolve(true);
    } catch {
      reject();
    }
  });
}

minifyFiles();
