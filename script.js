
const myH1 = document.querySelector("#myH1");
const myButton = document.querySelector("#myButton");


//myH1tag.textContent = "Godbye World!";

myButton.addEventListener(
    "click",
    newContent
);

function newContent() {
   myH1.textContent = "Godbye World!";
}
