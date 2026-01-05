import ResistorCalculator from "./Views/resistorCalculatorView";
import { getResistorColors } from "./module";
// let dialog = document.querySelector("dialog");

async function controlResistorCalculator() {
    let resistorCalculator = new ResistorCalculator();
    resistorCalculator.renderResistorCalculator();

};


function init() {
    controlResistorCalculator();
}
init();