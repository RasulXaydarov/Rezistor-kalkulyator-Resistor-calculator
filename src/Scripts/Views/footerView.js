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
        small.innerText = `© ${this.#year} muallif Çavandoz`;
        this.#parentElement.append(small);
    };
    #addContact() {
        let p = document.createElement("p");
        p.innerText = "Elektron poçta: Çavandoz@proton.me";
        this.#parentElement.append(p);
    }
    renderFooter() {
        let logo = `<a class="logo" href="#"><img src="${logoImage}" alt="Logotip surati">Qarşilik</a>`;
        this.#parentElement.insertAdjacentHTML("afterbegin", logo);
        this.#addCopyrightToTheFooter();
        this.#addContact();
    }
}
export default FooterView;