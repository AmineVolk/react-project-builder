var shell = require("shelljs");

module.exports.isProjectCreated=()=>{
    const res =  shell.exec('[ ! -f "src/app/config/rpbConfig.json" ]  && echo "error"',{silent:true,async:false}).stdout;
    if(res==="error\n"){
        return false;
    }
    return true;
 }

 module.exports.isUsingRedux=()=>{
   const rpbConfig= require("src/app/config/rpbConfig.json");
   return rpbConfig.isUsingRedux;
 }

