var shell = require("shelljs");
const pretty =require("pretty-format")
module.exports.checkAddScreenOptions=(option)=>{
  
    if(typeof option.name != "string" && typeof option.path != "string" && typeof option.useRedux != "string"){
      shell.echo(`error : unknown option ${JSON.stringify(option)}`);
      return false;
    }
    else if(typeof option.name != "string" || typeof option.path != "string"){
      shell.echo(`error : --name & --path required`);
      return false;;
    }else{
      return true;
    }
  }

  module.exports.checkInitProjectOptions=(option)=>{
    if(typeof option.name != "string"){
      shell.echo(`error : option --name required`);
      return false;
    }
    return true
  }