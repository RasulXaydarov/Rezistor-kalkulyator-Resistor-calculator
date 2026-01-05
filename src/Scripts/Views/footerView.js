let logoImage = new URL("../../Images/Logo.svg", import.meta.url);
class FooterView {
    #parentElement = document.querySelector("footer");
    #year;
    #addDate() {
        this.#year = new Date().getFullYear();
    }
    #addCopyrightToTheFooter() {
        this.#addDate();
        let small = document.createElement("small");
        small.innerText = `© ${this.#year} designed by Chavandoz`;
        this.#parentElement.append(small);
    };
    renderFooter() {
        let logo = `<a class="logo" href="#"><img src="${logoImage}">Qarshilik</a>`;
        this.#parentElement.insertAdjacentHTML("afterbegin", logo);
        this.#addCopyrightToTheFooter();
    }
}
export default FooterView;