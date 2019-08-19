#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");

program
  .arguments("init-project")
  .option("--name <projectname>", "The project name")
  .action(() => {
    shell.echo(`program ${JSON.stringify(program.name)}`);
  })
  .parse(process.argv);
