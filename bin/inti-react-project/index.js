#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");
const { createPackageFile } = require("./createPackageFile");
const { history } = require("../data/history.js");
const { routes } = require("../data/routes.js");
const { indexHtml } = require("../data/indexHtml.js");
const { createDuckFolder } = require("./duckFolder")
const { getScreenExp } = require("../data/screenExp");
const { reducers } = require("../data/reducers");
const { index } = require("../data/index");
const { Colors } = require("../data/Colors");
const { R } = require("../data/R.js");
const { indexCss } = require("../data/indexCss.js");
const { App } = require("../data/App")
const { footer } = require("../data/footer")
const { navBar } = require("../data/navBar")

program
  .arguments("init-project")
  .option("--name <projectname>", "The project name")
  .option("--use-redux <yes/no>", "Project use redux")
  .action(() => {
    shell.echo(`initializing project ${program.name} ....`);

    shell.echo(`** isUsing redux  ${JSON.stringify(program.useRedux)}`);

    //createPackageFile(program.name, program.useRedux != undefined);
    //init folders

    shell.mkdir("src");
    shell.mkdir("src/app");
    shell.mkdir("src/app/screens");
    shell.mkdir("src/app/config");
    shell.mkdir("src/app/util");
    shell.mkdir("src/app/components");
    shell.mkdir("src/app/res")

    shell.mkdir("public");

    //init files import { Route, Switch } from "react-router-dom";
    shell.echo(R.content).to("src/app/res/R.js")
    shell.echo(indexHtml.content).to("public/index.html");
    shell.echo("NODE_PATH=./src").to(".env")
    shell.echo(App.content).to("src/app/App.js");
    shell.echo(history.content).to("src/app/history.js");
    shell.mkdir("src/app/screens/screenExp1");
    shell.mkdir("src/app/screens/home");

    createDuckFolder();
    shell
      .echo(getScreenExp("screenExp1"))
      .to("src/app/screens/screenExp1/index.js");
    shell.echo(getScreenExp("home")).to("src/app/screens/home/index.js");
    shell.echo(routes.content).to("src/app/Routes.js");


    //create index
    shell.echo(index.content).to("src/index.js")
    shell.echo(indexCss.content).to("src/index.css")

    //create combineReducers
    shell.echo(reducers.content).to("src/reducers.js")

    //create simple navBar
    shell.mkdir("src/app/components/navBar");
    shell.echo(navBar.content).to("src/app/components/navBar/index.jsx");


    //create simple footer
    shell.mkdir("src/app/components/footer");
    shell.echo(footer.content).to("src/app/components/footer/index.jsx");

    //create res folder
    shell.echo(Colors.content).to("src/app/res/Colors.js")
    shell.mkdir("src/app/res")
    shell.touch("src/app/res/Strings.js");



  })
  .parse(process.argv);
