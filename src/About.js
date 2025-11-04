function about() {
    const content  = document.querySelector("#content");
    content.replaceChildren();

    const contact  = document.createElement("div");
    contact.className = "heading";
    contact.textContent = "Contact Us";

    content.appendChild(contact);

    const chefCont = document.createElement("div");
    chefCont.className = "contact-cont";
    const chefName = document.createElement('h3');
    chefName.textContent = "Ashley Wright";
    chefCont.appendChild(chefName);
    const chefTitle = document.createElement("p")
    chefTitle.textContent = "Chef";
    chefCont.appendChild(chefTitle);
    const chefNum = document.createElement("p");
    chefNum.textContent = "876-543-210"
    chefCont.appendChild(chefNum);
    const chefEmail = document.createElement("p");
    chefEmail.textContent = "placeholder@random.com";
    chefCont.appendChild(chefEmail);

    content.appendChild(chefCont);

    const managerCont = document.createElement("div");
    managerCont.className = "contact-cont";
    const managerName = document.createElement('h3');
    managerName.textContent = "James Bond";
    managerCont.appendChild(managerName);
    const managerTitle = document.createElement("p")
    managerTitle.textContent = "Manager";
    managerCont.appendChild(managerTitle);
    const managerNum = document.createElement("p");
    managerNum.textContent = "876-543-210"
    managerCont.appendChild(managerNum);
    const managerEmail = document.createElement("p");
    managerEmail.textContent = "placeholder@random.com";
    managerCont.appendChild(managerEmail);

    content.appendChild(managerCont);
    
}

export {about};