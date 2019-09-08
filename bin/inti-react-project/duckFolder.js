var shell = require("shelljs");
const { actions } = require("../data/withRedux/actions")
const { types } = require("../data/withRedux/types")
const { reducer } = require("../data/withRedux/reducer")


const createDuckFolder = () => {
    shell.mkdir("src/app/duck");
    shell.ShellString(actions.content).to("src/app/duck/actions.js")
    shell.ShellString(types.content).to("src/app/duck/types.js")
    shell.ShellString(reducer.content).to("src/app/duck/reducer.js")

};

module.exports = { createDuckFolder };
