import GeneralElements from "./generalElementsView";
import colorsImage from "url:../../Images/ColorPicker.png" with {type: "image/png"};
import resistorLittleImageThreeLines from "url:../../Images/ResistorLittleImages/image-resistor-3.png" with {type: "image/png"};
import resistorLittleImageFourLines from "url:../../Images/ResistorLittleImages/image-resistor-4.png" with {type: "image/png"};
import resistorLittleImageFiveLines from "url:../../Images/ResistorLittleImages/image-resistor-5.png" with {type: "image/png"};
import resistorLittleImageSixLines from "url:../../Images/ResistorLittleImages/image-resistor-6.png" with {type: "image/png"};
import resistorNoLines from "url:../../Images/ResistorNoLines.png" with {type: "image/png"};
import arrowImageSrc from "url:../../Images/Arrow.gif" with {type: "image/gif"};
import errorIconURL from "url:../../Images/Icons/warning-diamond.svg" with {type: "image/svg + xml"};

let button = document.querySelector("form button[class=\"submit\"]");
let buttonsOfColors = document.querySelectorAll("div button");
buttonsOfColors = Array.from(buttonsOfColors);
let colorsOfTheLines = {};
colorsOfTheLines.numberOfLines = 3;
const imageLinesThreeURL = new URL("../../Images/Lines-3.png", import.meta.url);
const imageLinesFourURL = new URL("../../Images/Lines-4.png", import.meta.url);
const imageLinesFiveURL = new URL("../../Images/Lines-5.png", import.meta.url);
const imageLinesSixURL = new URL("../../Images/Lines-6.png", import.meta.url);
//  Switch operator for converting color to the named color 
function changeTheColorToTheNamedColor(color) {
    let namedColor;
    switch (color) {
        case "#000000":
            namedColor = "Black";
            break;
        case "#A52A2A":
            namedColor = "Brown";
            break;
        case "#FF0000":
            namedColor = "Red";
            break;
        case "#FFA500":
            namedColor = "Orange";
            break;
        case "#FFFF00":
            namedColor = "Yellow";
            break;
        case "#008000":
            namedColor = "Green";
            break;
        case "#0000FF":
            namedColor = "Blue";
            break;
        case "#800080":
            namedColor = "Purple";
            break;
        case "#808080":
            namedColor = "Gray";
            break;
        case "#FFFFFF":
            namedColor = "White";
            break;
        case "#FFD700":
            namedColor = "Gold";
            break;
        case "#C0C0C0":
            namedColor = "Silver";
            break;
    }
    return namedColor;
};

function calculateTheResistor(data, dataForTheColors) {
    let resistance;
    let firstLine, secondLine, thirdLine, numberOfZeroLine, thePossibleMistake, theCoefficientOfTheTemperature;
    firstLine = data.theFirstLine.color.toLowerCase();
    secondLine = data.theSecondLine.color.toLowerCase();
    numberOfZeroLine = data.theNumberOfZero.color.toLowerCase();
    resistance = `${dataForTheColors.theFirstLine[`${firstLine}`]}` + dataForTheColors.theSecondLine[`${secondLine}`];
    resistance = +resistance;

    if (data.numberOfLines === 3) numberOfZeroLine = data.theThirdLine.color.toLowerCase();
    let zero = dataForTheColors.theNumberOfZero[`${numberOfZeroLine}`];
    if (data.numberOfLines === 3) resistance = resistance * 10 ** zero;
    if (data.numberOfLines === 3) return { resistance: resistance };

    if (data.numberOfLines === 4 || data.numberOfLines === 5 || data.numberOfLines === 6) thirdLine = data.theThirdLine.color.toLowerCase();
    if (data.numberOfLines === 4 || data.numberOfLines === 5 || data.numberOfLines === 6) resistance = resistance + `${dataForTheColors.theThirdLine[`${thirdLine}`]}`;
    if (data.numberOfLines === 4 || data.numberOfLines === 5 || data.numberOfLines === 6) resistance = +resistance;
    if (data.numberOfLines === 4 || data.numberOfLines === 5 || data.numberOfLines === 6) resistance = resistance * 10 ** dataForTheColors.theNumberOfZero[`${numberOfZeroLine}`];
    if (data.numberOfLines === 4) return { resistance: resistance }
    if (data.numberOfLines === 5 || data.numberOfLines === 6) thePossibleMistake = data.thePossibleMistake.color.toLowerCase();
    if (data.numberOfLines === 5 || data.numberOfLines === 6) thePossibleMistake = dataForTheColors.thePossibleMistake[`${thePossibleMistake}`];
    if (data.numberOfLines === 5) return {
        resistance: resistance,
        thePossibleMistake: thePossibleMistake
    };
    if (data.numberOfLines === 6) theCoefficientOfTheTemperature = data.theCoefficientOfTheTemperature.color.toLowerCase();
    if (data.numberOfLines === 6) theCoefficientOfTheTemperature = dataForTheColors.theCoefficientOfTheTemperature[`${theCoefficientOfTheTemperature}`] + "℃";
    if (data.numberOfLines === 6) return {
        resistance: resistance,
        thePossibleMistake: thePossibleMistake,
        theCoefficientOfTheTemperature: theCoefficientOfTheTemperature
    };
}
function showTheResultInTheDialog(dialog, data) {
    dialog.innerText = `Qarshilik ${data.resistance} Om`;

    if (data.thePossibleMistake) dialog.innerText = `Qarshilik ${data.resistance} Om va mumkin bo‘lgan xatoligi ${data.thePossibleMistake}`;

    if (data.thePossibleMistake && data.theCoefficientOfTheTemperature) dialog.innerText = `Qarshilik ${data.resistance} Om, mumkin bo‘lgan xatoligi ${data.thePossibleMistake}, temperatura koeffitsiyenti ${data.theCoefficientOfTheTemperature}`;
}

const generalElements = new GeneralElements();
class ResistorCalculator {
    #header = document.querySelector("header");
    #parentElement = document.querySelector("main");
    menu;
    _rectangles;
    #horizontalRule;
    dialog;
    _resistorColors = {
        numberOfLines: 3,
    };
    _data;
    lines;
    _buttonsOfColors;
    theListOfTheResistance = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        purple: 7,
        gray: 8,
        white: 9,
        gold: null,
        silver: null
    };
    theListOfTheResistanceForTheFirstLine = structuredClone(this.theListOfTheResistance);
    theListForNumberOfZero = structuredClone(this.theListOfTheResistance);
    thePossibleMistake = {
        black: null,
        brown: "±1%",
        red: "±2%",
        orange: "±3%",
        yellow: "±4%",
        green: "±0.5%",
        blue: "±0.25%",
        purple: "±0.1%",
        gray: "±0.05%",
        white: null,
        gold: "±5%",
        silver: "±10%"
    }
    theCoefficientOfTheTemperature = {
        black: null,
        brown: 100,
        red: 50,
        orange: 15,
        yellow: 25,
        green: null,
        blue: 10,
        purple: 5,
        gray: null,
        white: null,
        gold: null,
        silver: null
    }
    _dataForColorsOfTheResistor;
    _result;
    #errorMessage = "Kechirasiz xatolik bo‘ldi. Rezistorni rasmi kelmadi";
    constructor() {
        this.theListOfTheResistanceForTheFirstLine.black = "";
        this.theListForNumberOfZero.gold = -1;
        this.theListForNumberOfZero.silver = -2;
        this._dataForColorsOfTheResistor = {
            theFirstLine: this.theListOfTheResistanceForTheFirstLine,
            theSecondLine: this.theListOfTheResistance,
            theThirdLine: this.theListOfTheResistance,
            theNumberOfZero: this.theListForNumberOfZero,
            thePossibleMistake: this.thePossibleMistake,
            theCoefficientOfTheTemperature: this.theCoefficientOfTheTemperature
        }
    }
    addTitleToTheHero() {
        const html = `<h1>Resistor liniyalarining rangini tanlang va qarshiligini toping.</h1>`;
        this.#header.insertAdjacentHTML("beforeend", html);
    }
    #addSectionHowToUse() {
        const html = `<section class="container" id="how-to">
            <aside>
                <h2>Qanday qilib resistorning qarshiligi topiladi.</h2>
                <p>Siz rezistorning qarshiligini topish uchun yo rezistor pastidagi to‘rtburchak shaklni bosishingiz
                    kerak, yo rangli liniyalardan birini tanlashingiz kerak. Rangli liniyani tanlab uni sichqonchaning
                    chap tugmasini bosganingizdan keyin ranglardan birini tanlashingiz kerak. Siz faqat quyidagi
                    to‘rtburchak shakldagi ranglarni tanlashingiz mumkin. Rezistorning ranglarini tanlab bo‘lganingizdan keyin pastroqdagi sariq rangli hisoblamoq tugmasini bosing.</p>
            </aside>
            <figure><img src="${colorsImage}"
                    alt="Ranglardan qaysi rangni tanlsh kerakligi ko‘rsatilgan.">
                <figcaption>Rezistorning liniyasining ranglari</figcaption>
            </figure>
        </section>`;
        this.#parentElement.insertAdjacentHTML("afterbegin", html);
        const howToUseSection = document.querySelector("#how-to");
        const arrowImage = new Image();
        arrowImage.src = arrowImageSrc;
        arrowImage.classList.add("arrow");
        howToUseSection.appendChild(arrowImage);
    }
    #addResistorCalculatorSection() {
        const html = `<section class="container" id="resistor-calculator">
            <h2>Qarshilikni o‘lchaydigan kalkulyator</h2>
             <menu>
                 <button data-number="3"><img src="${resistorLittleImageThreeLines}">3 ta chiziq</button>
                 <button data-number="4"><img src="${resistorLittleImageFourLines}">4 ta chiziq</button>
                 <button data-number="5"><img src="${resistorLittleImageFiveLines}">5 ta chiziq</button>
                 <button data-number="6"><img src="${resistorLittleImageSixLines}">6 ta chiziq</button>
             </menu> 
                <rectangle class="line-1" data-line="line-1"></rectangle>
                <rectangle class="line-2" data-line="line-2"></rectangle>
                <rectangle class="line-3" data-line="line-3"></rectangle>
                <rectangle class="line-4" data-line="line-4"></rectangle>
                <rectangle class="line-5" data-line="line-5"></rectangle>
                <rectangle class="line-6" data-line="line-6"></rectangle>
                <picture class="resistor-image"><img src="${resistorNoLines}" alt="Rezistorni o‘lchaydigan kalkulyatorning rasmi"></picture>
                <picture data-line="lines">
                    <img src="${imageLinesThreeURL}" alt="Rezistorning rasmi" data-number="3">
                </picture>
                <form>
                    <button data-jscolor="{preset:'threeLines', onChange: 'change(this)'}" data-color="color-1" data-number=\"1\"></button>
                    <button data-jscolor="{preset:'threeLines', onChange: 'change(this)'}" data-color="color-2" data-number=\"2\"></button>
                    <button data-jscolor="{preset:'threeLines', onChange: 'change(this)'}" data-color="color-3" data-number=\"3\"></button>
                    <button data-jscolor="{preset:'numberOfZeros', onChange: 'change(this)'}" data-color="color-4" data-number=\"4\"></button>
                    <button data-jscolor="{preset: 'mistake', onChange: 'change(this)'}" data-color="color-5" data-number=\"5\"></button>
                    <button data-jscolor="{preset:'theCoeffitientOfTheTemperature', onChange: 'change(this)'}" data-color="color-6" data-number=\"6\"></button>
                    <button>Qarshilik hisoblamoq</button>
                </form>
                <dialog>Hisobning natijasi</dialog>
        </section>`;
        this.#parentElement.insertAdjacentHTML("beforeend", html);
    }
    #showTheDialog() {
        this.dialog = document.querySelector("dialog");
        this.dialog.show();
    }
    #changeTheButtonThreeLinesToActive() {
        this.menu = document.querySelector("section:nth-child(2) menu");
        let buttonThreeLines = this.menu.children[0];

        buttonThreeLines.classList.add("active");
        this.addSomeLines(buttonThreeLines.attributes[0].value);
    };
    addEventToTheMenu() {
        let resistorObject = this;
        this.menu.addEventListener("click", function (e) {
            e.preventDefault();
            let button = e.target.closest("button");
            let buttonActive = document.querySelector("menu .active");
            if (buttonActive)
                buttonActive.classList.remove("active");
            button.classList.add("active");
            resistorObject.addSomeLines(button.attributes[0].value);
        });
    }
    addSomeLines(number) {
        this._rectangles = document.querySelectorAll("rectangle");
        this._rectangles = Array.from(this._rectangles);
        this._buttonsOfColors = document.querySelectorAll("form button");
        this._buttonsOfColors = Array.from(this._buttonsOfColors);
        this._buttonsOfColors.splice(-1);
        this._resistorColors.numberOfLines = +number;
        this._rectangles.forEach(rectangle => rectangle.classList.add("hidden"));
        this._buttonsOfColors.forEach(buttonOfColor => buttonOfColor.classList.add("hidden"));
        let indexNumber;
        this._rectangles.forEach(rectangle => {
            indexNumber = this._rectangles.indexOf(rectangle) + 1;
            if (indexNumber <= this._resistorColors.numberOfLines)
                rectangle.classList.remove("hidden");
        });
        let resistorImageLines = document.querySelector("picture[data-line=\"lines\"]");
        this.#changeTheLinesBelowTheResistor(resistorImageLines);

        this._buttonsOfColors.forEach(buttonOfColor => {
            if (+buttonOfColor.attributes[2].value <= this._resistorColors.numberOfLines)
                buttonOfColor.classList.remove("hidden");
        });
    };
    #changeTheLinesBelowTheResistor(resistorImageLines) {
        switch (this._resistorColors.numberOfLines) {
            case 3:
                resistorImageLines.children[0].src = imageLinesThreeURL;
                break;
            case 4:
                resistorImageLines.children[0].src = imageLinesFourURL;
                break;
            case 5:
                resistorImageLines.children[0].src = imageLinesFiveURL;
                break;
            case 6:
                resistorImageLines.children[0].src = imageLinesSixURL;
                break;
        }
    };
    #addHorizontalLine() {
        const horizontalRule = document.createElement("hr");
        this.#parentElement.append(horizontalRule);
        this.#horizontalRule = document.querySelector("hr");
    }
    #setAttributeOfTheHR() {
        this.#horizontalRule.setAttribute("noshade", "");
    }
    #getColorsOfTheInput() {
        let dialog = this.dialog;
        let dataForColorsOfTheResistor = this._dataForColorsOfTheResistor;
        let form = document.querySelector("form");
        let countTheResistorButton = document.querySelector("form button:last-child");
        let resistorColors = this._resistorColors;
        countTheResistorButton.addEventListener("click", function (e) {
            e.preventDefault();

            this._data = Array.from(form).slice(0, -1);
            resistorColors.theFirstLine = {
                color: changeTheColorToTheNamedColor(this._data[0].dataset.currentColor),
            };
            resistorColors.theSecondLine = {
                color: changeTheColorToTheNamedColor(this._data[1].dataset.currentColor),
            };
            resistorColors.theThirdLine = {
                color: changeTheColorToTheNamedColor(this._data[2].dataset.currentColor),
            };
            resistorColors.theNumberOfZero = {
                color: changeTheColorToTheNamedColor(this._data[3].dataset.currentColor),
            };
            resistorColors.thePossibleMistake = {
                color: changeTheColorToTheNamedColor(this._data[4].dataset.currentColor),
            };
            resistorColors.theCoefficientOfTheTemperature = {
                color: changeTheColorToTheNamedColor(this._data[5].dataset.currentColor),
            };
            this._result = calculateTheResistor(resistorColors, dataForColorsOfTheResistor);
            showTheResultInTheDialog(dialog, this._result);
        });
    };
    changeThecolorOfTheLines() {
        this.lines = document.querySelectorAll("rectangle");
        this.lines = Array.from(this.lines);
        let color;
        let buttonColor;
        let section = document.querySelector("section:nth-child(2)");
        section.addEventListener("click", function (e) {
            e.preventDefault();
            let line = e.target;
            if (line.tagName !== "RECTANGLE") return;
            line.addEventListener("click", function (e) {
                e.preventDefault();
                let numberLine, numberColorPicker;
                numberLine = line.className.slice(5);
                buttonColor = document.querySelector(`form button[data-color="color-${numberLine}"]`);
                buttonColor.jscolor.show();
                let dataColor = buttonColor.attributes[1].nodeValue;
                numberColorPicker = dataColor.slice(6);
                color = buttonColor.dataset.currentColor;
            });
            line.click();
        });
    };
    removeSpinner() {
        let removeSpinner = setInterval(() => {
            if (!document.querySelector(".spinner")) return;
            if (document.querySelector("#resistor-calculator .resistor-image img").complete) document.querySelector(".spinner").remove();
        }, 200);
        setTimeout(() => { clearInterval(removeSpinner) }, 800);
    }
    renderError() {
        const resistorPicture = document.querySelector(".resistor-image");
        console.log(resistorPicture.children[0]);
        const errorIcon = new Image();
        errorIcon.src = errorIconURL;
        const cleanSection = this.cleanSection;
        const errorMessage = this.#errorMessage;
        const section = resistorPicture.parentElement;
        resistorPicture.children[0].addEventListener("error", function (e) {
            section.style.gridTemplateColumns = "1fr";
            section.style.justifyItems = "center";
            e.preventDefault();
            console.log(e);
            let p = document.createElement("p");
            p.innerText = errorMessage;
            p.prepend(errorIcon);
            cleanSection(resistorPicture);
            section.append(p);
        });
    }
    cleanSection(element) {
        const section = element.parentElement;
        const sectionElements = Array.from(section.children);
        sectionElements.forEach(el => el.remove());
    }
    renderResistorCalculator() {
        generalElements.renderGeneralElements();
        this.addTitleToTheHero();
        this.#addSectionHowToUse();
        this.#addResistorCalculatorSection();
        const sectionResistor = document.querySelector("#resistor-calculator");
        generalElements.renderSpinner(sectionResistor);
        this.removeSpinner();
        this.#changeTheButtonThreeLinesToActive();
        this.addEventToTheMenu();
        this.#showTheDialog();
        this.#addHorizontalLine();
        generalElements.addScrollBehavior();
        this.#setAttributeOfTheHR();
        this.#getColorsOfTheInput();
        this.changeThecolorOfTheLines();
        this.renderError();
    }
}

export default ResistorCalculator;