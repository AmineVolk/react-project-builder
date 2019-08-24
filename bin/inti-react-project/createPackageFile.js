var shell = require("shelljs");

const packageFile = {
  name: "",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    start: "react-scripts start",
    build: "react-scripts build",
    test: "react-scripts test",
    eject: "react-scripts eject"
  },
  dependencies: {}
};

const createPackageFile = (projectName, useRedux) => {
  packageFile.name = projectName;
  shell.touch("package.json");
  shell.echo(JSON.stringify(packageFile)).to("package.json");
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

  shell.echo("dependencies installed");
};

module.exports = { createPackageFile };
