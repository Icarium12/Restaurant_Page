import dinerImage from "./diner.jpg";


function home() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const heading = document.createElement("h1");
    heading.className = "restaurant-name"
    heading.textContent = "Praise's Diner";
    content.appendChild(heading);

    const image = document.createElement("img");
    image.src = dinerImage;
    content.appendChild(image)

    const info = document.createElement("div");
    info.textContent = `Welcome to Praise's Diner where alot of comport food is available. 
                        We are open 24/7. 
                        Come and enjoy`;
    content.appendChild(info);

    const location = document.createElement("div");
    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";
    location.appendChild(locationTitle);
    const address = document.createElement("p");
    address.textContent = "123 Having Hope, Atlanta, Georgia";
    location.appendChild(address);
    content.appendChild(location);

}

export {home};