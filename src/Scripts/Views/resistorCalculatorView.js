import GeneralElements from "./generalElementsView";
import colorsImage from "url:../../Images/ColorPicker.png" with {type: "image/png"};
import resistorImage from "url:../../Images/Resistor.png" with {type: "image/png"};

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
    console.log(data, dataForTheColors);
    // the resistor has three lines
    let firstLine, secondLine, thirdLine, numberOfZero, thePossibleMistake, theCoefficientOfTheTemperature;
    firstLine = data.theFirstLine.color.toLowerCase();
    secondLine = data.theSecondLine.color.toLowerCase();
    numberOfZero = data.theNumberOfZero.color.toLowerCase();
    resistance = `${dataForTheColors.theFirstLine[`${firstLine}`]}` + dataForTheColors.theSecondLine[`${secondLine}`];
    // resistance = +resistance;
    // resistance = resistance * 10 ** dataForTheColors.theNumberOfZero[`${numberOfZero}`];
    // The resistor has four lines
    thirdLine = data.theThirdLine.color.toLowerCase();
    resistance = resistance + dataForTheColors.theThirdLine[`${thirdLine}`];
    resistance = resistance * 10 ** dataForTheColors.theNumberOfZero[`${numberOfZero}`];
    // console.log(resistance);

    // The  resistor has five lines
    thePossibleMistake = data.thePossibleMistake.color.toLowerCase();
    thePossibleMistake = dataForTheColors.thePossibleMistake[`${thePossibleMistake}`];

    // The resistor has six lines
    theCoefficientOfTheTemperature = data.theCoefficientOfTheTemperature.color.toLowerCase();
    theCoefficientOfTheTemperature = dataForTheColors.theCoefficientOfTheTemperature[`${theCoefficientOfTheTemperature}`] + "℃";
    // console.log("data", this._dataForColorsOfTheResistor);
    return {
        resistance: resistance,
        thePossibleMistake: thePossibleMistake ? thePossibleMistake : "",
        theCoefficientOfTheTemperature: theCoefficientOfTheTemperature ? theCoefficientOfTheTemperature : ""
    };
}
function showTheResultInTheDialog(dialog, data) {
    dialog;
    // The resistor has three lines
    dialog.innerHTML = `Qarshilik ${data.resistance} Om`;
    // The resistor has four lines
    dialog.innerHTML = `Qarshilik ${data.resistance} Om`;
    // The resistor has Five lines
    // The resistor has six lines
}

const generalElements = new GeneralElements();
class ResistorCalculator {
    #header = document.querySelector("header");
    #parentElement = document.querySelector("main");
    #horizontalRule;
    dialog;
    #countTheResistorButton;
    _resistorColors = {
    };
    _data;
    lines;
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
    _result;
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
                    chap tugmasini bosganingizdan keyin ranglardan birini tanlashingiz kerak. Siz faqat quyidagi
                    ranglarni tanlashingiz mumkin.</p>
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
                <button data-jscolor="{preset:'threeLines', onChange: 'change(this)'}" data-color="color-1"></button>
                <button data-jscolor="{preset:'threeLines', onChange: 'change(this)'}" data-color="color-2"></button>
                <button data-jscolor="{preset:'threeLines', onChange: 'change(this)'}" data-color="color-3"></button>
                <button data-jscolor="{preset:'numberOfZeros', onChange: 'change(this)'}" data-color="color-4"></button>
                <button data-jscolor="{preset: 'mistake', onChange: 'change(this)'}" data-color="color-5"></button>
                <button data-jscolor="{preset:'theCoeffitientOfTheTemperature', onChange: 'change(this)'}" data-color="color-6"></button>
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
    #addHorizontalLine() {
        const horizontalRule = document.createElement("hr");
        this.#parentElement.append(horizontalRule);
    }
    #getColorsOfTheInput() {
        // let button
        this.#countTheResistorButton = document.querySelector("section form button");

        let dialog = this.dialog;
        let dataForColorsOfTheResistor = this._dataForColorsOfTheResistor;
        let form = document.querySelector("form");
        let buttonOfTheForm = document.querySelector("form button:last-child");
        buttonOfTheForm.addEventListener("click", function (e) {
            e.preventDefault();

            console.log(e.target.parentElement);
            console.log(dialog);
            this._data = Array.from(form).slice(0, -1);
            this._resistorColors = {
                theFirstLine: {
                    color: changeTheColorToTheNamedColor(this._data[0].dataset.currentColor),
                },
                theSecondLine: {
                    color: changeTheColorToTheNamedColor(this._data[1].dataset.currentColor),
                },
                theThirdLine: {
                    color: changeTheColorToTheNamedColor(this._data[2].dataset.currentColor),
                },
                theNumberOfZero: {
                    color: changeTheColorToTheNamedColor(this._data[3].dataset.currentColor),
                },
                thePossibleMistake: {
                    color: changeTheColorToTheNamedColor(this._data[4].dataset.currentColor),
                },
                theCoefficientOfTheTemperature: {
                    color: changeTheColorToTheNamedColor(this._data[5].dataset.currentColor),
                },
            };
            console.log(this._resistorColors);
            this._result = calculateTheResistor(this._resistorColors, dataForColorsOfTheResistor);
            showTheResultInTheDialog(dialog, this._result);
            console.log(this._result);

        });
        return this._data;
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

    /* 
    1)Add the data to the object
    2)Calculate the resistance 
    3) The resistor can have three lines, four lines, five lines or six lines. We should calculate for any any type of the resistor
    
    1) Take the array data and set the data into the object;
    2) Change the value of the color with function

    
 
    1) Set and calculate the resistor's data and resistance. Return the correct result for resistor
    2) Show the result in the dialog
    3)We should easly able to choose the lines
 
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
        this.changeThecolorOfTheLines();
        // this.calculateTheResistor();

    }
}

export default ResistorCalculator;