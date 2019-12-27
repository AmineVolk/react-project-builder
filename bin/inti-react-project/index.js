#!/usr/bin/env node

var shell = require("shelljs");
shell.config.silent = true;
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
const { createInitialScreens } = require("./createInitialScreens");
const jsconfig = require("../data/jsconfig.js");
const eslint = require("../data/eslintrc");
const editorconfig = require("../data/editorconfig");

const pretty = require("pretty-format")
const { checkInitProjectOptions } = require("../helper/checkOptions")
program
  .arguments("init-project")
  .option("--name <projectname>", "The project name")
  .option("--use-redux <yes/no>", "Project use redux")
  .action((arg, options) => {

    if (checkInitProjectOptions(options)) {
      shell.echo(`Initializing project ${program.name} ....`);
      const isUseRedux = program.useRedux != undefined && program.useRedux === "yes";
      shell.mkdir(`${program.name}`);
      shell.cd(`${program.name}`)

      createPackageFile(program.name, isUseRedux);

      //init folders
      shell.mkdir("src");
      shell.mkdir("src/app");
      shell.mkdir("src/app/screens");
      shell.mkdir("src/app/config");
      shell.mkdir("src/app/util");
      shell.mkdir("src/app/components");
      shell.mkdir("src/app/res")
      shell.mkdir("public");

      //init files
      shell.ShellString(R.content).to("src/app/res/R.js")
      shell.ShellString(indexHtml.content).to("public/index.html");
      shell.ShellString(history.content).to("src/app/history.js");
      shell.ShellString(jsconfig.content).to("jsconfig.json");
      shell.ShellString(JSON.stringify(eslint.content)).to(".eslintrc.json");
      shell.ShellString(editorconfig.content).to(".editorconfig");


      shell.mkdir("src/app/screens/screenExp1");
      shell.mkdir("src/app/screens/home");

      if (isUseRedux) {
        createDuckFolder();
        //create combineReducers
        shell.ShellString(reducers.content).to("src/reducers.js");
        //create index with redux
        shell.ShellString(indexWithRedux.content).to("src/index.js")
        shell.ShellString(routesWithRedux.content).to("src/app/Routes.js");

      } else {
        //create index without redux
        shell.ShellString(indexWithoutRedux.content).to("src/index.js")
        //create routes
        shell.ShellString(routes.content).to("src/app/Routes.js");
      }

      shell.ShellString(indexCss.content).to("src/index.css")
      shell.ShellString(App.content).to("src/app/App.js");

      //create 2 screens for exp
      createInitialScreens(isUseRedux)

      //create simple navBar
      shell.mkdir("src/app/components/navBar");
      shell.ShellString(navBar.content).to("src/app/components/navBar/index.jsx");

      //create simple footer
      shell.mkdir("src/app/components/footer");
      shell.ShellString(footer.content).to("src/app/components/footer/index.jsx");

      //create res folder
      shell.ShellString(Colors.content).to("src/app/res/Colors.js");
      shell.touch("src/app/res/Strings.js");

      //create config for the project
      shell.ShellString(JSON.stringify({ isUseRedux })).to("src/app/config/rpbConfig.json");
      shell.echo(`Project ${program.name} created successfully`);
    }

  })
  .parse(process.argv);
