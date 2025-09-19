
const myH1 = document.querySelector("#myH1");
const myButton = document.querySelector("#myButton");


myButton.addEventListener(
    "click",
    newContent
);

function newContent() {
    myH1.textContent = "Godbye World!";
}
