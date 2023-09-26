console.log("Hello!!!");

let navigationButtonElement = document.querySelector('.js-navigationButton');
let body = document.querySelector('.body');
let themeName = document.querySelector('.themeName');

navigationButtonElement.addEventListener("click", () => {
    body.classList.toggle('changeTheme');

    themeName.innerText = body.classList.contains("changeTheme") ? "ciemny" : "jasny";
})