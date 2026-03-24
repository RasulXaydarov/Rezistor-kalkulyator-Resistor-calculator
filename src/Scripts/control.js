import ResistorCalculator from "./Views/resistorCalculatorView";
import { getResistorColors } from "./module";

const second = 1;
function timeout() {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Ma'lumotlar juda ham sekin kelyapti. Ma'lumotlarni sekinlgini ${second} soniyadan keyin ko‘rsatilyapti.`), second * 1000);
        })
    })
}

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