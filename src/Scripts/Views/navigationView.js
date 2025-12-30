let logoImage = new URL("../../Images/Logo.svg", import.meta.url);
export class Navigation {
    #header = document.querySelector("header");
    // #sectionHowToUse;
    renderNavigation() {
        let html = `<nav><a href="#"><img src="${logoImage}">Qarshilik</a><ul class="links"><li><a href="#how-to">Foydalanish usuli</a></li><li><a
                href="#resistor-calculator">Qarshilik kalkulyatori</a></li></ul></nav>`;
        this.#header.insertAdjacentHTML("afterbegin", html);
    }
    addScrollBehaviorToTheNavigation() {
        let navLinks = document.querySelector("nav ul");
        navLinks.addEventListener("click", function (e) {
            e.preventDefault();

            let link = e.target;
            if (link.tagName !== "A") return;
            let id = link.getAttribute("href");
            document.querySelector(id).scrollIntoView({ behavior: "smooth" });
        });
    }
}

