export default function printHome() {
    
  const content = document.querySelector("#content");

  const description = document.createElement("p");
  description.className = "description";
  content.appendChild(description);
  description.innerHTML = "Imaginary specializes in delicious food featuring fresh ingredients and masterful preparation by the Imaginary culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, Imaginary's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates."

  const description2 = document.createElement("p");
  description2.className = "description";
  content.appendChild(description2);

  description2.innerHTML = "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert!"
  }