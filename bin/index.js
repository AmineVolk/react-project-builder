#!/usr/bin/env node
var shell = require("shelljs");
var program = require("commander");
const { isProjectCreated } = require("./helper/projectInfos.js");
program
  .arguments("init-project")
  .action(argument => {
    switch (argument) {
      case "init-project":
        require("./inti-react-project/index");
        break;
      case "add-screen":
        if (isProjectCreated()) {
          require("./add-screen/index");
        } else {
          shell.echo(`error : create project befor adding screen`);
        }
        break;
      default:
        if (argument._args != undefined && argument._args.length === 0) {
          shell.echo(`error : you should specify argument`);
        } else {
          shell.echo(`error : uknown '${argument}' argument`);
        }
        break;
    }
  })
  .parse(process.argv);
