import GeneralElements from "./generalElementsView";
import colorsImage from "url:../../Images/ColorPicker.png" with {type: "image/png"};
import resistorImage from "url:../../Images/Resistor.png" with {type: "image/png"};
// let horizontalRule = document.querySelector("hr");


const generalElements = new GeneralElements();
class ResistorCalculator {
    #header = document.querySelector("header");
    #parentElement = document.querySelector("main");
    #horizontalRule;
    #dialog;
    #countTheResistorButton;
    _data;
    setAttributeOfTheHR() {
        this.#horizontalRule = document.querySelector("hr");
        this.#horizontalRule.setAttribute("noshade", "");
    }
    addTitleToTheHero() {
        const html = `<h1>Resistor liniyalarining rangini tanlang va qarshiligini toping.</h1>`;
        this.#header.insertAdjacentHTML("beforeend", html);
    }
    #addSectionHowToUse() {
        const html = `<section class="container" id="how-to">
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
    #addResistorCalculatorSection() {
        const html = `<section class="container" id="resistor-calculator">
            <h2>Qarshilikni o‘lchaydigan kalkulyator</h2>
            <rectangle class="line-1"></rectangle>
            <rectangle class="line-2"></rectangle>
            <rectangle class="line-3"></rectangle>
            <rectangle class="line-4"></rectangle>
            <rectangle class="line-5"></rectangle>
            <rectangle class="line-6"></rectangle>
            <picture><img src="${resistorImage}" alt="Rezistorni o‘lchaydigan kalkulyatorning rasmi"></picture>
            <form>
                <input type="color" list="three-lines">
                <input type="color" list="three-lines">
                <input type="color" list="three-lines">
                <input type="color" list="number-zero">
                <input type="color" list="mistake">
                <input type="color" list="temperature">
                <datalist id="three-lines">
                    <option value="Brown"></option>
                    <option value="Red"></option>
                    <option value="Orange"></option>
                    <option value="Yellow"></option>
                    <option value="Green"></option>
                    <option value="Blue"></option>
                    <option value="Purple"></option>
                    <option value="Grey"></option>
                    <option value="White"></option>
                </datalist>
                <datalist id="number-zero">
                    <option value="Black"></option>
                    <option value="Brown"></option>
                    <option value="Red"></option>
                    <option value="Orange"></option>
                    <option value="Yellow"></option>
                    <option value="Green"></option>
                    <option value="Blue"></option>
                    <option value="Purple"></option>
                    <option value="Grey"></option>
                    <option value="White"></option>
                    <option value="Gold"></option>
                    <option value="Silver"></option>
                </datalist>
                <datalist id="mistake">
                    <option value="Brown"></option>
                    <option value="Red"></option>
                    <option value="Orange"></option>
                    <option value="Yellow"></option>
                    <option value="Green"></option>
                    <option value="Blue"></option>
                    <option value="Purple"></option>
                    <option value="Grey"></option>
                    <option value="Gold"></option>
                    <option value="Silver"></option>
                </datalist>
                <datalist id="temperature">
                    <option value="Brown"></option>
                    <option value="Red"></option>
                    <option value="Orange"></option>
                    <option value="Yellow"></option>
                    <option value="Blue"></option>
                    <option value="Purple"></option>
                </datalist>
                <button>Qarshilik hisoblamoq</button>
            </form>
            <dialog>Hisobning natijasi</dialog>
        </section>`;
        this.#parentElement.insertAdjacentHTML("beforeend", html);
    }
    #showTheDialog() {
        this.#dialog = document.querySelector("dialog");
        this.#dialog.show();
    }
    #addHorizontalLine() {
        const horizontalRule = document.createElement("hr");
        this.#parentElement.append(horizontalRule);
    }
    #getColorsOfTheInput() {
        // let button
        this.#countTheResistorButton = document.querySelector("section form button");
        let form = document.querySelector("form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            this._data = e.explicitOriginalTarget.elements;
            this._data = Array.from(this._data);
            console.log(this._data);
        });
    }
    renderResistorCalculator() {
        generalElements.renderGeneralElements();
        this.addTitleToTheHero();
        this.#addSectionHowToUse();
        this.#addResistorCalculatorSection();
        this.#showTheDialog();
        this.#addHorizontalLine();
        generalElements.addScrollBehavior();
        this.setAttributeOfTheHR();
        this.#getColorsOfTheInput();
    }
}

export default ResistorCalculator;