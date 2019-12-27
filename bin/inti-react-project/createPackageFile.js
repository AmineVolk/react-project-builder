var shell = require("shelljs");

const packageFile = {
  name: "",
  version: "1.0.0",
  description: "",
  main: "index.js",
  "scripts": {
    "start": "cra-alias start",
    "build": "cra-alias build",
    "test": "cra-alias test",
    "eject": "cra-alias eject"
  },
  dependencies: {},
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
};

const createPackageFile = (projectName, useRedux) => {
  packageFile.name = projectName;
  shell.touch("package.json");
  shell.ShellString(JSON.stringify(packageFile)).to("package.json");
  shell.echo("instaling dependencies...");
  if (useRedux) {
    shell.exec("npm i redux");
  }
  shell.exec("npm i react");
  shell.exec("npm i react-dom");
  shell.exec("npm i react-redux");
  shell.exec("npm i react-router");
  shell.exec("npm i react-router-dom");
  shell.exec("npm i react-scripts");
  shell.exec("npm i --save module-alias")
  shell.exec("npm i -D cra-alias")
  shell.echo("dependencies installed");
};

module.exports = { createPackageFile };
