#!/usr/bin/env node

var shell = require("shelljs");
var program = require("commander");
const { getScreenExp } = require("../data/screenExp");
const { getScreenContainerExp } = require("../data/screenContainerExp")
const {checkAddScreenOptions}=require("../helper/checkOptions")


const addRouteInRoutesFile=(componentName,path,isUseRedux)=>{

    let lineToImportComponent=shell.exec('grep -n "import React from" src/app/Routes.js').stdout;
    lineToImportComponent=parseInt (lineToImportComponent.split(":")[0])+1;
    shell.echo(`lineToImportComponent ${lineToImportComponent} ${typeof lineToImportComponent}`);

    let route;

    if(isUseRedux){
      const importComponent=`import ${componentName} from "./screens/${componentName}/${componentName}Container.js"`;

      shell.exec(`sed -i.bak '${lineToImportComponent}i\\
      ${importComponent}\\
      ' src/app/Routes.js`).stdout;
    }else{
      const importComponent=`import ${componentName} from ./screens/${componentName}/index.jsx`;
      shell.exec(`sed -i.bak '${lineToImportComponent}i\\
      ${importComponent}\\
      ' src/app/Routes.js`).stdout;   
     }

    let lineToAddRouteInSwitch=shell.exec('grep -n "<Switch>" src/app/Routes.js').stdout;
    lineToAddRouteInSwitch=parseInt (lineToAddRouteInSwitch.split(":")[0])+1;
    shell.echo(`lineToAddRouteInSwitch ${lineToAddRouteInSwitch} ${typeof lineToAddRouteInSwitch}`);
    route=`<Route path="${path}" history={history} component={${componentName}} />`;

    shell.exec(`sed -i.bak '${lineToAddRouteInSwitch}i\\
      ${route}\\
      ' src/app/Routes.js`).stdout;   
}

program
  .arguments("add-screens")
  .option("--name <screenname>", "The screens name",undefined)
  .option("--path <screenpath>","The path to acces the screens",undefined)
  .option("--use-redux <yes/no>", "Screen component use redux",undefined)
  .action((argument,options) => {
    if(checkAddScreenOptions(options)){
      let name = program.name.replace(/^\w/, c => c.toUpperCase());
      const isUseRedux = program.useRedux != undefined && program.useRedux === "yes";
      shell.mkdir(`src/app/screens/${name}`);
      shell.ShellString(getScreenExp(name)).to(`src/app/screens/${name}/index.jsx`);
      
      if(isUseRedux){
        shell.ShellString(getScreenContainerExp(name)).
              to(`src/app/screens/${name}/${name}Container.js`)
      }

      addRouteInRoutesFile(name,program.path,isUseRedux);
      shell.echo(`Screen ${name} created successfully`);
    }
    

  })
  .parse(process.argv);
