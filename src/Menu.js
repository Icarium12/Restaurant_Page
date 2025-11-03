function menu() {
    const content = document.querySelector("#content");

    const beverageCont = document.createElement("div");
    beverageCont.className = "beverage-cont";
    const beverages  = document.createElement("div");
    beverages.textContent = "Beverages";
    beverageCont.appendChild(beverages);

    const beverage1 = document.createElement("div");
    beverage1.className = "menu-item";
    const blackCoffee = document.createElement("h2");
    blackCoffee.textContent = "Black Coffee: $5";
    beverage1.appendChild(blackCoffee);
    const bcInfo = document.createElement("p");
    bcInfo.textContent = `An aromatic, stimulating hot beverage prepared from 
                        the roasted and brewed seeds of the Coffea plant`;
    beverage1.appendChild(bcInfo);
    const bcImg = document.createElement("div");
    bcImg.className = "menu-image";
    beverage1.appendChild(bcImg);

    beverageCont.appendChild(beverage1);
    


    const beverage2 = document.createElement("div");
    beverage2.className = "menu-item";
    const orangeJuice = document.createElement("h2");
    orangeJuice.textContent = "Orange Juice: $3";
    beverage2.appendChild(orangeJuice);
    const ojInfo = document.createElement("p");
    ojInfo.textContent = `A refreshing, non-alchohlic, non-carbonated beverage made from
                            the extraction or squeezing of fresh oranges`;
    beverage2.appendChild(ojInfo)
    const ojImg = document.createElement("div");
    ojImg.className = "menu-image";
    beverage2.appendChild(ojImg)
    beverageCont.appendChild(beverage2);

    content.appendChild(beverageCont);


    const mainDishCont = document.createElement("div");
    mainDishCont.className = "maindish-cont";

    const dish1 = document.createElement("div");
    dish1.className = "menu-item";
    const breakfast = document.createElement("h2");
    breakfast.textContent = "The Classic Breakfast: $10";
    dish1.appendChild(breakfast);

    const breakfastInfo = document.createElement("p");
    breakfastInfo.textContent = `A timeless breakfast that includes two eggs, your choice of toast and
                                fried potatoes or hash browns.`;
    dish1.appendChild(breakfastInfo);

    const breakfastImg = document.createElement("div");
    breakfastImg.className = "menu-image";
    dish1.appendChild(breakfastImg);

    mainDishCont.appendChild(dish1);

    const dish2 = document.createElement("div");
    dish2.className = "menu-item";
    const burger = document.createElement("h2");
    burger.textContent = "Burger and Fries: $15";
    dish2.appendChild(burger);

    const burgerInfo = document.createElement("p");
    burgerInfo.textContent = `A juicy hamburger made with 100% beef, served on a bun with toppings of lettuce,
                             tomato, and onion, and accompanied by a generous portion of cripsy frech fries.`;
    dish2.appendChild(burgerInfo);

    const burgerImg = document.createElement("div");
    burgerImg.className = "menu-image";
    dish2.appendChild(burgerImg);

    mainDishCont.appendChild(dish2);

    const dish3 = document.createElement("div");
    dish3.className = "menu-item";
    const meatloaf = document.createElement("h2");
    meatloaf.textContent = "Meatloaf: $15";
    dish3.appendChild(meatloaf);

    const meatloafInfo = document.createElement("p");
    meatloafInfo.textContent = `A comforting plate featuring a thick slice of meatloaf, typically made with ground
                                beef and onions, served with a side of creamy mashed potatoes and rich gravy.`;
    dish3.appendChild(meatloafInfo);

    const meatloafImg = document.createElement('div');
    meatloafImg.className = "menu-image";
    dish3.appendChild(meatloafImg);

    mainDishCont.appendChild(dish3);


    const dish4 = document.createElement("div");
    dish4.className = "menu-item";
    const sandwich = document.createElement("h2");
    sandwich.textContent = "The Club Sandwich: $10";
    dish4.appendChild(sandwich);

    const sandwichInfo = document.createElement("p");
    sandwichInfo.textContent = `A multi-layered sandwich, often toasted, with a filing the includes turkey, ham, bacon
                                letuce, and tomato, stacked between slices of bread.`;
    dish4.appendChild(sandwichInfo);

    const sandwichImg  = document.createElement("div");
    sandwichImg.className = "menu-image";
    dish4.appendChild(sandwichImg);

    mainDishCont.appendChild(dish4);
    content.appendChild(mainDishCont);
}

export {menu};