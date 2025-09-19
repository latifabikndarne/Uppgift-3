
const h1 = document.querySelector("Hellow World!");
const button = document.querySelector("myButton");

button.addEventListener(
    "click",

    function () {

        h1.changetextContent = "Goodbye World!";
    }

)
