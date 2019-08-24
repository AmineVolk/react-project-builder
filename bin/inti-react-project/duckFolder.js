var shell = require("shelljs");
const { actions } = require("../data/actions")
const { types } = require("../data/types")
const { reducer } = require("../data/reducer")


const createDuckFolder = () => {
    shell.mkdir("src/app/duck");
    shell.echo(actions.content).to("src/app/duck/actions")
    shell.echo(types.content).to("src/app/duck/types")
    shell.echo(reducer.content).to("src/app/duck/reducer")

};

module.exports = { createDuckFolder };
