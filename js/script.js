{
    const welcome = () => {
        console.log("Hello everyone!!! It's really nice to see you here.");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const nextColor = document.querySelector(".js-nextColor");

        body.classList.toggle("body--nextColor");
        nextColor.innerText = body.classList.contains("body--nextColor") ? "ciemny" : "jasny";
    }; 
    
    const init = () => {
        const navigationButtonElement = document.querySelector(".js-navigationButton");   
        navigationButtonElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
};
