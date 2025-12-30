import { Navigation } from "./navigationView";
let navigation = new Navigation();

class GeneralElements {
    renderGeneralElements() {
        navigation.renderNavigation();
    }
    addScrollBehavior() {
        navigation.addScrollBehaviorToTheNavigation();
    }
}

export default GeneralElements;
