import "./styles.css";
import { home } from "./Home.js"
import { menu } from "./Menu.js"
import { about } from "./About.js"; 

(function () {
    const homeTab = document.querySelector("#home");
    const menuTab = document.querySelector("#menu");
    const aboutTab = document.querySelector("#about");

    homeTab.addEventListener('click', () => {
        home();
    })

    menuTab.addEventListener('click', () => {
        menu();
    })

    aboutTab.addEventListener('click', () => {
        about();
    })

    home();
})();
