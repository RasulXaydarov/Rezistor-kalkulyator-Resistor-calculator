import GeneralElements from "./generalElementsView";
import colorsImage from "url:../../Images/ColorPicker.png" with {type: "image/png"};
import resistorImage from "url:../../Images/Resistor.png" with {type: "image/png"};
// let horizontalRule = document.querySelector("hr");

function changeTheColorToTheNamedColor(color) {
    let namedColor;
    switch (color) {
        case "#000000":
            namedColor = "Black";
            break;
        case "#a52a2a":
            namedColor = "Brown";
            break;
        case "#ff0000":
            namedColor = "Red";
            break;
        case "#ffa500":
            namedColor = "Orange";
            break;
        case "#ffff00":
            namedColor = "Yellow";
            break;
        case "#008000":
            namedColor = "Green";
            break;
        case "#0000ff":
            namedColor = "Blue";
            break;
        case "#800080":
            namedColor = "Purple";
            break;
        case "#808080":
            namedColor = "Gray";
            break;
        case "#ffffff":
            namedColor = "White";
            break;
        case "#ffd700":
            namedColor = "Gold";
            break;
        case "#c0c0c0":
            namedColor = "Silver";
            break;
    }
    return namedColor;
};

const generalElements = new GeneralElements();
class ResistorCalculator {
    #header = document.querySelector("header");
    #parentElement = document.querySelector("main");
    #horizontalRule;
    #dialog;
    #countTheResistorButton;
    _resistorColors = {

    }
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
                <button data-jscolor="{preset:'threeLines'}"></button>
                <button data-jscolor="{preset:'threeLines'}"></button>
                <button data-jscolor="{preset:'threeLines'}"></button>
                <button data-jscolor="{preset:'numberOfZeros'}"></button>
                <button data-jscolor="{preset: 'mistake'}"></button>
                <button data-jscolor="{preset:'theCoeffitientOfTheTemperature'}"></button>
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
    changeTheColorToTheNamedColor(color) {
        let namedColor;
        switch (color) {
            case "#000000":
                namedColor = "Black";
                break;
            case "#a52a2a":
                namedColor = "Brown";
                break;
            case "#ff0000":
                namedColor = "Red";
                break;
            case "#ffa500":
                namedColor = "Orange";
                break;
            case "#ffff00":
                namedColor = "Yellow";
                break;
            case "#008000":
                namedColor = "Green";
                break;
            case "#0000ff":
                namedColor = "Blue";
                break;
            case "#800080":
                namedColor = "Purple";
                break;
            case "#808080":
                namedColor = "Gray";
                break;
            case "#ffffff":
                namedColor = "White";
                break;
            case "#ffd700":
                namedColor = "Gold";
                break;
            case "#c0c0c0":
                namedColor = "Silver";
                break;
        }
        return namedColor;
    }
    #getColorsOfTheInput() {
        // let button
        this.#countTheResistorButton = document.querySelector("section form button");
        let form = document.querySelector("form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            this._data = e.explicitOriginalTarget.elements;
            this._data = Array.from(this._data);
            this._data = this._data.slice(0, -1);
            this._resistorColors = {
                theFirstLine: {
                    color: changeTheColorToTheNamedColor(this._data[0].value),
                },
                theSecondLine: {
                    color: changeTheColorToTheNamedColor(this._data[1].value),
                },
                theThirdLine: {
                    color: changeTheColorToTheNamedColor(this._data[2].value),
                },
                theNumberOfZero: {
                    color: changeTheColorToTheNamedColor(this._data[3].value),
                },
                thePossibleMistake: {
                    color: changeTheColorToTheNamedColor(this._data[4].value),
                },
                theCoefficientOfTheTemperature: {
                    color: changeTheColorToTheNamedColor(this._data[5].value),
                },
            }
            console.log(this._resistorColors);

        });
        return this._data;
        // this._data = data;
    }

    /* 
    1) Add the data to the object
    2)Calculate the resistance 
    3) The resistor can have three lines, four lines, five lines or six lines. We should calculate for any any type of the resistor
    
    1) Take the array data and set the data into the object;
    2) Change the value of the color with ternary operator


    */

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