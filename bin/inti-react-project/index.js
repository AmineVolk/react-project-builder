#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");
const { createPackageFile } = require("./createPackageFile");
const { history } = require("../data/history.js");
const { routes } = require("../data/withoutRedux/routes");
const { routesWithRedux } = require("../data/withRedux/routes")
const { indexHtml } = require("../data/indexHtml.js");
const { createDuckFolder } = require("./duckFolder")
const { reducers } = require("../data/withRedux/reducers");
const { indexWithRedux } = require("../data/withRedux/index");
const { indexWithoutRedux } = require("../data/withoutRedux/index");

const { Colors } = require("../data/Colors");
const { R } = require("../data/R.js");
const { indexCss } = require("../data/indexCss.js");
const { App } = require("../data/App")
const { footer } = require("../data/footer")
const { navBar } = require("../data/navBar")
const { createInitialScreens } = require("./createInitialScreens")
program
  .arguments("init-project")
  .option("--name <projectname>", "The project name")
  .option("--use-redux <yes/no>", "Project use redux")
  .action(() => {
    shell.echo(`initializing project ${program.name} ....`);

    shell.echo(`** isUsing redux  ${JSON.stringify(program.useRedux)}`);
    const isUseRedux = program.useRedux != undefined && program.useRedux == "yes";
    //createPackageFile(program.name, isUseRedux);

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
    shell.echo(history.content).to("src/app/history.js");
    shell.mkdir("src/app/screens/screenExp1");
    shell.mkdir("src/app/screens/home");

    if (isUseRedux) {
      createDuckFolder();
      //create combineReducers
      shell.echo(reducers.content).to("src/reducers.js");
      //create index with redux
      shell.echo(indexWithRedux.content).to("src/index.js")
      shell.echo(routesWithRedux.content).to("src/app/Routes.js");

    } else {
      //create index without redux
      shell.echo(indexWithoutRedux.content).to("src/index.js")
      //create routes
      shell.echo(routes.content).to("src/app/Routes.js");
    }

    shell.echo(indexCss.content).to("src/index.css")
    shell.echo(App.content).to("src/app/App.js");

    //create 2 screens for exp
    createInitialScreens(isUseRedux)

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
