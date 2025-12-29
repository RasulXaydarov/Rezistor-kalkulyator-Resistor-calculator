import GeneralElements from "./generalElementsView";
import colorsImage from "url:../../Images/ColorPicker.png" with {type: "image/png"};
let horizontalRule = document.querySelector("hr");

const generalElements = new GeneralElements();
class ResistorCalculator {
    #header = document.querySelector("header");
    #parentElement = document.querySelector("main");
    setAttributeOfTheHR() {
        horizontalRule.setAttribute("noshade", "");
    }
    addTitleToTheHero() {
        let html = `<h1>Resistor liniyalarining rangini tanlang va qarshiligini toping.</h1>`;
        this.#header.insertAdjacentHTML("beforeend", html);
    }
    #addSectionHowToUse() {
        let html = `<section class="container" id="how-to">
            <aside>
                <h2>Qanday qilib resistorning qarshiligi topiladi.</h2>
                <p>Siz rezistorning qarshiligini topish uchun yo to‘rtburchak shakldagi rangli qismni bosishingiz
                    kerak, yo rangli liniyalardan birini tanlashingiz kerak. Rangli liniyani tanlab uni sichqonchaning
                    chap tugmasini bosganingizdan keyin ranglardan birini tanlashingiz kerak. Siz faqat quyiroqdagi
                    qo‘shimcha ranglarni tanlashingiz mumkin.</p>
            </aside>
            <figure><img src="${colorsImage}"
                    alt="Ranglardan qaysi rangni tanlsh kerakligi ko‘rsatilgan.">
                <figcaption>Rezistorning liniyasining ranglari</figcaption>
            </figure>
        </section>`;
        this.#parentElement.insertAdjacentHTML("afterbegin", html);
    }
    renderResistorCalculator() {
        generalElements.renderGeneralElements();
        this.addTitleToTheHero();
        this.#addSectionHowToUse();
        this.setAttributeOfTheHR();
    }
}

export default ResistorCalculator;