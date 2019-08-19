#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");

shell.echo("************ index ***************");

program
  .arguments("init-project")
  .action(argument => {
    shell.echo(`**** argument ${argument} ****`);

    switch (argument) {
      case "init-project":
        require("./init-react-project");
        break;
      case "add-component":
        require("./add-component");
        break;
      default:
        shell.echo(`${argument} not found`);

        break;
    }
  })
  .parse(process.argv);
