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
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
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

  var npmInstall =
    "npm i react react-dom react-redux react-router react-router-dom react-scripts module-alias cra-alias husky && " +
    "npm i eslint prettier eslint-plugin-prettier eslint-plugin-react --save-dev";

  await longCommand(npmInstall, () => {
    if (useRedux) {
      shell.exec("npm i redux");
    }
    console.log(`"dependencies installed"! 👍`);
  });
};

module.exports = { createPackageFile };
