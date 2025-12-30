import ResistorCalculator from "./Views/resistorCalculatorView";
let dialog = document.querySelector("dialog");
dialog.show();
async function controlResistorCalculator() {
    let resistorCalculator = new ResistorCalculator();
    resistorCalculator.renderResistorCalculator();
};


function init() {
    controlResistorCalculator();
}
init();