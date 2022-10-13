export default function printMenu() {
   
    const foodContent = document.querySelector("#content");  

    //Food number 1

    const food1 = document.createElement("div");
    food1.className = "food";
    content.appendChild(food1);

    const img1 = document.createElement("img");
    img1.className = "food_image";
    img1.src = "fries.jpg";
    food1.appendChild(img1);

    const foodDescription1 = document.createElement("div");
    foodDescription1.className = "foodDescription";
    food1.appendChild(foodDescription1);

    const foodPrice1 = document.createElement("div");
    foodPrice1.className = "foodPrice";
    foodPrice1.innerHTML = "$3";
    foodDescription1.appendChild(foodPrice1);

    const foodAbout1 = document.createElement("p");
    foodAbout1.className = "foodAbout";
    foodAbout1.innerHTML = "One family, a chip truck and Australia’s festival scene. Our fries are made from locally sourced, fresh Aussie potatoes, cooked with their skins on in a sustainable non-gmo cottonseed sunflower oil blend and ready to be enjoyed with any of our internationally inspired dipping sauces."
    foodDescription1.appendChild(foodAbout1);

    //Food number 2

    const food2 = document.createElement("div");
    food2.className = "food";
    content.appendChild(food2);

    const img2 = document.createElement("img");
    img2.className = "food_image";
    img2.src = "wings.jpg";
    food2.appendChild(img2);

    const foodDescription2 = document.createElement("div");
    foodDescription2.className = "foodDescription";
    food2.appendChild(foodDescription2);

    const foodPrice2 = document.createElement("div");
    foodPrice2.className = "foodPrice";
    foodPrice2.innerHTML = "$8";
    foodDescription2.appendChild(foodPrice2);

    const foodAbout2 = document.createElement("p");
    foodAbout2.className = "foodAbout";
    foodAbout2.innerHTML = "Game day isn't complete without chicken wings, so it's hard to believe that this popular bar snack has only been around since 1964. The dish was created by the Bellissimo family at their establishment in Buffalo, New York, supposedly as a way to use up an accidental shipment of wings.";
    foodDescription2.appendChild(foodAbout2);


    //Food number 3

    const food3 = document.createElement("div");
    food3.className = "food";
    content.appendChild(food3);

    const img3 = document.createElement("img");
    img3.className = "food_image";
    img3.src = "pizza.jpg";
    food3.appendChild(img3);

    const foodDescription3 = document.createElement("div");
    foodDescription3.className = "foodDescription";
    food3.appendChild(foodDescription3);

    const foodPrice3 = document.createElement("div");
    foodPrice3.className = "foodPrice";
    foodPrice3.innerHTML = "$15";
    foodDescription3.appendChild(foodPrice3);

    const foodAbout3 = document.createElement("p");
    foodAbout3.className = "foodAbout";
    foodAbout3.innerHTML = ""
    foodDescription3.appendChild(foodAbout3);
}