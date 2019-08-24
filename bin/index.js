#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");

program
  .arguments("init-project")
  .action(argument => {
    shell.echo(`**** argument ${argument} ****`);

    switch (argument) {
      case "init-project":
        require("./inti-react-project/index");
        break;
      case "add-component":
        require("./add-component/index");
        break;
      default:
        shell.echo(`${argument} not found`);

        break;
    }
  })
  .parse(process.argv);
