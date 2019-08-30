var shell = require("shelljs");
const { actions } = require("../data/withRedux/actions")
const { types } = require("../data/withRedux/types")
const { reducer } = require("../data/withRedux/reducer")


const createDuckFolder = () => {
    shell.mkdir("src/app/duck");
    shell.echo(actions.content).to("src/app/duck/actions.js")
    shell.echo(types.content).to("src/app/duck/types.js")
    shell.echo(reducer.content).to("src/app/duck/reducer.js")

};

module.exports = { createDuckFolder };
