function changeTheme(){
    const d = new Date();
    let hour = d.getHours();
    if(hour >= 19 | hour <= 7){
        darkMode()
    }
}

function darkMode(){
    
    document.body.style.backgroundColor = "var(--night-color)";
    document.body.style.color = "var(--night-text)";
    const accordionItems = document.querySelectorAll(".accordion-item");
    const accordionBtns = document.querySelectorAll(".accordion-button");
    accordionItems.forEach(element => {
        element.style.color = "var(--night-secondary)";
        const btn = element.querySelector(".accordion-button");
        btn.style.color = "var(--night-text)";

    });
    const navs = document.querySelectorAll(".navbar a");
    navs.forEach(element => {
        element.style.color = "var(--night-secondary)";

    });
    // changeBkyrd();
    changeModals();
    
}
function changeBkyrd(){
    const backyard = document.querySelector("#backyard");
    backyard.style.backgroundColor = "whitesmoke";
    backyard.style.color = "var(--primary-color)";
}
function changeModals(){
    const modals = document.querySelectorAll(".modal-content");
    modals.forEach(modal => {
        modal.style.backgroundColor = "var(--night-color)";
    });
}
changeTheme()