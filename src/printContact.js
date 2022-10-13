export default function printContact() {
    const content = document.querySelector("#content");

    const firstContact = document.createElement("div");
    firstContact.className = "firstContact";
    firstContact.innerHTML = "6789998212";
    content.appendChild(firstContact);


}    