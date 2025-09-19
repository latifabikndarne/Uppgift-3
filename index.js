
const h1 = document.querySelector("Hellow World!");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button Clicked!");
});

const changeTextContent = (h1) => {
    h1.textContent = "Goodbye World!";
};
changeTextContent(h1);
