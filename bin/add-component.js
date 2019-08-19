#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");

program
  .arguments("add-component")
  .option("--name <componentname>", "The project name")
  .action(() => {
    shell.echo(`program ${JSON.stringify(program.name)}`);
  })
  .parse(process.argv);
