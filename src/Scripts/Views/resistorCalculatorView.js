let horizontalRule = document.querySelector("hr");

class ResistorCalculator {
    setAttributeOfTheHR() {
        horizontalRule.setAttribute("noshade", "");
    }
    renderResistorCalculator() {
        this.setAttributeOfTheHR();
    }
}

export default ResistorCalculator;