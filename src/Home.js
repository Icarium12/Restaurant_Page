import dinerImage from "./diner.jpg";


function home() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const heading = document.createElement("div");
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

}

export {home};