let logoImage = new URL("../../Images/Logo.svg", import.meta.url);
class Navigation {
    #header = document.querySelector("header");
    renderNavigation() {
        let html = `<nav><a href="#"><img src="${logoImage}">Qarshilik</a><a href="#how-to">Foydalanish usuli</a><a
                href="#resistor-calculator">Qarshilik kalkulyatori</a></nav>`;
        this.#header.insertAdjacentHTML("afterbegin", html);
    }
}
export default Navigation;