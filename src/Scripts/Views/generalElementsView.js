import { Navigation } from "./navigationView";
import FooterView from "./footerView";

class GeneralElements {
    #navigation;
    renderGeneralElements() {
        let navigation = new Navigation();
        this.#navigation = navigation
        let footer = new FooterView();
        navigation.renderNavigation();
        footer.renderFooter();
    }
    addScrollBehavior() {
        this.#navigation.addScrollBehaviorToTheNavigation();
    }
}

export default GeneralElements;
