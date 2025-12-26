import GeneralElements from "./generalElementsView";
let horizontalRule = document.querySelector("hr");

const generalElements = new GeneralElements();
class ResistorCalculator {
    setAttributeOfTheHR() {
        horizontalRule.setAttribute("noshade", "");
    }
    renderResistorCalculator() {
        generalElements.renderGeneralElements();
        this.setAttributeOfTheHR();
    }
}

export default ResistorCalculator;