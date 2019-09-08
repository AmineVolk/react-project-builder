var shell = require("shelljs");
const { getScreenExp } = require("../data/screenExp");
const { getScreenContainerExp } = require("../data/screenContainerExp")

module.exports.createInitialScreens = (isUseRedux) => {
    shell
        .ShellString(getScreenExp("screenExp1"))
        .to("src/app/screens/screenExp1/index.jsx");
    shell.ShellString(getScreenExp("home")).to("src/app/screens/home/index.jsx");

    if (isUseRedux) {
        shell.ShellString(getScreenContainerExp("home")).to("src/app/screens/home/homeContainer.js")
        shell.ShellString(getScreenContainerExp("screenExp1")).to("src/app/screens/screenExp1/screenExp1Container.js")
    }


};

