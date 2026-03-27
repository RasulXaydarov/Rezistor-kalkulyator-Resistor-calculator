import { Navigation } from "./navigationView";
import FooterView from "./footerView";
let spinnerImage = new URL("url:../../Images/Icons/spinner-gap.svg", import.meta.url);

class GeneralElements {
    #navigation;
    renderGeneralElements() {
        let navigation = new Navigation();
        this.#navigation = navigation;
        let footer = new FooterView();
        navigation.renderNavigation();
        footer.renderFooter();
    }
    addScrollBehavior() {
        this.#navigation.addScrollBehaviorToTheNavigation();
    }
    renderSpinner(parentElement) {
        const h2 = parentElement.children[0];
        const picture = document.createElement("picture");
        picture.classList.add("spinner");
        const image = new Image();
        image.src = spinnerImage;
        image.alt = "Sekin ma'lumotlar qabul qilayotganligi tufayli hali tayyor bo‘lmaganini bildirish uchun aylanayotgan tasavvuriy surat";
        picture.appendChild(image);
        const markup = `
        <picture class="spinner">
            <img src="${spinnerImage}" 
            alt="Sekin ma'lumotlar qabul qilayotganligi tufayli hali tayyor bo‘lmaganini bildirish uchun aylanayotgan tasavvuriy surat">
        </picture>`;
        h2.after(picture);
    }
}

export default GeneralElements;
