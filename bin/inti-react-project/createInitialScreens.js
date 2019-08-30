var shell = require("shelljs");
const { getScreenExp } = require("../data/screenExp");
const { getScreenContainerExp } = require("../data/screenContainerExp")

module.exports.createInitialScreens = (isUseRedux) => {
    shell.echo(`createInitialScreens, isUseRedux ? : ${isUseRedux}`);
    shell
        .echo(getScreenExp("screenExp1"))
        .to("src/app/screens/screenExp1/index.jsx");
    shell.echo(getScreenExp("home")).to("src/app/screens/home/index.jsx");

    if (isUseRedux) {
        shell.echo(getScreenContainerExp("home")).to("src/app/screens/home/homeContainer.js")
        shell.echo(getScreenContainerExp("screenExp1")).to("src/app/screens/screenExp1/screenExp1Container.js")

    }


};

