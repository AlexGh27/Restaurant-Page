import './style.css';
import printHome from "./printHome.js";
import printMenu from "./printMenu.js";
import printContact from "./printContact.js";

const content = document.querySelector("#content");

const navbar = document.createElement("div");
navbar.className = "navbar";
content.appendChild(navbar);

const home = document.createElement("div");
home.className = "home";
home.innerHTML = "Home";
navbar.appendChild(home);

home.addEventListener("click", function(e) {
    clearContent();
    printHome();
})


const menu = document.createElement("div");
menu.className = "menu";
menu.innerHTML = "Menu";
navbar.appendChild(menu);

menu.addEventListener("click", function(e) {
    clearContent();
    printMenu();
})


const contact = document.createElement("div");
contact.className = "contact";
contact.innerHTML = "Contact";
navbar.appendChild(contact);

contact.addEventListener("click", function(e) {
    clearContent();
    printContact();
})

function clearContent() {
    document.querySelector("#content").innerHTML = "";
}

printHome();