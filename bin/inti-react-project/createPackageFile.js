var shell = require("shelljs");
const ora = require("ora");
var spawn = require("child_process").spawn;

const packageFile = {
  name: "",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    start: "cra-alias start",
    build: "cra-alias build",
    test: "cra-alias test",
    eject: "cra-alias eject"
  },
  dependencies: {},
  browserslist: {
    production: [">0.2%", "not dead", "not op_mini all"],
    development: [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
};
const longCommand = (command, onSuccess) => {
  return new Promise((resolve, reject) => {
    var process = spawn(command, { shell: true });
    var spinner = ora("Installing dependencies...").start();
    process.on("exit", () => {
      spinner.stop();
      onSuccess();
      resolve();
    });
  });
};
const createPackageFile = async (projectName, useRedux) => {
  packageFile.name = projectName;
  shell.touch("package.json");
  shell.ShellString(JSON.stringify(packageFile)).to("package.json");
  //shell.echo("instaling dependencies");
  var npmInstall =
    "npm i react react-dom react-redux react-router react-router-dom react-scripts module-alias cra-alias && " +
    "npm i eslint prettier eslint-plugin-prettier eslint-plugin-react --save-dev";

  if (useRedux) {
    npmInstall + " && npm i redux";
  }
  await longCommand(npmInstall, () =>
    console.log(`"dependencies installed"! 👍`)
  );
};

module.exports = { createPackageFile };
