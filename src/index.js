import printMe from "./print.js";
import './style.css';

const content = document.querySelector("#content");

const navbar = document.createElement("div");
navbar.className = "navbar";
content.appendChild(navbar);

const home = document.createElement("div");
home.className = "home";
navbar.appendChild(home);

const menu = document.createElement("div");
menu.className = "menu";
navbar.appendChild(menu);

const contact = document.createElement("div");
contact.className = "contact";
navbar.appendChild(contact);


printMe();