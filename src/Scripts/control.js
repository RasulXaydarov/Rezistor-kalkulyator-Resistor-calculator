import ResistorCalculator from "./Views/resistorCalculatorView";
// let dialog = document.querySelector("dialog");
async function controlResistorCalculator() {
    let resistorCalculator = new ResistorCalculator();
    resistorCalculator.renderResistorCalculator();
    // dialog.show();
};


function init() {
    controlResistorCalculator();
}
init();