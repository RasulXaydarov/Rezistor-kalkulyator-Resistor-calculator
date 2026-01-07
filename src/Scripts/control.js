import ResistorCalculator from "./Views/resistorCalculatorView";
import { getResistorColors } from "./module";
// let dialog = document.querySelector("dialog");

async function controlResistorCalculator() {
    try {

        let resistorCalculator = new ResistorCalculator();
        resistorCalculator.renderResistorCalculator();

    } catch (error) {
        alert(error);
    }

};

function init() {
    controlResistorCalculator();
}
init();